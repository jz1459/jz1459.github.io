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
    const tabs = document.querySelectorAll("nav.navbar .navbar-nav a");

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
            // var currentSection = "";
            sections.forEach((section) => {
                let top = window.scrollY;
                let offset = section.offsetTop - section.clientHeight / 3;
                let height = section.offsetHeight;
                let id = section.getAttribute('id');
                // let topOfSection = section.getBoundingClientRect().top;

                if (top >= offset && id !== 'contact' && id !== 'footer'/*&& top < offset + height*/) {
                    tabs.forEach(links => {
                        links.classList.remove('active');
                        document.querySelector('nav.navbar .navbar-nav a[href="#' + id + '"]').classList.add('active');
                    })
                };
                // if (window.scrollY >= topOfSection - 60) {
                //     currentSection = section.getAttribute("id");
                // }
            });
            // tabs.forEach((a) => {
            //     a.classList.remove("active");
            //     // if (a.classList.contains(currentSection)) {
            //     //     a.classList.add("active");
            //     // };
            //     var activeSection = document.querySelector('.navbar-nav a[href="#' + currentSection + '"]');
            //     a.classList.remove("active");
            //     activeSection.classList.add("active");
            // });
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    });

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Router>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                     <Navbar.Brand href="#home"> 
                        <p>Jason Zheng</p>
                    </Navbar.Brand> 
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {/* <ul>
                                <li><a href="#home" className={activeLink === 'home' ? 'home active navbar-link' : 'home navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</a></li>
                                <li><a href="#about" className={activeLink === 'about' ? 'about active navbar-link' : 'about navbar-link'} onClick={() => onUpdateActiveLink('about')}>About Me</a></li>
                                <li><a href="#projects" className={activeLink === 'projects' ? 'projects active navbar-link' : 'projects navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</a></li>
                            </ul> */}
                            <Nav.Link href="#home" id = 'homeLink' className={activeLink === 'home' ? 'home active navbar-link' : 'home navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#about" id = 'aboutLink' className={activeLink === 'about' ? 'about active navbar-link' : 'about navbar-link'} onClick={() => onUpdateActiveLink('about')}>About Me</Nav.Link>
                            <Nav.Link href="#projects" id = 'projectsLink' className={activeLink === 'projects' ? 'projects active navbar-link' : 'projects navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
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