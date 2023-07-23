import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Up from "../assets/chevron-up.svg";
function Footer() {
    return (
        <section className="footer" id="footer">
            <Container>
                <div className="go-top"><a href="#about"><i className="bi bi-arrow-up-circle-fill"></i>{/*<img src={Up} alt="Up Arrow" />*/}</a></div>
                    <Row className="align-items-center">
                        <Col size={12}>
                            <p>&copy; Jason Zheng. All Rights Reserved</p>
                    </Col> 
                    </Row>
                </Container>
        </section>
    );
};

export default Footer;