import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function Footer() {
    return (
        <section className="footer" id="footer">
            
                <Container>
                    <Row className="align-items-center">
                        <Col size={12}>
                            <p>&copy; Jason Zheng. All Rights Reserved</p>
                    </Col>
                    {/* <div id="go-top"><a class="smoothscroll" title="Back to Top" href="#home"><i class="icon-up-open"></i></a></div> */}
                    </Row>
                </Container>
     
        </section>
    );
};

export default Footer;