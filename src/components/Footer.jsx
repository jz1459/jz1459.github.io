import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LinkedIn from "../assets/linkedin.svg";
import GitHub from "../assets/github.svg";
import Envelope from "../assets/envelope.svg";
function Footer() {
    return (
        <section className="footer" id="footer">
            
                <Container>
                    <Row className="align-items-center">
                        <Col>
                            <p>Email Form Goes Here</p>
                        </Col>
                        <Col size={12} sm={6} className="text-center text-sm-end">
                            <h2>Let's Connect</h2>
                            <div className="contact-icon">
                                <a href="https://www.linkedin.com/in/jz1459/"><img src={LinkedIn} alt="LinkedIn" /></a>
                                <a href="https://www.github.com/jz1459"><img src={GitHub} alt="GitHub" /></a>
                                <a href="mailto:jason.zheng@yale.edu"><img src={Envelope} alt="Email" /></a>
                            </div>
                            <p>&copy; Jason Zheng. All Rights Reserved</p>
                        </Col>
                    </Row>
                </Container>
     
        </section>
    );
};

export default Footer;