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
    const [charTime, setCharTime] = useState(300 - Math.random() * 100);
    const toRotate = ["Software Developer", "Sports Enthusiast", "Computer Science Student at Yale"];
    const wordDelay = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, charTime);
        
        return () => { clearInterval(ticker) };
    });

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
            setCharTime(wordDelay);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setCharTime(400);
        }
    };

    return (
        <section className="home" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={8} xl={8} sm={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio!</span>
                                    <h1>{`Hi! I'm Jason, a`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Developer", "Sports Enthusiast", "Car Fanatic" ]'><span className="wrap">{text}</span></span></h1>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={4} xl={4} sm={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <div className="pfp">
                                            <img src={Pfp} alt="me" />
                                        </div>
                                    </div>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
                <Row>
                     <button><a href="#contact">Let’s Connect <ArrowRightCircle size={25} /></a></button>
                </Row>
                <div className="go-down"><a href="#about"><i className = "bi bi-arrow-down-circle-fill"></i></a></div>
            </Container>
        </section>
    );
};

export default Home;
