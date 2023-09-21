import React from 'react';
import { personalDetails, Technologies, Interpersonal } from './Details';

const Skills = () => {
    const gradientStyle = {
        background: '-webkit-linear-gradient(225deg, rgb(132, 0, 255) 0%, rgb(230, 0, 255) 100%)',
        color: 'white',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: '0.7rem',
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

    const centerContentStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    };

    const centerButtonDivStyle = {
        display: 'flex',
        alignItems: 'center', // Center horizontally
        justifyContent: 'center', // Center vertically
        fontSize: '1.0rem',
        paddingBottom: '0.6rem'
    };

    return (
        <div className="md:px-10 px-7 my-20 bg-[#1a1a29]" style={centerContentStyle}>
            <h1 className="text-primary font-semibold mt-4 text-2xl" style={{ paddingBottom: '2%' }}>SKILLS</h1>

            <div className="text-header mb-4" style={{ fontSize: '1.2rem', width: '90%' }}>
                <p className='text-left'>
                    My skill set below is a unique mix of technical coding and interpersonal skills which allows me to contribute more holistically to any work environment. Below my skill cards is my resume which outlines my relevant professional experience.
                </p>
            </div>

            <div className="flex flex-wrap mb-8" style={{ width: '94%' }}>
                <div className="w-auto md:w-1/2 mb-4 md:mb-0 pr-4">
                    <h3 className="text-center text-purple-400 mb-3">Technologies</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        {Technologies.map((technology) => (
                            <div className="p-4 text-center transform hover:scale-110 rounded-lg border border-purple-500 shadow-lg" key={technology.id}>
                                <div className="mb-2">
                                    <img src={technology.icon} className="w-10 h-10 mb-2 mx-auto" alt={technology.name} />
                                </div>
                                <p className="text-primary font-semibold" style={{ ...gradientStyle}}>{technology.name}</p>

                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-auto md:w-1/2 pl-4">
                    <h3 className="text-center text-purple-400 mb-3">Interpersonal</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Interpersonal.map((personal) => (
                            <div className="p-4 text-center transform hover:scale-110 rounded-lg border border-purple-500 shadow-lg" key={personal.id}>
                                <div className="mb-2">
                                    <img src={personal.icon} className="w-10 h-10 mb-2 mx-auto" alt={personal.name} />
                                </div>
                                <p className="text-primary font-semibold" style={gradientStyle} id="resume">{personal.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='transform translate-y-[-20%]'  style={centerButtonDivStyle}>
                <a href={personalDetails.resumeLink} target="_blank" rel="noopener noreferrer" >
                    <button className="transform hover:scale-110" style={roundedButtonStyle} > LINK TO RESUME</button>
                </a>
            </div>
            <div id="projects"></div>
            {/* <div className='h-10 bg-[#181824] w-full mx-auto absolute left-0 hidden md:block' id='projects'> </div> */}
        </div>
    );
};

export default Skills;
