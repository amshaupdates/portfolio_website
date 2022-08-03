import React, { useState } from 'react';

import codeImage from '../assets/images/code.jpg';
import toDoListImage from '../assets/images/to-do-list.png';
import toDoListImageDetails from '../assets/images/to-do-list-details.png';
import githubApiImage from '../assets/images/github-api.png';
import githubApiImageDetails from '../assets/images/github-api-details.png';

const Projects = () => {
  const [toDoListSource, setToDoListSource] = useState(toDoListImage);
  const [githubApiImplementationSource, setGithubApiImplementationSource] = useState(githubApiImage);
  
  /**
   * Handles the image change operation on mouse hover
   * @param {string} nextImage 
   */
  const mouseEventHandler = (nextImage) => {
    if(nextImage === toDoListImage || nextImage === toDoListImageDetails)
      setToDoListSource(nextImage);
    if(nextImage === githubApiImage || nextImage === githubApiImageDetails)
      setGithubApiImplementationSource(nextImage);
  };
  return (
    <div id='projects' className='h-screen text-white flex flex-col align-center items-center justify-center w-full'>
      <div>
        <img src={codeImage} alt='code' />
      </div>
      <div>
        <h1 className='text-3xl font-medium mb-20'>Websites that I've build</h1>
      </div>
      <div className='grid grid-cols-2 w-4/5 m-10'>
        <div className='px-4'>
          <img
            src={toDoListSource}
            alt='to-do-list-with-drag-and-drop'
            className='w-3/2 mx-auto p-5'
            onMouseOver={() => mouseEventHandler(toDoListImageDetails)}
            onMouseOut={() => mouseEventHandler(toDoListImage)}
          />
        </div>
        <div className='px-4'>
          <img
            src={githubApiImplementationSource}
            alt='to-do-list-with-drag-and-drop'
            className='w-3/2 mx-auto p-5'
            onMouseOver={() => mouseEventHandler(githubApiImageDetails)}
            onMouseOut={() => mouseEventHandler(githubApiImage)}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;