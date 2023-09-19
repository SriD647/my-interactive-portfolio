
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home"
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact"
import Footer from "./components/Footer"
// import { loadFull } from 'tsparticles';
// import  { Animation2 } from "./components/Animation2";
// import Particles from "react-tsparticles";


function App() {

  // const handleInit = async (main) => {
  //   await loadFull(main)
  // }


  return (
    <>
      <div className="max-w-7xl mx-auto">
      {/* <Particles id="particles" options={Animation2} init={handleInit}/> */}
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