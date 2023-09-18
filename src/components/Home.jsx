import circle from '../assets/circle.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import { TypeAnimation } from 'react-type-animation';
import Animation from './animation';
import { Details } from './Details';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png'



const Home = () => {
  return (
    <div className='md:px-10 px-7 my-50 bg-[#1a1a29]' id='home'>
      <div>
        <div className='flex flex-col md:flex-row items-center justify-between w-full'>

          <div className='text-white relative'>
            <h1 className='font-semibold md:text-6xl my-4 text-3xl'>Hi, I'm Sri Rao!</h1>
            <h2 className='font-semibold md:text-5xl my-4 text-3xl'>
              I'm a
                <TypeAnimation
                  sequence={[
                    ' Full-Stack Developer',
                    1000,
                    ' Humanitarian',
                    1000,
                    ' Gym Goer',
                    1000,
                  ]}
                  wrapper="span"
                  style={{ background: '-webkit-linear-gradient(225deg, rgb(132, 0, 255) 0%, rgb(230, 0, 255) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                  speed={1}
                  className='font-semibold md:text-5xl my-4 text-3xl'
                  repeat={Infinity}
                />
            </h2>
            <h3 className='font-semibold  md:w-96 text-2xl'>I am a passionate software professional based in Toronto, Canada. I am open to opportunities abroad. </h3>
            <a href="https://github.com/SriD647" target="_blank" rel="noopener noreferrer">
            <button className='mt-5 rounded-full transition duration-300 ease-in-out transform hover:scale-110 hover:filter hover:brightness-125 hover:bg-purple-900' style={{ transform: 'translateY(-10%)' }}>
              <img
                src={github}
                alt=""
                lassName="rounded-full"
                style={{ width: '50px', height: '50px' }}
              />
            </button>
            </a>

          <a href="https://www.linkedin.com/in/sridatt-r" target="_blank" rel="noopener noreferrer">
          <button className='mt-5 rounded-full transition duration-300 ease-in-out transform translate-x-5 hover:scale-110 hover:filter hover:brightness-125'>
            <img
              src={linkedin}
              alt=""
              className="rounded-full"
              style={{ width: '55px', height: '58px'}}
            />
          </button>
          </a>

          </div>
           
          <div className='order-first md:order-last relative' style={{transform: 'translateX(-10%), translateY(80%'}}>
          
            <img
              src={img3}
              alt=""
              className="rounded-full relative z-10"
              style={{ width: '300px', height: '300px', transform: 'translateX(-50%) translateY(-10%)'}}
              
            />
            <div style={{ marginTop: '-110%', transform: 'translateX(-80%) translateY(10%)'}} >
              <Animation/>
            </div>

          </div>
        </div>
        <div className='h-10 bg-[#181824] w-full mx-auto absolute left-0 hidden md:block'> </div>
      </div>
      
    </div>
   
  );
};

export default Home;
