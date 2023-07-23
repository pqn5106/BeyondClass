import Image from "next/image"
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import * as React from 'react';
import { lazy, Suspense } from 'react';
import Navbar from "@/components/navbar";
import EventBox from '@/components/EventBox';

export default function Home() {
  const GalleryCarousel = lazy(() => import('/components/GalleryCarousel'));

  const images = [
    'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg',
    'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
    'https://www.vieribottazzini.com/wp-content/uploads/X1DII1_00190_slide.jpg',
    // Add more image URLs as needed
  ];


  return (
    <main>
      <Navbar/>
      <section id="highlight-view" className="flex flex-col items-center">
        <Suspense fallback={<div>Loading...</div>}>
          <GalleryCarousel images={images} />
        </Suspense>
        <TextField id="outlined-basic" label="Search" variant="standard" />
      </section>

      <section id="trending-view" className = 'bg-black w-500 h-500 flex'>
        <h1 className="text-white text-lg">Upcoming Events</h1>
        <EventBox></EventBox>
        <EventBox></EventBox>
        <EventBox></EventBox>
        <EventBox></EventBox>
      </section>

      <section id="upcoming-view">
        <p>
        </p>
      </section>
    </main>
  )
}


