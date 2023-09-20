import React from 'react';
import { personalDetails, Technologies, Interpersonal } from './Details';

const Skills = () => {
    const gradientStyle = {
        background: '-webkit-linear-gradient(225deg, rgb(132, 0, 255) 0%, rgb(230, 0, 255) 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: '0.8rem',
    };

    const roundedButtonStyle = {
        background: '-webkit-linear-gradient(225deg, rgb(132, 0, 255) 0%, rgb(230, 0, 255) 100%)',
        borderRadius: '20px', 
        padding: '10px 20px',
        color: 'white',
        cursor: 'pointer',
        border: 'none',
        outline: 'none',
    };

    const centerButtonDivStyle = {
        display: 'flex',
        alignItems: 'center', // Center horizontally
        justifyContent: 'center', // Center vertically
        fontSize: '1.3rem'
    };

    return (
        <div className="md:px-10 px-7 my-20 pt-5 pb-5 bg-[#1a1a29]" id="skills">
            <h1 className="text-primary font-semibold text-2xl" style={{ paddingBottom: '2%' }}>SKILLS</h1>

            <p className="text-header mb-4" style={{ fontSize: '1.2rem' }}>My skill set is a unique mix of technical coding and interpersonal skills which I have gained throughout my academic and work experience. This allows me to contribute more holistically to any work environment. Below my skills cards is my resume which outlines my relevant professional experience </p>

            <div className="flex flex-wrap mb-8">
                <div className="w-auto md:w-1/2 mb-4 md:mb-0 pr-4">
                    <h3 className="text-center text-primary mb-3">Technologies</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        {Technologies.map((technology) => (
                            <div className="p-4 text-center transform hover:scale-110 rounded-lg border border-purple-400 shadow-lg" key={technology.id}>
                                <div className="mb-2">
                                    <img src={technology.icon} className="w-10 h-10 mb-2 mx-auto" alt={technology.name} />
                                </div>
                                <p className="text-primary font-semibold" style={gradientStyle}>{technology.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-auto md:w-1/2 pl-4">
                    <h3 className="text-center text-primary mb-3">Interpersonal</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Interpersonal.map((personal) => (
                            <div className="p-4 text-center transform hover:scale-110 rounded-lg border border-purple-400 shadow-lg" key={personal.id}>
                                <div className="mb-2">
                                    <img src={personal.icon} className="w-10 h-10 mb-2 mx-auto" alt={personal.name} />
                                </div>
                                <p className="text-primary font-semibold" style={gradientStyle}>{personal.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div style={centerButtonDivStyle}>
                <a href={personalDetails.resumeLink} target="_blank" rel="noopener noreferrer" id="resume">
                    <button className="transform hover:scale-110" style={roundedButtonStyle}> LINK TO RESUME</button>
                </a>
            </div>
        </div>
    );
};

export default Skills;
