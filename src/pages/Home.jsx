import { React, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Pfp from "../assets/profilePic.JPG";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import Down from "../assets/chevron-down.svg";
// import { Waypoint } from 'react-waypoint';

function Home() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [charTime, setCharTime] = useState(200);
    const [index, setIndex] = useState(1);
    const toRotate = [  "Software Developer", "Sports Enthusiast", "Computer Science Student at Yale"];
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
            setIndex(prevIndex => prevIndex - 1);
            setCharTime(wordDelay);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setCharTime(400);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    };

    const handleWayPointEnter = () => (
        document.querySelector('#homeLink').classList.add('active'));
    
    const handleWayPointLeave = () => (
        document.querySelector('#homeLink').classList.remove('active'));

    return (
        // <Waypoint
        //     onEnter={handleWayPointEnter}
        //     onLeave={handleWayPointLeave}
        // >
        <section className="home" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={8} xl={8} sm={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio!</span>
                                    <h1>{`Hi! I'm Jason, a`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Developer", "Sports Enthusiast", "Car Fanatic" ]'><span className="wrap">{text}</span></span></h1>
                                    {/* <p>I am currently a rising junior at Yale University majoring in Computer Science and Economics with a Certificate in Data Science.</p> */}
                                    {/* <Waypoint
            onEnter={handleWayPointEnter}
            onLeave={handleWayPointLeave}
        > */}
                                   
                                    {/* </Waypoint> */}
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
                <div className="go-down"><a href="#about"><i className = "bi bi-arrow-down-circle-fill"></i>{/*<img src={Down} alt="Down Arrow" />*/}</a></div>
            </Container>
        </section>
        // </Waypoint>
    );
};

export default Home;
