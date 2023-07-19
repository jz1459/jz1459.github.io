import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LinkedIn from "../assets/linkedin.svg";
import GitHub from "../assets/github.svg";
import Envelope from "../assets/envelope.svg";
function Contact() {
    return (
        <section className="contact" id="contact">
            
            <Container>
                <div className="contact-bx">
                    <div className="section-header">
                        <Row>
                            <Col size={12}>
                                <h5>Contact</h5>
                                <h1> I'd Love to connect With You.</h1>
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col size={4}>
                                <div className="contact-icon">
                                    <a href="https://www.linkedin.com/in/jz1459/"><img src={LinkedIn} alt="LinkedIn" /></a>
                                </div>
    
                            </Col>
                            <Col size={4}>
                                <div className="contact-icon">
                                    <a href="mailto:jason.zheng@yale.edu"><img src={Envelope} alt="Email" /></a>
                                </div>
                            </Col>
                            <Col size={4}>
                                <div className="contact-icon">
                                    <a href="https://www.github.com/jz1459"><img src={GitHub} alt="GitHub" /></a>
                                </div>
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <div className="contact-description">
                                <h5>Email Me</h5>
                                <p>jason.zheng@yale.edu</p>
                            </div>
                        </Row>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Contact;