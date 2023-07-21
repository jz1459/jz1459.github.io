import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import PokerHandApp from "../assets/poker-7174110.png";
import WorkInProgress from "../assets/work-in-progress.png";
import { Col, Row } from "react-bootstrap";
import Plus from "../assets/plus.svg";
import ReactModal from 'react-modal';

const projects = [
        {
            title: "Poker Hand App",
            technicals: "Used: Poker-odds API, React, JS, HTML, CSS",
            description: "Gives probability of your poker hand winning based off the cards in your hand and those on the table",
            imgUrl: PokerHandApp,
        gitHub: "https://github.com/jz1459",
            id: 1,
        },
        {
            title: "To-Do App w/ Randomizer",
            technicals: "Design & Development",
            description: "In Progress",
            imgUrl: WorkInProgress,
            gitHub: "https://github.com/jz1459",
            id: 2,
        },
        {
            title: "Taste of China Website",
            technicals: "Design & Development",
            description: "In Progress",
            imgUrl: WorkInProgress,
            gitHub: "https://github.com/jz1459",
            id: 3,
        },
        {
            title: "Fantasy Football App",
            technicals: "Design & Development",
            description: "In Progress",
            imgUrl: WorkInProgress,
            gitHub: "https://github.com/jz1459",
            id: 4,
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
    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState(null);

    const handleClick = (data) => {
        setIsOpen(true);
        setModalData(data);
    };
    
    return (
        <>
            <Row>
                {projects.map(project => (
                    <Col size={12} sm={6} md={6}>
                        <div className="proj-item" key={project.id}>
                            <div className="proj-wrap">
                                <a
                                    onClick={() => {
                                        handleClick(project)
                                    }}>
                                    <img src={project.imgUrl} alt="Project Image" />
                                </a>
                                <div className="proj-overlay">
                                    <div className="proj-title">
                                        <h4>{project.title}</h4>
                                    </div>
                                    <div className="proj-plusSign">
                                        <img src={Plus} alt="Plus Sign" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
            <ReactModal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
            >
                <div className="proj-txtx">
                    <h4>{modalData.description}</h4>
                    <span>{modalData.technicals}</span>
                </div>
                <div className="proj-close">
                    <button onClick={() => isOpen(false)}>X</button>
                </div>
            </ReactModal>
        </>
    );
};


export default ProjectCarousel;

export { ProjectCard };