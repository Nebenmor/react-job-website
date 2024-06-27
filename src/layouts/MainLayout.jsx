import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigBar from '../components_folder/NavigBar';

const MainLayout = () => {
  return (
    <>
      <NavigBar />
      <Outlet />
    </>
  )
}

export default MainLayout