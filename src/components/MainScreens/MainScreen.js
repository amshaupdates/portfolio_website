import React from 'react';

import { Outlet } from 'react-router-dom';

import MainHeader from './MainHeader';

const MainScreen = () => {
  return (
    <React.Fragment>
        <MainHeader />
        <div className='overflow-x-hidden'>
            <div>
                <Outlet />
            </div>
        </div>
    </React.Fragment>
  );
};

export default MainScreen;