import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCarousel, {ProjectCard} from "../components/ProjectCards";
// import colorSharp2 from "../assets/.png";
import 'animate.css';
// import TrackVisibility from 'react-on-screen';
import PokerHandApp from "../assets/poker-7174110.png";
import WorkInProgress from "../assets/work-in-progress.png";
import Plus from "../assets/plus.svg";

const projects = [
        {
            title: "Poker Hand App",
            technicals: "Used: Poker-odds API, React, JS, HTML, CSS",
            description: "Gives probability of your poker hand winning based off the cards in your hand and those on the table",
            imgUrl: PokerHandApp,
            gitHub: "https://github.com/jz1459",
        },
        {
            title: "To-Do App w/ Randomizer",
            technicals: "Design & Development",
            description: "In Progress",
            imgUrl: WorkInProgress,
            gitHub: "https://github.com/jz1459",
        },
        {
            title: "Taste of China Website",
            technicals: "Design & Development",
            description: "In Progress",
            imgUrl: WorkInProgress,
            gitHub: "https://github.com/jz1459",
        },
        {
            title: "Fantasy Football App",
            technicals: "Design & Development",
            description: "In Progress",
            imgUrl: WorkInProgress,
            gitHub: "https://github.com/jz1459",
        },
];
function Projects(){
    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        {/* <TrackVisibility> */}
                        {/* {({ isVisible }) => */}
                        {/* <div className={isVisible ? "animate__animated animate__fadeIn" : ""}> */}
                        <div className="projects-bx">
                            <div className="section-header">
                                <h5>Projects</h5>
                                <h1>Check out some of my projects.</h1>
                            </div>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">List View</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Carousel View</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="slideInUp">
                                    {/* <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}> */}
                                    <Tab.Pane eventKey="first">
                                        <ProjectCard />
                                        {/* <ProjectPopUps /> */}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <ProjectCarousel />
                                    </Tab.Pane>
                                </Tab.Content>
        
                            </Tab.Container>
                        </div>
                        {/* </div>} */}
                        {/* </TrackVisibility> */}
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-right" src={colorSharp2}></img> */}
        </section>
    );
};

export default Projects;