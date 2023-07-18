import * as React from 'react';
import Image from 'next/image'
import Button from '@mui/material/Button';

const Navbar = () => {

    
    
    return (
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
    );
}


export default Navbar