import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';


function Resume() {
    const CustomToggle = ({ children, eventKey }) => {
        const decoratedOnClick = useAccordionButton(eventKey, () =>
            console.log('totally custom!'),
        );
        return (
            <button
                type="button"
                style={{ backgroundColor: 'pink' }}
                onClick={decoratedOnClick}
            >
                {children}
            </button>
        );
    };
    return (
        <section className="resume" id="resume">
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                    <CustomToggle eventKey="0">Click me!</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Education</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <CustomToggle eventKey="1">Click me!</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Skills</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <CustomToggle eventKey="2">Click me!</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>Work Experience</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <CustomToggle eventKey="3">Click me!</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                    <Card.Body>Activites/Volunteering</Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>
            </section>
    );
};



export default Resume;