import Image from "next/image"
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import * as React from 'react';
export default function Home() {
  return (
    <main>
      <nav>
        <Image src="/logo.png" width={100} height={50} />
          <Button variant="contained" size="small">Login</Button>
          <Button variant="outlined" size="small">Sign Up</Button>
      </nav>

      <section id="highlight-view">
        <p>hi</p>
      </section>
      <h1>HELLO</h1>
      
      <section id="trending-view" className = 'bg-black'>
        <p>
hi</p>
      </section>

      <section id="upcoming-view">
      </section>
    </main>
  )
}
