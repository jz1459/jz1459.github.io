import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../components/ProjectCard";
import projImg1 from "../assets/poker-7174110.png";
import projImg2 from "../assets/poker-7174110.png";
import projImg3 from "../assets/poker-7174110.png";
// import colorSharp2 from "../assets/.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Projects(){

    const projects = [
        {
            title: "Poker Hand App",
            technicals: "Used: Poker-odds API, React, JS, HTML, CSS",
            description: "Gives probability of your poker hand winning based off the cards in your hand and those on the table",
            imgUrl: projImg1,
        },
        {
            title: "To-Do App w/ Randomizer",
            technicals: "Design & Development",
            description: "In Progress",
            imgUrl: projImg2,
        },
        {
            title: "Taste of China Website",
            technicals: "Design & Development",
            description: "In Progress",
            imgUrl: projImg3,
        },
        {
            title: "Fantasy Football App",
            technicals: "Design & Development",
            description: "In Progress",
            imgUrl: projImg1,
        },
    ];

    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>Projects Below</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">List View</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Carousel View</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-right" src={colorSharp2}></img> */}
        </section>
    );
};

export default Projects;