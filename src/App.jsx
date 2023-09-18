
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home"
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact"
import Footer from "./components/Footer"


function App() {
  

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <NavBar/>
        <Home  /> 
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
