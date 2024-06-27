import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavigBar from '../components_folder/NavigBar';

const MainLayout = () => {
  return (
    <>
      <NavigBar />
      <Outlet />
      <ToastContainer />
    </>
  )
}

export default MainLayout