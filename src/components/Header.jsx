import React from 'react'
import Image from "next/image";
import home from "../assets/home_design.webp"

const Header = () => {
  return (
    <>
    <div className='bg-[url("../assets/Header.webp")] bg-no-repeat bg-cover py-14 min-h-[500px]'>
      <div className='flex justify-center items-center gap-4 pt-8 '>
        <button className='bg-blue-700 text-white rounded-lg w-36 p-4'>All</button>
        <button className='bg-black/50 text-white rounded-lg w-36 p-4'>Real Material</button>
        <button className='bg-black/50 text-white rounded-lg w-36 p-4'>Dummy</button>
      </div>
      <div className='flex flex-col justify-center items-center text-center py-4'>
        <h2 className='font-bold text-3xl py-4'>Explore Architecture Materials</h2>
        <span>Architects around the world showcase their portfolio work on</span>
        <span>Material Hub to attract customers and provide inspiration</span>
      </div>
      <div className='hidden sm:block sm:flex sm:justify-center sm:items-center sm:pt-4 py-10 overflow-hidden '>
      <input className="sm:w-1/3 px-8 p-4 rounded-full bg-slate-100" type="text" placeholder="Search.."/>
      </div>
      <div className='hidden sm:block sm:flex sm:justify-center sm:items-center sm:pt-4 py-10 pb-12 overflow-hidden '>
      <input className="sm:w-1/5  justify-center px-8 p-4 rounded-full bg-white-gradient text-neutral-400 font-bold" type="text" placeholder="Popular Searches"/>
      </div>
      
      
    </div>
   
    </>
  )
}

export default Header
