// Technologies //
import JavaScript from '../assets/icons/javascript.png';
import HTML from '../assets/icons/html.png';
import CSS from '../assets/icons/css.png';
import MongoDB from '../assets/icons/mongo.png';
import Node from '../assets/icons/node.png';
import React from '../assets/icons/react.png';
import Python from '../assets/icons/python.png';
import Express from '../assets/icons/express.png';
import Postman from '../assets/icons/postman.png'
import Jest from '../assets/icons/jest.png';
import Artillery from '../assets/icons/artillery.png';
import Terminal from '../assets/icons/terminal.png';
import GitHub from '../assets/github.png';
import SSH from '../assets/icons/ssh.png';
import Mongoose from '../assets/icons/mongoose.png';
import JWT from '../assets/icons/jsonweb.png';
import VsCode from '../assets/icons/vscode.png';
import Apple from '../assets/icons/apple.png';
import Windows from '../assets/icons/windows.png';
import SASS from '../assets/icons/sass.png'

//projects

import WhackAMole from '../assets/projects/whackamole.png';
import GorillaGainz from '../assets/projects/gorillagainz.png';
import FallMart from '../assets/projects/fallmart.png'
import MovieApi from '../assets/projects/movieapi.png'

// Interpersonal //
import Adaptibility from '../assets/icons/adaptibility.png';
import TeamWork from '../assets/icons/teamwork.png'
import Communication from '../assets/icons/communication.png'
import ProblemSolving from '../assets/icons/problemsolving.jpeg'
import EI from '../assets/icons/EI.png'
import CM from '../assets/icons/cm.jpeg'

const personalDetails = {
    name: "Sri Rao",
    description: "Being a Full-Stack Software Engineer hailing from Toronto, my journey in the realm of coding has been shaped with the successful completion of a rigorous and comprehensive Full-Stack (MERN) Software Engineering certification program. Beyond technology, I'm an avid fitness enthusiast, continuously striving for progress in my physical well-being. But my pursuits extend further. I'm deeply committed to making a positive impact as a lead volunteer with the Art of Living Foundation. Here I actively support charitable events that uplift underprivileged communities. This fusion of technology, fitness, and humanitarianism drives me forward, propelling me to contribute meaningfully to our ever-evolving world.",
    
    github: "https://github.com/SriD647",
    linkedin: "https://www.linkedin.com/in/sridatt-r",
    youtube: "https://www.youtube.com/channel/UCdAY1C_SNmm3UQTp_vzyuKg",
    gA: "https://generalassemb.ly/education/software-engineering-immersive",
    aol: "https://www.artofliving.org/ca-en/about-us",
    resumeLink: "https://violet-feliza-31.tiiny.site/"
    
}

const Technologies = [
    {
        name: 'JavaScript',
        icon: JavaScript
    },
    {
        name: "HTML",
        icon: HTML
    },
    {
        name: 'CSS',
        icon: CSS
    },
    {
        name: 'SASS',
        icon: SASS
    },
    {
        name: 'MongoDB',
        icon: MongoDB
    },
    {
        name: 'Node',
        icon: Node
    },
    {
        name: 'React',
        icon: React
    },

    {
        name: 'Python',
        icon: Python
    },
    {  

        name: 'Express',
        icon: Express
    },
    {  
        name: 'Postman',
        icon: Postman
    },
    {  
        name: 'Jest',
        icon: Jest
    },
    {  
        name: 'Artillery',
        icon: Artillery
    },
    {  
        name: 'Terminal',
        icon: Terminal
    },
    {  
        name: 'GitHub',
        icon: GitHub
    },
    {  
        name: 'Mongoose',
        icon: Mongoose
    },
    {  
        name: 'JWT',
        icon: JWT
    },
    {  
        name: 'VS Code',
        icon: VsCode
    },
    {  
        name: 'Apple',
        icon: Apple
    },
    {  
        name: 'Windows',
        icon: Windows
    }
];

const Interpersonal = [
    {
        name: 'Teamwork',
        icon: TeamWork
    },
    {
        name: "Communication",
        icon: Communication
    },
    {
        name: 'Problem solving',
        icon: ProblemSolving
    },
    {
        name: 'Emotional Intelligence',
        icon: EI
    },
    {
        name: 'Adaptibility',
        icon:  Adaptibility
    },
    {
        name: 'Conflict management',
        icon:  CM
    }
]  

const ProjectsDeployed = [
   {
    name: "Whack-A-Mole",
    image: WhackAMole,
    technologies: ["HTML", "CSS", "JavaScript"],
    description: "Experience a modern twist on the classic Whack-A-Mole game, built with stellar HTML, CSS, and JavaScript. Choose from three difficulty levels to cater to everyone in the family. Sharpen your reflexes, because the moles won't wait!",
    gitLink: "https://github.com/SriD647/Unit-1-Project--Whack-A-Mole",
    liveLink: "https://whackamole.srithecoder.me/"

   },
   {
    name: "Gorilla Gainz",
    image: GorillaGainz,
    technologies: ["React", "Node", "Express", "MongoDB"],
    description: " Welcome to Gorilla Gainz, your gateway to gorilla strength. Built with MERN technology, this app focuses on a seamless user experience. Create your personalized account, add items to cart, and checkout today to transform yourself!",
    gitLink: "https://github.com/SriD647/REACT-GORILLA-GAINZ",
    liveLink: "https://gorillagainz.srithecoder.me/"

   },
   {
    name: "Fallmart",
    image: FallMart,
    technologies: ["React", "Node", "Express", "MongoDB"],
    description: "Fallmart, is a captivating e-commerce app built with the powrful MERN stack. This website offers users diverse functionalities, including creating an account, creating a wish list, and checking out, all while being immersed in beautiful aesthetics",
    gitLink: "https://github.com/SriD647/Walmart-MERN-APP",
    liveLink: "https://fallmart.srithecoder.me/"

   },
   {
    name: "Search-A-Film",
    image: MovieApi,
    technologies: ["React", "SASS"],
    description: "Search-A-Film leverages the OMDb web API to deliver key details on movies and provides a live stream link from two public platforms. With its captivating design, quick data retrieval, and robust error handling it's the ultimate entertainment companion",
    gitLink: "https://github.com/SriD647/REACT-MOVIE-API",
    liveLink: "https://grand-mandazi-ecb05d.netlify.app/"

   },
   {
    name: "CURRENTLY UNDER DEVELOPMENT",

    technologies: ["React", "Node", "Express", "MongoDB"],
    description: "Another MERN stack app that will use external web api",


   },


]

export { personalDetails, Technologies, Interpersonal, ProjectsDeployed };