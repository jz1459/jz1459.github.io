import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
    return (
        <div className = "App">
            <NavBar />
            <Home />
            <Resume />
            <Projects />
            <Contact />
            <Footer />
        </div>
      
    );
};

export default App;