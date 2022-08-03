import React from 'react';

import About from '../About';
import Projects from '../Projects';
import Skills from '../Skills';
import Contact from '../Contact';

const Home = () => {
  return (
    <main className='bg-black h-full'>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </main>
  );
};

export default Home;