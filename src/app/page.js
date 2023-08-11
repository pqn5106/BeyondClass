import Image from "next/image"
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import * as React from 'react';
import { lazy, Suspense } from 'react';
import Navbar from "@/components/Navbar";
import EventBox from '@/components/EventBox';
import ScholarshipsList from "@/components/ScholarshipsList";

export default function Home() {
  const GalleryCarousel = lazy(() => import('/components/GalleryCarousel'));




  return (
    <main>
      <Navbar/>


      <section id="trending-view" className="bg-[#edeef2]">
          <h1 className="text-3xl text-[#24245b] font-semibold px-20 py-5">Upcoming Events</h1>
        <div className="flex px-[18.5vw]">
          <EventBox></EventBox>
          <EventBox></EventBox>
          <EventBox></EventBox>
        </div>
      </section>



      <section className="bg-[#edeef2]" id="upcoming-view">
        <p className="text-md text-black font-bold px-20 pt-2">Scholarship Search</p>
        <iframe class="airtable-embed " src="https://airtable.com/embed/appMRFnFPjI2vbHPA/shrQSbQVrUCistp21?backgroundColor=blue&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style={{background: "transparent;", border: "1px solid #ccc;"}}></iframe>
        {/* <table className="table w-[90vw] overflow-hidden rounded-lg bg-[#F1F1F1] mx-[5vw] mt-2">
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
              <td className="px-4 py-3 text-ms font-semibold border"><ScholarshipsList /> </td>
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
              <td className="px-4 py-3 text-ms font-semibold border"><ScholarshipsList /></td>
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
              <td className="px-4 py-3 text-ms font-semibold border"><ScholarshipsList /></td>
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
              <td className="px-4 py-3 text-ms font-semibold border"><ScholarshipsList /></td>
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
              <td className="px-4 py-3 text-ms font-semibold border"><ScholarshipsList /></td>
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
              <td className="px-4 py-3 text-ms font-semibold border"><ScholarshipsList /></td>
              <td className="px-4 py-3 text-sm border">Online</td>
              <td className="px-4 py-3 text-sm border">12:00 PM</td>
              <td className="px-4 py-3 text-sm border">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eget aliquam lacinia, nisl nisi aliquet nunc, vitae aliquam nisl nunc eu nunc. </td>
            </tr>
          </tbody>
        </table> */}
      </section>
    </main>
  )
}


