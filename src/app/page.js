import Image from "next/image"
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import * as React from 'react';
import { lazy, Suspense } from 'react';







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
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <Image className="px-10 py-5" src="https://beyondclass.net/static/media/beyondClassLogo.04a23293f4de636d9fae59ebf60f8b4d.svg" alt="Beyond Class Logo" width={300} height={200}/>
          <ul className="flex space-x-4 ml-4">
            <li>
              <a href="#">Scholarship</a>
            </li>
            <li>
              <a href="#">Competition</a>
            </li>
            <li>
              <a href="#">Networking</a>
            </li>
            <li>
              <a href="#">Club/Social</a>
            </li>
          </ul>
        </div>
        <div>
          <Button variant="contained" size="small" style={{ background: '#1876d2' }}>
            Login
          </Button>
          <Button variant="outlined" size="small">
            Sign Up
          </Button>
        </div>
      </nav>

      <section id="highlight-view" className="flex flex-col items-center">
        <Suspense fallback={<div>Loading...</div>}>
          <GalleryCarousel images={images} />
        </Suspense>
        <TextField id="outlined-basic" label="Search" variant="standard" />
      </section>

      <section id="trending-view" className = 'bg-black w-500 h-500'>
        <p>HI</p>
      </section>

      <section id="upcoming-view">
        <p>
        </p>
      </section>
    </main>
  )
}
