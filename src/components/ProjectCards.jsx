import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import PokerHandApp from "../assets/poker-7174110.png";
import WorkInProgress from "../assets/work-in-progress.png";
import { Col, Row } from "react-bootstrap";


const projects = [
        {
            title: "Poker Hand App",
            technicals: "Used: Poker-odds API, React, JS, HTML, CSS",
            description: "Gives probability of your poker hand winning based off the cards in your hand and those on the table",
            imgUrl: PokerHandApp,
        },
        {
            title: "To-Do App w/ Randomizer",
            technicals: "Design & Development",
            description: "In Progress",
            imgUrl: WorkInProgress,
        },
        {
            title: "Taste of China Website",
            technicals: "Design & Development",
            description: "In Progress",
            imgUrl: WorkInProgress,
        },
        {
            title: "Fantasy Football App",
            technicals: "Design & Development",
            description: "In Progress",
            imgUrl: WorkInProgress,
        },
];
    
function ProjectCarousel(props) {

    return (
        <Carousel>
            {projects.map(project => (
                <Carousel.Item interval={400} key={project.index}>
                    <img
                        className="d-block w-100"
                        src={project.imgUrl}
                        alt="slide"
                    />
                    <Carousel.Caption>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p>{project.technicals}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};


function ProjectCard () {
    return (
    <Row>
            {projects.map(project => (
                <Col size={12} sm={6} md={6}>
                    <div className="proj-imgbx">
                        <img src={project.imgUrl} alt="" />
                        <h4>{project.title}</h4>
                        <div className="proj-txtx">
                            <h4>{project.description}</h4>
                            <span>{project.technicals}</span>
                        </div>
                    </div>
                </Col>
            ))
            }
        </Row>
    );
};

export default ProjectCarousel;

export { ProjectCard };