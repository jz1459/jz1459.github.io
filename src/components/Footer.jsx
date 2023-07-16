import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LinkedIn from "../assets/linkedin.svg";
import GitHub from "../assets/github.svg";

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/jz1459/"><img src={LinkedIn} alt="LinkedIn" /></a>
                            <a href="https://www.github.com/jz1459"><img src={GitHub} alt="GitHub" /></a>
                        </div>
                        <p> Copyright 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;