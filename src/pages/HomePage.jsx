import React from 'react';
import HeroSection from '../components_folder/HeroSection';
import HomeCards from '../components_folder/HomeCards';
import JobListings from '../components_folder/JobListings';
import ViewAllJobs from '../components_folder/ViewAllJobs';

const HomePage = () => {
  return (
    <>
        <HeroSection />
        <HomeCards />
        <JobListings isHome = {true} />
        <ViewAllJobs />
    </>
  )
}

export default HomePage