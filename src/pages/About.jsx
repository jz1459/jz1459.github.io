import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { Row, Container, Col } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import Activity from '../assets/activity.svg';
import Briefcase from '../assets/briefcase-fill.svg';
import Pencil from '../assets/pencil-fill.svg';


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
                                        <div className = "section-header">
                                        <p>
                                            About
                                        </p>
                                        <h2>Let me introduce myself.</h2>
                                        <p>
                                            I am a first-generation student at Yale University pursuing a Bachelor of Science in Computer Science and Economics with a Certificate in Data Science. My primary interests lie within the intersection of finance and computer science. 
                                            <br>
                                            </br>
                                            I am actively seeking summer 2024 internships for software engineering. 
                                            </p>
                                        </div>
                                        <Accordion defaultActiveKey="0">
                                            <Card>
                                                <Card.Header>
                                                    <CustomToggle eventKey="0">Education</CustomToggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="0">
                                                    <Card.Body>
                                                        <Row className = "resume-timeline">
                                                            <Col size={12}>
                                                                <div className="timeline">
                                                                    <div className = "timeline-block">
                                                                        <div className="timeline-icon">
                                                                            <i className="pencil"><img src={Pencil} alt="Pencil" /></i>
                                                                        </div>
                                                                        <div className="timeline-header">
                                                                            <h3>Bachelor's Degree</h3>
                                                                            <p>August 2021 - May 2025</p>
                                                                        </div>
                                                                        <div className="timeline-body">
                                                                            <h4>Yale University</h4>
                                                                            <p>B.S. Computer Science and Economics, Certificate in Data Science</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="timeline">
                                                                    <div className = "timeline-block">
                                                                        <div className="timeline-icon">
                                                                            <i className="pencil"><img src={Pencil} alt="Pencil" /></i>
                                                                        </div>
                                                                        <div className="timeline-header">
                                                                            <h3>Certificate</h3>
                                                                            <p>June 2022-July 2022</p>
                                                                        </div>
                                                                        <div className="timeline-body">
                                                                            <h4>London School of Economics</h4>
                                                                            <p>Distinction in Finance (FM250) and Introduction to Behavioral Economics (EC200)</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="timeline">
                                                                    <div className = "timeline-block">
                                                                        <div className="timeline-icon">
                                                                            <i className="pencil"><img src={Pencil} alt="Pencil" /></i>
                                                                        </div>
                                                                        <div className="timeline-header">
                                                                            <h3>High School Degree</h3>
                                                                            <p>September 2017-June 2021</p>
                                                                        </div>
                                                                        <div className="timeline-body">
                                                                            <h4>Saratoga Springs High School</h4>
                                                                            <p>Regents Diploma with Advanced Desgination with Honors with Mastery in Math and Science</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card>
                                                <Card.Header>
                                                    <CustomToggle eventKey="1">Work Experience</CustomToggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="1">
                                                    <Card.Body>
                                                        <Row className = "resume-timeline">
                                                            <Col size={12}>
                                                                <div className="timeline">
                                                                    <div className = "timeline-block">
                                                                        <div className="timeline-icon">
                                                                            <i className="work"><img src={Briefcase} alt="Briefcase" /></i>
                                                                        </div>
                                                                        <div className="timeline-header">
                                                                            <h3>Bachelor's Degree</h3>
                                                                            <p>August 2021 - May 2025</p>
                                                                        </div>
                                                                        <div className="timeline-body">
                                                                            <h4>Yale University</h4>
                                                                            <p>B.S. Computer Science and Economics, Certificate in Data Science</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="timeline">
                                                                    <div className = "timeline-block">
                                                                        <div className="timeline-icon">
                                                                            <i className="work"><img src={Briefcase} alt="Briefcase" /></i>
                                                                        </div>
                                                                        <div className="timeline-header">
                                                                            <h3>Bachelor's Degree</h3>
                                                                            <p>August 2021 - May 2025</p>
                                                                        </div>
                                                                        <div className="timeline-body">
                                                                            <h4>Yale University</h4>
                                                                            <p>B.S. Computer Science and Economics, Certificate in Data Science</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="timeline">
                                                                    <div className = "timeline-block">
                                                                        <div className="timeline-icon">
                                                                            <i className="work"><img src={Briefcase} alt="Briefcase" /></i>
                                                                        </div>
                                                                        <div className="timeline-header">
                                                                            <h3>Bachelor's Degree</h3>
                                                                            <p>August 2021 - May 2025</p>
                                                                        </div>
                                                                        <div className="timeline-body">
                                                                            <h4>Yale University</h4>
                                                                            <p>B.S. Computer Science and Economics, Certificate in Data Science</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card>
                                                <Card.Header>
                                                    <CustomToggle eventKey="2">Activities</CustomToggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="2">
                                                    <Card.Body>
                                                        <Row className = "resume-timeline">
                                                            <Col size={12}>
                                                                <div className="timeline">
                                                                    <div className = "timeline-block">
                                                                        <div className="timeline-icon">
                                                                            <i className="activity"><img src={Activity} alt="Activity" /></i>
                                                                        </div>
                                                                        <div className="timeline-header">
                                                                            <h3>Bachelor's Degree</h3>
                                                                            <p>August 2021 - May 2025</p>
                                                                        </div>
                                                                        <div className="timeline-body">
                                                                            <h4>Yale University</h4>
                                                                            <p>B.S. Computer Science and Economics, Certificate in Data Science</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="timeline">
                                                                    <div className = "timeline-block">
                                                                        <div className="timeline-icon">
                                                                            <i className="activity"><img src={Activity} alt="Activity" /></i>
                                                                        </div>
                                                                        <div className="timeline-header">
                                                                            <h3>Bachelor's Degree</h3>
                                                                            <p>August 2021 - May 2025</p>
                                                                        </div>
                                                                        <div className="timeline-body">
                                                                            <h4>Yale University</h4>
                                                                            <p>B.S. Computer Science and Economics, Certificate in Data Science</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="timeline">
                                                                    <div className = "timeline-block">
                                                                        <div className="timeline-icon">
                                                                            <i className="activity"><img src={Activity} alt="Activity" /></i>
                                                                        </div>
                                                                        <div className="timeline-header">
                                                                            <h3>Bachelor's Degree</h3>
                                                                            <p>August 2021 - May 2025</p>
                                                                        </div>
                                                                        <div className="timeline-body">
                                                                            <h4>Yale University</h4>
                                                                            <p>B.S. Computer Science and Economics, Certificate in Data Science</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card>
                                                <Card.Header>
                                                    <CustomToggle eventKey="3">Skills</CustomToggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="3">
                                                    <Card.Body>
                                                        Skills (Technicals)
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </Accordion>
                              
                                        <button><span>Resume</span></button>
                  
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