import * as React from 'react';
import Image from 'next/image'
import Button from '@mui/material/Button';
import Link from 'react-router-dom';



const Navbar = () => {


  return (
    <nav className="flex items-center bg-neutral-200">
      <div className=" flex items-center">
        <Image
          className="px-20 py-5"
          src="https://beyondclass.net/static/media/beyondClassLogo.04a23293f4de636d9fae59ebf60f8b4d.svg"
          alt="Beyond Class Logo"
          width={300}
          height={200}
        /> 
        <ul className="flex justify-center">
          <a className="px-10" href="/" style={{ paddingLeft: '12vw' }}>
            Scholarship
          </a>
          <a className="px-10" href="/competition" style={{ paddingLeft: '3vw' }}>
            Competition
          </a>
          <a className="px-10" href="/network" style={{ paddingLeft: '3vw' }}>
            Networking
          </a>
          <a className="px-10" href="/social" style={{ paddingLeft: '3vw' }}>
            Club/Social
          </a>
        </ul>
      </div>
      <div className="flex flex-grow justify-end" style={{ paddingLeft: '25vw' }}>
        <a href='https://docs.google.com/forms/d/1fRrXDcFNSsXm5dIY21RsC87GUx-klEQlo10XG3u28x8/edit'>
        <Button variant="outlined" size="small" className='bg-black'>
          Join Waitlist
        </Button>
        </a>
      </div>
    </nav>
  );
  
}


export default Navbar