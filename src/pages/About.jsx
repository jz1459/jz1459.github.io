import { React } from "react";
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { Row, Container, Col } from 'react-bootstrap';

function About() {
    const CustomToggle = ({ children, eventKey }) => {
        const decoratedOnClick = useAccordionButton(eventKey, () =>
            console.log('totally custom!'),
        );
        return (
            <button
                type="button"
                style={{
                    backgroundColor: 'white',
                    border: '1px solid black',
                    color: 'black'
                }}
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
                        <div className="about-bx">
                            <div className="section-header">
                                <h5>
                                    About
                                </h5>
                                <h1>Let me introduce myself.</h1>
                                <p>
                                    I am a first-generation student at Yale University pursuing a Bachelor of Science in Computer Science and Economics with a Certificate in Data Science. My primary interests lie within the intersection of finance and computer science.
                                    <br></br>
                            
                                    <br></br>
                                    I am actively seeking summer 2024 internships for software engineering.
                                </p>
                                
                            </div>
                                <Accordion>
                                 
                                    <Card>
                                        <Card.Header>
                                            <CustomToggle eventKey="0">Education</CustomToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body >
                                                <Row className="d-flex align-items-center justify-content-center">
                                                    <div className='resume-timeline'>
                                                        <Col size={12}>
                                                            <div className="timeline">
                                                                <div className="timeline-block">
                                                                    <div className="timeline-icon">
                                                                        <i className="bi bi-pencil-fill"></i>
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
                                                                <div className="timeline-block">
                                                                    <div className="timeline-icon">
                                                                        <i className="bi bi-pencil-fill"></i>
                                                                    </div>
                                                                    <div className="timeline-header">
                                                                        <h3>Certificate</h3>
                                                                        <p>June 2022 - July 2022</p>
                                                                    </div>
                                                                    <div className="timeline-body">
                                                                        <h4>London School of Economics</h4>
                                                                        <p>Distinction in Finance (FM250) and Introduction to Behavioral Economics (EC200)</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="timeline">
                                                                <div className="timeline-block">
                                                                    <div className="timeline-icon">
                                                                        <i className="bi bi-pencil-fill"></i>
                                                                    </div>
                                                                    <div className="timeline-header">
                                                                        <h3>High School Degree</h3>
                                                                        <p>September 2017 - June 2021</p>
                                                                    </div>
                                                                    <div className="timeline-body">
                                                                        <h4>Saratoga Springs High School</h4>
                                                                        <p>Regents Diploma with Advanced Designation with Honors with Mastery in Math and Science</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </div>
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
                                                <Row className="d-flex align-items-center justify-content-center">
                                                    <div className='resume-timeline'>
                                                        <Col size={12}>
                                                            <div className="timeline">
                                                                <div className="timeline-block">
                                                                    <div className="timeline-icon">
                                                                        <i className="bi bi-briefcase-fill"></i>
                                                                    </div>
                                                                    <div className="timeline-header">
                                                                        <h3>Research Assistant (Data Visualizations)</h3>
                                                                        <p>May 2022 - September 2022</p>
                                                                    </div>
                                                                    <div className="timeline-body">
                                                                        <h4>Yale Center for Environmental Law & Policy</h4>
                                                                        <p>Successfully researched, tested, and built the framework for a Sankey Diagram that dynamically filters and tracks the environmental impacts of over 100 countries' trade flows according to 33 different indicators using RShiny</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="timeline">
                                                                <div className="timeline-block">
                                                                    <div className="timeline-icon">
                                                                        <i className="bi bi-briefcase-fill"></i>
                                                                    </div>
                                                                    <div className="timeline-header">
                                                                        <h3>Data Analyst</h3>
                                                                        <p>January 2022 - June 2022</p>
                                                                    </div>
                                                                    <div className="timeline-body">
                                                                        <h4>AlgoED</h4>
                                                                        <p>Researched and organized over 20 UK colleges’ admissions data and individual subject entry requirements into an extensive spreadsheet database (230,000+ cells) to serve as the data backbone for an Ed-Tech consulting start-up</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="timeline">
                                                                <div className="timeline-block">
                                                                    <div className="timeline-icon">
                                                                        <i className="bi bi-briefcase-fill"></i>
                                                                    </div>
                                                                    <div className="timeline-header">
                                                                        <h3>Business Development Intern</h3>
                                                                        <p>June 2021 - September 2022</p>
                                                                    </div>
                                                                    <div className="timeline-body">
                                                                        <h4>Eyre Writing Center</h4>
                                                                        <p>Streamlined processes for marketing, onboarding, and maintenance of new and existing cohorts of students; Designed and developed a working prototype to pitch to investors using various no-code platforms (Bubble) and researched agile project management (epics, user stories) for software development</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </div>
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
                                                <Row className="d-flex align-items-center justify-content-center">
                                                    <div className='resume-timeline'>
                                                        <Col size={12}>
                                                            <div className="timeline">
                                                                <div className="timeline-block">
                                                                    <div className="timeline-icon">
                                                                        <i className="bi bi-activity"></i>
                                                                    </div>
                                                                    <div className="timeline-header">
                                                                        <h3>Vice President of Finance and Operations</h3>
                                                                        <p>January 2023 - Present</p>
                                                                    </div>
                                                                    <div className="timeline-body">
                                                                        <h4>Scholars of Finance - Yale Chapter</h4>
                                                                        <p></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="timeline">
                                                                <div className="timeline-block">
                                                                    <div className="timeline-icon">
                                                                        <i className="bi bi-activity"></i>
                                                                    </div>
                                                                    <div className="timeline-header">
                                                                        <h3>Industrials Analyst</h3>
                                                                        <p>January 2023 - Present</p>
                                                                    </div>
                                                                    <div className="timeline-body">
                                                                        <h4>The Urban Philantropic Fund</h4>
                                                                        <p></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="timeline">
                                                                <div className="timeline-block">
                                                                    <div className="timeline-icon">
                                                                        <i className="bi bi-activity"></i>
                                                                    </div>
                                                                    <div className="timeline-header">
                                                                        <h3>Player</h3>
                                                                        <p>September 2022 - Present</p>
                                                                    </div>
                                                                    <div className="timeline-body">
                                                                        <h4>Club Water Polo</h4>
                                                                        <p></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="timeline">
                                                                <div className="timeline-block">
                                                                    <div className="timeline-icon">
                                                                        <i className="bi bi-activity"></i>
                                                                    </div>
                                                                    <div className="timeline-header">
                                                                        <h3>Advanced Tax Preparer</h3>
                                                                        <p>January 2022 - Present</p>
                                                                    </div>
                                                                    <div className="timeline-body">
                                                                        <h4>Volunteer Income Tax Assistance</h4>
                                                                        <p></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="timeline">
                                                                <div className="timeline-block">
                                                                    <div className="timeline-icon">
                                                                        <i className="bi bi-activity"></i>
                                                                    </div>
                                                                    <div className="timeline-header">
                                                                        <h3>Project Manager</h3>
                                                                        <p>January 2022 - Present</p>
                                                                    </div>
                                                                    <div className="timeline-body">
                                                                        <h4>Elmseed Enterprise Fund</h4>
                                                                        <p></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="timeline">
                                                                <div className="timeline-block">
                                                                    <div className="timeline-icon">
                                                                        <i className="bi bi-activity"></i>
                                                                    </div>
                                                                    <div className="timeline-header">
                                                                        <h3>Back-End Developer</h3>
                                                                        <p>January 2022 - Present</p>
                                                                    </div>
                                                                    <div className="timeline-body">
                                                                        <h4>Yale Daily News</h4>
                                                                        <p></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="timeline">
                                                                <div className="timeline-block">
                                                                    <div className="timeline-icon">
                                                                        <i className="bi bi-activity"></i>
                                                                    </div>
                                                                    <div className="timeline-header">
                                                                        <h3>Treasurer, Operations Manager</h3>
                                                                        <p>September 2021 - Present</p>
                                                                    </div>
                                                                    <div className="timeline-body">
                                                                        <h4>Chinese American Students Association</h4>
                                                                        <p></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="timeline">
                                                                <div className="timeline-block">
                                                                    <div className="timeline-icon">
                                                                        <i className="bi bi-activity"></i>
                                                                    </div>
                                                                    <div className="timeline-header">
                                                                        <h3>Player</h3>
                                                                        <p>September 2021 - Present</p>
                                                                    </div>
                                                                    <div className="timeline-body">
                                                                        <h4>Club Swim</h4>
                                                                        <p></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="timeline">
                                                                <div className="timeline-block">
                                                                    <div className="timeline-icon">
                                                                        <i className="bi bi-activity"></i>
                                                                    </div>
                                                                    <div className="timeline-header">
                                                                        <h3>Team Member</h3>
                                                                        <p>September 2021 - Present</p>
                                                                    </div>
                                                                    <div className="timeline-body">
                                                                        <h4>Yale Undergraduate Diversified Investments</h4>
                                                                        <p></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </div>
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
                                                <div className='resume-skills'>
                                                    <h5> Languages </h5><h6> C | Python | R | JS | Java | HTML | CSS | MongoDB | Unix | Git | x86-Assembly | LateX | Racket | Bubble</h6>
                                                    <br></br>
                                                    <h5>Frameworks/Libraries </h5><h6>Node | React | Bootstrap | Express | Mongoose | jQuery | EJS | Axios | RShiny</h6>
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            <button className='resume-button'><span>Resume</span></button>     
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};



export default About;