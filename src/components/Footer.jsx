import React from 'react'
import Image from "next/image";
import facebook from "../assets/Facebook.svg"
import twitter from "../assets/Twitter.svg"
import youtube from "../assets/YouTube.svg"

const Footer = () => {
  return (
    <div className='bg-slate-900 w-full p-10'>
      <div>
        <ul className='text-white flex flex-col  md:flex md:flex-row justify-evenly items-center xl:mx-96 py-10'>
          <li className='pb-2'>
            <a href="">Home</a>
          </li>
          <li className='pb-2'>
            <a href="">About</a>
          </li>
          <li className='pb-2'>
            <a href="">Partners</a>
          </li>
          <li className='pb-2'>
            <a href="">Privacy</a>
          </li>
          <li className='pb-2'>
            <a href="">T&C</a>
          </li>
        </ul>

      </div>
      <div className='text-white flex justify-center items-center space-x-4 gap-4 py-4'>
        <Image src={facebook} alt="" />
        <Image src={twitter} alt="" />
        <Image src={youtube} alt="" />
      </div>
<div className='text-white flex items-center justify-center py-10'>
  <p>
  Copyright © 2023 Manage Hub
  </p>
</div>

    </div>
  )
}

export default Footer
