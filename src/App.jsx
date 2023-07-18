import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
    return (
        <div className = "App">
            <NavBar />
            <Home />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
      
    );
};

export default App;