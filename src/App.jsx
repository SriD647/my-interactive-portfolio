import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto" id="home">
        <NavBar />
        <div style={{ marginTop: '7%' }}>
          <Home />
        </div>
        <div style={{ marginTop: '3%' }}>
        <About />
        </div>
        <div style={{ marginTop: '3%' }}>
        <Skills />
        </div>
        <div style={{ marginTop: '3%' }}>
        <Projects />
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
