import React from 'react';
import styled from 'styled-components';
import EventBox from '@/components/EventBox';
import Button from '@mui/material/Button';
import Navbar from '@/components/navbar';


function LandingPage() {
  return (
    <div>
      <Navbar></Navbar>
      <EventBox></EventBox>
    </div>
  )
}



export default LandingPage