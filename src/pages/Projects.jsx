import { React } from "react";
import { Container, Row, Col/*, Tab, Nav*/ } from "react-bootstrap";
import ProjectCard/*, {ProjectCarousel}*/ from "../components/ProjectCards";
import 'animate.css';
import { Waypoint } from 'react-waypoint';


function Projects() {
    const handleWayPointEnter = () => (
        document.querySelector('#projectsLink').classList.add('active'),
        document.querySelector('#aboutLink').classList.remove('active'),
        document.querySelector('#homeLink').classList.remove('active'));
    
    const handleWayPointLeave = () => (
        document.querySelector('#projectsLink').classList.remove('active'));
    return (
        
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <div className="projects-bx">
                            <div className="section-header">
                                <h5>Projects</h5>
                                <h1>Check out some of my projects.</h1>
                                 
                            </div>
                            {/* <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">List View</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Carousel View</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="slideInUp">
                                    <Tab.Pane eventKey="first"> */}
                            <Waypoint
                                onEnter={handleWayPointEnter}
                                onLeave={handleWayPointLeave}
                            >
                                <div className="projects-content">
                                    <ProjectCard />
                                </div>
                            </Waypoint>
                            {/* </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <ProjectCarousel />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container> */}
                        </div>
                    
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Projects;