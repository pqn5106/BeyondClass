import Image from "next/image"
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import * as React from 'react';
import { lazy, Suspense } from 'react';
import Navbar from "@/components/Navbar";
import EventBox from '@/components/EventBox';
import SearchBar from '@/components/SearchBar';

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


      <section id="trending-view" className="bg-white">
          <h1 className="text-xl text-black font-bold px-20 py-5">Upcoming</h1>
        <div className="flex px-[18.5vw]">
          <EventBox></EventBox>
          <EventBox></EventBox>
          <EventBox></EventBox>
        </div>
      </section>

      <section className="bg-white" id="upcoming-view">
        <p className="text-md text-white font-bold px-20 pt-2">Scholarship Search</p>
        <table className="table w-[80vw] overflow-hidden rounded-lg bg-[#F1F1F1] mx-[5vw] mt-2">
          <thead className="text-black">
            <tr className="bg-gray-50">
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Scholarship</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Time</th>
              <th className="px-4 py-3">Description</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr>
              <td className="px-4 py-3 border">
                <div className="flex items-center text-sm">
                  <div>
                    <p className="font-semibold text-black">10/10/2021</p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3 text-ms font-semibold border">Scholarship #1</td>
              <td className="px-4 py-3 text-sm border">Online</td>
              <td className="px-4 py-3 text-sm border">12:00 PM</td>
              <td className="px-4 py-3 text-sm border">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eget aliquam lacinia, nisl nisi aliquet nunc, vitae aliquam nisl nunc eu nunc. </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 border">
                <div className="flex items-center text-sm">
                  <div>
                    <p className="font-semibold text-black">10/10/2021</p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3 text-ms font-semibold border">Scholarship #2</td>
              <td className="px-4 py-3 text-sm border">Online</td>
              <td className="px-4 py-3 text-sm border">12:00 PM</td>
              <td className="px-4 py-3 text-sm border">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eget aliquam lacinia, nisl nisi aliquet nunc, vitae aliquam nisl nunc eu nunc. </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 border">
                <div className="flex items-center text-sm">
                  <div>
                    <p className="font-semibold text-black">10/10/2021</p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3 text-ms font-semibold border">Scholarship #3</td>
              <td className="px-4 py-3 text-sm border">Online</td>
              <td className="px-4 py-3 text-sm border">12:00 PM</td>
              <td className="px-4 py-3 text-sm border">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eget aliquam lacinia, nisl nisi aliquet nunc, vitae aliquam nisl nunc eu nunc. </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 border">
                <div className="flex items-center text-sm">
                  <div>
                    <p className="font-semibold text-black">10/10/2021</p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3 text-ms font-semibold border">Scholarship #4</td>
              <td className="px-4 py-3 text-sm border">Online</td>
              <td className="px-4 py-3 text-sm border">12:00 PM</td>
              <td className="px-4 py-3 text-sm border">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eget aliquam lacinia, nisl nisi aliquet nunc, vitae aliquam nisl nunc eu nunc. </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 border">
                <div className="flex items-center text-sm">
                  <div>
                    <p className="font-semibold text-black">10/10/2021</p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3 text-ms font-semibold border">Scholarship #5</td>
              <td className="px-4 py-3 text-sm border">Online</td>
              <td className="px-4 py-3 text-sm border">12:00 PM</td>
              <td className="px-4 py-3 text-sm border">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eget aliquam lacinia, nisl nisi aliquet nunc, vitae aliquam nisl nunc eu nunc. </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 border">
                <div className="flex items-center text-sm">
                  <div>
                    <p className="font-semibold text-black">10/10/2021</p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3 text-ms font-semibold border">Scholarship #6</td>
              <td className="px-4 py-3 text-sm border">Online</td>
              <td className="px-4 py-3 text-sm border">12:00 PM</td>
              <td className="px-4 py-3 text-sm border">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eget aliquam lacinia, nisl nisi aliquet nunc, vitae aliquam nisl nunc eu nunc. </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  )
}


