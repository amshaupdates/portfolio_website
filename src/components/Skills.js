import React from 'react';

import skillsImage from '../assets/images/skills.webp';
import checkmarkIcon from '../assets/images/checkmark_icon.png';

const Skills = () => {
  return (
    <div id='skills' className='flex flex-col h-screen align-center items-center justify-center w-full text-white'>
      <div>
        <img 
          src={skillsImage} 
          alt='skills'
          className='w-1/2 mx-auto'
          />
      </div>
      <div>
        <h1 className='text-3xl font-medium mb-20'>Skills and Technologies</h1>
      </div>
      <div className='grid grid-cols-2 m-5'>
        <div className='flex bg-slate-800 p-2 m-2 w-56'>
          <img className='w-5' src={checkmarkIcon} alt='checkmark' />
          <span className='text-lg ml-2'>JavaScript</span>
        </div>
        <div className='flex bg-slate-800 p-2 m-2 w-56'>
          <img className='w-5' src={checkmarkIcon} alt='checkmark' />
          <span className='text-lg ml-2'>React JS</span>
        </div>
        <div className='flex bg-slate-800 p-2 m-2 w-56'>
          <img className='w-5' src={checkmarkIcon} alt='checkmark' />
          <span className='text-lg ml-2'>CSS</span>
        </div>
        <div className='flex bg-slate-800 p-2 m-2 w-56'>
          <img className='w-5' src={checkmarkIcon} alt='checkmark' />
          <span className='text-lg ml-2'>React Native</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;