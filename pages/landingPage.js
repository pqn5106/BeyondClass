import React from 'react';
import styled from 'styled-components';
import EventBox from '@/components/EventBox';
import Button from '@mui/material/Button';


function Home() {
  return (
    <div>
      <h1>Welcome to my First Page</h1>
      <p>This is my first Next.js webpage.</p>
      <EventBox></EventBox>
      <Button variant="contained">Hello World</Button>
    </div>
  )
}



export default Home