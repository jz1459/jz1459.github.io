import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import PokerHandApp from "../assets/poker-7174110.png";
import WorkInProgress from "../assets/work-in-progress.png";
import { Col, Row } from "react-bootstrap";
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


function ProjectCard() {
    return (
        <Row>
            <div className="twelve columns collapsed">
                <div id="proj-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                    <div className="columns proj-item">
                        <div className="proj-itemWrapper">
                            <a href="#modal-01" title="">
                                <img src={projects[0].imgUrl} alt="" />
                                <div className="proj-overlay">
                                    <div className="proj-title">
                                        <h4>{projects[0].title}</h4>
                                    </div>
                                </div>
                                <div className="proj-plusSign">
                                    <img src={Plus} alt="Plus Sign"></img>
                                </div>
                            </a>
                        </div>
                        <div className="columns proj-item">
                            <div className="proj-itemWrapper">
                                <a href="#modal-01" title="">
                                    <img src={projects[1].imgUrl} alt="" />
                                    <div className="proj-overlay">
                                        <div className="proj-title">
                                            <h4>{projects[1].title}</h4>
                                        </div>
                                    </div>
                                    <div className="proj-plusSign">
                                        <img src={Plus} alt="Plus Sign"></img>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="columns proj-item">
                            <div className="proj-itemWrapper">
                                <a href="#modal-01" title="">
                                    <img src={projects[2].imgUrl} alt="" />
                                    <div className="proj-overlay">
                                        <div className="proj-title">
                                            <h4>{projects[2].title}</h4>
                                        </div>
                                    </div>
                                    <div className="proj-plusSign">
                                        <img src={Plus} alt="Plus Sign"></img>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="columns proj-item">
                            <div className="proj-itemWrapper">
                                <a href="#modal-01" title="">
                                    <img src={projects[3].imgUrl} alt="" />
                                    <div className="proj-overlay">
                                        <div className="proj-title">
                                            <h4>{projects[3].title}</h4>
                                        </div>
                                    </div>
                                    <div className="proj-plusSign">
                                        <img src={Plus} alt="Plus Sign"></img>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Row>
    );
};


function ProjectPopUps() {
    
    return (
        <div className="proj-descriptions">
            <div id="modal-01" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src={projects[0].imgUrl} alt="" />
                <div className="description-box">
                    <h4>{projects[0].title}</h4>
                    <p>{projects[0].description}</p>
                    <span className="categories">{projects[0].technicals}</span>
                </div>
                <div className="link-box">
                    <a href={projects[0].gitHub} target="_blank">View on GitHub</a>
                    <a className="popup-modal-dismiss">Close</a>
                </div>
            </div>
            <div id="modal-02" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src={projects[1].imgUrl} alt="" />
                <div className="description-box">
                    <h4>{projects[1].title}</h4>
                    <p>{projects[1].description}</p>
                    <span className="categories">{projects[1].technicals}</span>
                </div>
                <div className="link-box">
                    <a href={projects[0].gitHub} target="_blank">View on GitHub</a>
                    <a className="popup-modal-dismiss">Close</a>
                </div>
            </div>
            <div id="modal-03" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src={projects[2].imgUrl} alt="" />
                <div className="description-box">
                    <h4>{projects[2].title}</h4>
                    <p>{projects[2].description}</p>
                    <span className="categories">{projects[2].technicals}</span>
                </div>
                <div className="link-box">
                    <a href={projects[0].gitHub} target="_blank">View on GitHub</a>
                    <a className="popup-modal-dismiss">Close</a>
                </div>
            </div>
            <div id="modal-04" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src={projects[3].imgUrl} alt="" />
                <div className="description-box">
                    <h4>{projects[3].title}</h4>
                    <p>{projects[3].description}</p>
                    <span className="categories">{projects[3].technicals}</span>
                </div>
                <div className="link-box">
                    <a href={projects[3].gitHub} target="_blank">View on GitHub</a>
                    <a className="popup-modal-dismiss">Close</a>
                </div>
            </div>
        </div>
    );
};
export default ProjectCarousel;

export { ProjectCard , ProjectPopUps};