import React from 'react';

const MainHeader = () => {
    /**
     * Home icon click handler which scrolls the page to top.
     */
    const homeClickHandler = () => {
        window.scrollTo(0, 0);
    };
  return (
    <header className='bg-slate-800 h-18 sticky top-0'>
        <div className='flex flex-row w-full'>
            <div className='font-bold m-5 text-2xl text-white w-18 sm:w-40 md:w-40 lg:w-96'>
                <h3 className='w-full cursor-pointer hover:text-red-600' onClick={homeClickHandler}>Amit Sharma</h3>
            </div>
            <ul className='flex flex-row text-slate-300 m-5 text-md w-52 sm:w-72 md:w-96 lg:w-screen'>
                <li className='m-1 mr-3 cursor-pointer hover:text-red-500'><a href='#projects'>Past Work</a></li>
                <li className='m-1 mr-3 cursor-pointer hover:text-red-500'><a href='#skills'>Skills</a></li>
            </ul>
            <div className='text-slate-300 float-right w-18 sm:w-24 md:w-40 lg:w-96 m-5 2xl:w-screen'>
                <h5 className='float-right m-0.5 cursor-pointer hover:text-red-600' ><a href='#contact'>Hire Me</a></h5>
            </div>
        </div>
    </header>
  );
};

export default MainHeader;