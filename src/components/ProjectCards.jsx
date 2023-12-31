import React, {useState} from "react";
// import Carousel from 'react-bootstrap/Carousel';
import PokerHandApp from "../assets/poker-7174110.png";
import ToDoApp from "../assets/todoapp.png";
import WorkInProgress from "../assets/work-in-progress.png";
import Portfolio from "../assets/portfolio.png";
import TasteOfChina from "../assets/taste-of-china.png";
import FootballGrid from "../assets/football-grid.png";
import { Col, Row, Modal, Button, Container } from "react-bootstrap";



const projects = [
    {
        title: "Poker Hand App",
        technicals: "React, JS, HTML, CSS",
        description: "Used the Poker-odds API to create a dynamic web app that gives the probability of your poker hand winning based off the cards in your hand and those on the table",
        imgUrl: PokerHandApp,
        gitHub: "https://github.com/dalonjon/PokerApp",
        id: 1,
    },
    {
        title: "To-Do App w/ Randomizer",
        technicals: "React, Node, MongoDB, Express, JS, HTML, CSS, Axios, Mongoose",
        description: "MERN To-Do App with random spinning wheel to select the next task to do",
        imgUrl: ToDoApp,
        gitHub: "https://github.com/jz1459/To-Do-App",
        id: 2,
    },
    {
        title: "Personal Website",
        technicals: "React, JS, HTML, CSS",
        description: "Personal Portfolio Website",
        imgUrl: Portfolio,
        gitHub: "https://github.com/jz1459/jz1459.github.io",
        id: 3,
    },
    {
        title: "Taste of China Website",
        technicals: "React, Node, MongoDB, Express, JSON Web Tokens, JS, HTML, CSS",
        description: "Website for family restaurant that uses JSON Web Tokens to implement authentication middleware that allows for family easy access to edit menu items",
        imgUrl: TasteOfChina,
        gitHub: "https://github.com/jz1459/taste-of-china",
        id: 4,
    },
    {
        title: "Football Grid",
        technicals: "React, Python (Pandas, BeautifulSoup), JS, HTML, CSS",
        description: "Combined the logic behind ImmaculateGrid and Tic-Tac-Toe to make an interactive football trivia game with data scrapped from Pro-football-reference   ",
        imgUrl: FootballGrid,
        gitHub: "https://github.com/jz1459/Football-Grid",
        id: 5,
    },
    {
        title: "MajorAudit",
        technicals: "React, JS, HTML, CSS",
        description: "MajorAudit is a project developed via YCS that aims to make Yale's DegreeAudit website more user-friendly",
        imgUrl: WorkInProgress,
        gitHub: "https://github.com/jz1459",
        id: 6,
    },
];
    
// function ProjectCarousel(props) {

//     return (
//         <Carousel interval={400}>
//             {projects.map(project => (
//                 <Carousel.Item interval={400} key={project.id}>
//                     <img
//                         className="d-block w-50"
//                         src={project.imgUrl}
//                         alt="slide"
//                     />
//                     <Carousel.Caption>
//                         <h3>{project.title}</h3>
//                         <p>{project.description}</p>
//                         <p>{project.technicals}</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//             ))}
//         </Carousel>
//     );
// };


function ProjectCard() {
    const [modalData, setModalData] = useState(null);
    const showModal = (project) => setModalData(project);
    const hideModal = () => setModalData(null);

    return (
        <>
            <Row>
                <div className="proj-modal">
                    {modalData && (<MyModal show={modalData} project={modalData} onClose={hideModal} />)}
                </div>
                {projects.map(project => (
                    <Col size={12} sm={6} md={4} key={project.id}>
                        <div className="proj-item">
                            <div className="proj-wrap">
                                <button
                                    onClick={() => { showModal(project) }}>
                                    <img src={project.imgUrl} alt="Project" />
                                    <div className="proj-overlay">
                                        <div className="proj-title">
                                            <h4>{project.title}</h4>
                                        </div>
                                        <div className="proj-plusSign">
                                            <i class = "bi bi-plus"></i>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </>
    );
};

function MyModal({ show, project, onClose }) {
    return (
        <Modal
            show={show}
            onHide={onClose}
            keyboard={true}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title>
                    <Container>
                        <Row>
                            <Col>
                                <div className="d-flex align-items-center justify-content-center">
                                    <img src={project.imgUrl} alt="Project" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h4>{project.title}</h4>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col>
                            <h4>{project.description}</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span><i className = "bi bi-tags"></i>{project.technicals}</span>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button href={project.gitHub} target= "_blank" className="proj-button">View on GitHub</Button>
                <Button onClick={onClose} className="proj-button">Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ProjectCard;

// export { ProjectCarousel };