import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { Row, Container, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';


function About() {
    const CustomToggle = ({ children, eventKey }) => {
        const decoratedOnClick = useAccordionButton(eventKey, () =>
            console.log('totally custom!'),
        );
        return (
            <button
                type="button"
                style={{ backgroundColor: 'pink' }}
                onClick={decoratedOnClick}
            >
                {children}
            </button>
        );
    };
    return (
        <section className="about" id="about">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <div className="about-bx">
                                        <h2>About Me</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                                        <Accordion defaultActiveKey="0">
                                            <Card>
                                                <Card.Header>
                                                    <CustomToggle eventKey="0">Education</CustomToggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="0">
                                                    <Card.Body>Education (cards that hold the activies classes, gpa etc.)</Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card>
                                                <Card.Header>
                                                    <CustomToggle eventKey="1">Work Experience</CustomToggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="1">
                                                    <Card.Body>Work Experience (Cards that hold each experience like the squares)</Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card>
                                                <Card.Header>
                                                    <CustomToggle eventKey="2">Skills</CustomToggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="2">
                                                    <Card.Body>Skills (Technicals)</Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </Accordion>
                                    </div>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};



export default About;