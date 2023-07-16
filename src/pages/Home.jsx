import { React, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Pfp from "../assets/profilePic.JPG";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Home() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [charTime, setCharTime] = useState(200);
    // const [index, setIndex] = useState(1);
    const toRotate = [  "Software Developer", "Sports Enthusiast", "Car Fanatic" ];
    const wordDelay = 100;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, charTime);
        
        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setCharTime(prevCharTime => prevCharTime / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            // setIndex(prevIndex => prevIndex - 1);
            setCharTime(wordDelay);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            // setIndex(1);
            setCharTime(400);
        // } else {
            // setIndex(prevIndex => prevIndex + 1);
        }
    };
    return (
        <section className="home" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio!</span>
                                    <h1>{`Hi! I'm Jason, a`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Developer", "Sports Enthusiast", "Car Fanatic" ]'><span className="wrap">{text}</span></span></h1>
                                    <p>I am currently a rising junior at Yale University majoring in Computer Science and Economics with a Certificate in Data Science.</p>
                                    <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={Pfp} alt="me" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Home;