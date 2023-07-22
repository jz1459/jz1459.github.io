import React, {useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import LinkedIn from "../assets/linkedin.svg";
import GitHub from "../assets/github.svg";
// import Pfp from "../assets/profilePic.JPG"
 
function NavBar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const sections = document.querySelectorAll("section");
    const tabs = document.querySelectorAll("navbar-link a");

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
            var currentSection = "";
            sections.forEach((section) => {
                let topOfSection = section.offsetTop;
                if (window.scrollY >= topOfSection - 50) {
                    currentSection = section.getAttribute("id");
                }
            });
            tabs.forEach((Link) => {
                Link.classList.remove("active");
                // if (Link.classList.contains(currentSection)) {
                //     Link.classList.add("active");
                // };
                document.querySelector('navbar-link a[href*= ' + currentSection + ']').classList.add("active");
            });
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Router>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                     <Navbar.Brand href="/"> 
                        <p>Jason Zheng</p>
                    </Navbar.Brand> 
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'home active navbar-link' : 'home navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#about" className={activeLink === 'about' ? 'about active navbar-link' : 'about navbar-link'} onClick={() => onUpdateActiveLink('about')}>About Me</Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'projects active navbar-link' : 'projects navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/in/jz1459/" target="_blank"><img src={LinkedIn} alt="LinkedIn" /></a>
                                <a href="https://www.github.com/jz1459" target="_blank"><img src={GitHub} alt="Github" /></a>
                            </div>
                            <HashLink to='#contact'>
                                <button><span>Let’s Connect</span></button>
                            </HashLink>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    );
};

export default NavBar;