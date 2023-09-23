import React from 'react';
import img3 from '../assets/img3.png';
import { TypeAnimation } from 'react-type-animation';
import Animation from './animation';
import { personalDetails } from './Details';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';

const Home = () => {
  return (
    <div className='md:px-10 px-7 my-10 bg-[#1a1a29]'>
      <div className='flex flex-col pl-20 lg:flex-row w-auto justify-center items-center text-center md:text-left'>
        <div className='lg:w-1/2 pl-10'>
          <div className='text-white relative pl-2 md:pl-10'>
            <h1 className='font-semibold md:text-5xl my-4 text-3xl mb-10 mt-8'>Hi, I'm Sri Rao!</h1>
            <h2 className='font-semibold md:text-4xl text-2xl my-4 mb-7 w-full'>
              <TypeAnimation
                sequence={[
                  ' Full-Stack Engineer',
                  1000,
                  ' Humanitarian',
                  1000,
                  ' Fitness Enthusiast',
                  1000,
                ]}
                wrapper="span"
                style={{
                  background:
                    '-webkit-linear-gradient(225deg, rgb(132, 0, 255) 0%, rgb(230, 0, 255) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
                speed={1}
                className='font-semibold  my-4 w-full'
                repeat={Infinity}
              />
            </h2>
            <h3 className='font-semibold text-left lg:w-96 text-2xl sd:text-1xl mb-2 w-full'>
              I am a passionate software professional based in Toronto, Canada. I am open to remote work and opportunities
              abroad.
            </h3>
            <div className='mb-2 ml-auto'>
              <a href={personalDetails.github} target='_blank' rel='noopener noreferrer'>
                <button
                  className='mt-5 rounded-full transition duration-300 ease-in-out transform hover:scale-110 hover:filter hover:brightness-125 hover:bg-purple-900'
                  style={{ transform: 'translateY(-10%)' }}
                >
                  <img src={github} alt='' className='rounded-full items-center' style={{ width: '50px', height: '50px' }} />
                </button>
              </a>

              <a href={personalDetails.linkedin} target='_blank' rel='noopener noreferrer'>
                <button className='mt-5 rounded-full transition duration-300 ease-in-out transform translate-x-5 hover:scale-110 hover:filter hover:brightness-125'>
                  <img src={linkedin} alt='' className='rounded-full' style={{ width: '55px', height: '58px' }} />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className='lg:w-1/2 items-right lg:order-last md:pl-12 md:order-last -mt-1'>
          <img
            src={img3}
            alt=''
            className='rounded-full w-1/2 md:w-350 md:h-350'
            style={{
              width: '100%',
              maxWidth: '350px',
              height: 'auto',
              border: '0.6rem solid #7562E0',
            }}
          />
        </div>
      </div>

      <div className='mt-50 h-10 bg-[#181824] w-full mx-auto absolute left-0 hidden md:block' id='about'></div>
    </div>
  );
};

export default Home;
