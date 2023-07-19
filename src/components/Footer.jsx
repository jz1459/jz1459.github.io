import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Up from "../assets/chevron-up.svg";
function Footer() {
    return (
        <section className="footer" id="footer">
            
                <Container>
                    <Row className="align-items-center">
                        <Col size={12}>
                            <p>&copy; Jason Zheng. All Rights Reserved</p>
                    </Col>
                    <div className="go-top"><a class="smoothscroll" title="Back to Top" href="#home"><img src={Up} alt="Up Arrow" /></a></div> 

                    </Row>
                </Container>
        </section>
    );
};

export default Footer;