import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { personalDetails } from "./Details";
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';

const Contact = () => {
  const [state, handleSubmit] = useForm("meqbrlgv");

  return (
    <div className="md:px-10 px-7 my-20 bg-[#1a1a29]">
      <div className="flex flex-col md:flex-row -gap-20">
        {/* text and icons */}
        <div className="md:w-1/2">
          <h1 className="text-primary font-semibold text-3xl mt-12">
            Let's Connect!
          </h1>

          <div className="mt-5 ml-auto">
            <a href={personalDetails.github} target="_blank" rel="noopener noreferrer">
              <button className="mt-5 rounded-full transition duration-300 ease-in-out transform hover:scale-110 hover:filter hover:brightness-125 hover:bg-purple-900" style={{ transform: 'translateY(-10%)' }}>
                <img
                  src={github}
                  alt=""
                  className="rounded-full items-center"
                  style={{ width: '50px', height: '50px' }}
                />
              </button>
            </a>

            <a href={personalDetails.linkedin} target="_blank" rel="noopener noreferrer">
              <button className="mt-5 rounded-full transition duration-300 ease-in-out transform translate-x-5 hover:scale-110 hover:filter hover:brightness-125">
                <img
                  src={linkedin}
                  alt=""
                  className="rounded-full"
                  style={{ width: '55px', height: '58px' }}
                />
              </button>
            </a>
          </div>
        </div>
        {/* form */}
        <div className="md:w-1/2 w-auto h-auto pt-10 pb-5">
          {state.succeeded ? (
            <>
              <p className="text-white text-1xl pb-3">Thank you for your message. Please reload the page to send another.</p>
            </>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="text-white text-2xl pb-3">Contact me</p>
              <input type="text" name="name" placeholder="Name:" className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded mb-3 text-white" />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
              <input type="email" name="email" placeholder="Email:" className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded mb-3 text-white" />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
              <textarea name="message" id="message" cols="30" rows="4" className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded mb-3 text-white" placeholder="Message:"></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
              <button className="btn transition-all duration-500 bg-primary py-2 px-12 rounded text-white hover:bg-white hover:text-primary block" disabled={state.submitting}>
                Send
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
