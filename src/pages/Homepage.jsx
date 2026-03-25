import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import headerImage from '../images/homeImages/asus.webp'
import { useNavigate } from "react-router-dom";


const Homepage = () => {
  const navigate = useNavigate();

  return (<>
    <Navbar />
    <div className="relative bg-linear-to-tl from-[#C70431] via-[#081637] to-[#081637] min-h-screen pt-25">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
        linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)`,
          backgroundSize: "40px 40px"
        }}
      >
        <div />

      </div>
      <div className="w-full md:w-1/2 px-12">

        <h1 className='text-[#F5F5F5] font-[The_Blast] ml-5 text-4xl sm:text-5xl md:text-7xl md:ml-15'>
          Power Meets Simplicity
        </h1>

        <p className='text-[#F5F5F5] font-[impact] text-2xl mt-15 md:mt-30 ml-5 md:ml-15'>
          Push boundaries with Nexus. Built for creators, professionals, and innovators, our laptops redefine speed, performance, and style so you can do more, faster, and better.
        </p>

        <div className='absolute cursor-pointer select-none ml-5 md:ml-15 mt-15 w-fit text-[#081637] font-[The_Blast] text-xl  bg-[#19CEE4] px-10 py-5 transition duration-300 ease-in-out hover:bg-[rgb(7,149,168)]'
          onClick={() => navigate("/products")}>
          SHOP NOW
        </div>
      </div>

      <img src={headerImage} className='hidden md:block absolute top-0 right-30 w-145 h-145'
        style={{
          animation: "float 4s ease-in-out infinite"
        }} />

    </div>
  </>)
}

export default Homepage;