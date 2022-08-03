import React from 'react';

import introImage from '../assets/images/intro.jpg';

const About = () => {
  return (
    <section id="about">
      <div className='container h-fit mx-auto flex px-10 py-20 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow flex flex-col mb-16 md:mb-0 items-center align-center justify-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-20 font-medium text-white'>
            Hi, I'm Amit. <br/>
            <br className="hidden lg:inline-block" />I love to build amazing
            websites.
          </h1>
          <div className='w-1/2 mb-20'>
            <img className='rounded-2xl' src={introImage} alt='intro' />
          </div>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;