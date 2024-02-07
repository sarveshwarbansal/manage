import React from 'react'
import Filter from './Filter'
import Image from "next/image";
import material from '../assets/material.webp'
import upload from '../assets/upload.svg'

const Materials = () => {
  return (
    <div className='w-full px-4 md:px-12'>
      <div className="flex justify-between p-4">
        <div className="flex items-center ">
          <label htmlFor="sort">Sort</label>
          <select id="sort" className="border rounded-md px-2 py-1">
            <option value="1">Popular</option>
            <option value="2">Latest</option>
            <option value="3">Ratings</option>
            <option value="4">Reviews</option>
          </select>
        </div>
        <div className="flex items-center ">
          <label htmlFor="filter">Filter</label>
          <select id="filter" className="border rounded-md px-2 py-1">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>

      </div>
      <div className='grid grid-cols-2 mt-10 px-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 py-4'>

        <div className='p-2'>
          <Image src={material} alt="" className='rounded-lg' />
          <div className='flex items-center justify-between px-2'>
            <div className='flex items-center py-3 gap-x-3'>
              <div className="flex items-center justify-center text-white bg-blue-700 rounded-xl w-7 h-7"> X </div>
              <p className='text-xs'>Keitoto</p>
            </div>
            <Image src={upload} alt="" />
          </div>
        </div>

        <div className='p-2'>
          <Image src={material} alt="" className='rounded-lg' />
          <div className='flex items-center justify-between px-2'>
            <div className='flex items-center py-3 gap-x-3'>
              <div className="flex items-center justify-center text-white bg-blue-700 rounded-xl w-7 h-7"> X </div>
              <p className='text-xs'>Keitoto</p>
            </div>
            <Image src={upload} alt="" />
          </div>
        </div>
        <div className='p-2'>
          <Image src={material} alt="" className='rounded-lg' />
          <div className='flex items-center justify-between px-2'>
            <div className='flex items-center py-3 gap-x-3'>
              <div className="flex items-center justify-center text-white bg-blue-700 rounded-xl w-7 h-7"> X </div>
              <p className='text-xs'>Keitoto</p>
            </div>
            <Image src={upload} alt="" />
          </div>
        </div>
        <div className='p-2'>
          <Image src={material} alt="" className='rounded-lg' />
          <div className='flex items-center justify-between px-2'>
            <div className='flex items-center py-3 gap-x-3'>
              <div className="flex items-center justify-center text-white bg-blue-700 rounded-xl w-7 h-7"> X </div>
              <p className='text-xs'>Keitoto</p>
            </div>
            <Image src={upload} alt="" />
          </div>
        </div>
        <div className='p-2'>
          <Image src={material} alt="" className='rounded-lg' />
          <div className='flex items-center justify-between px-2'>
            <div className='flex items-center py-3 gap-x-3'>
              <div className="flex items-center justify-center text-white bg-blue-700 rounded-xl w-7 h-7"> X </div>
              <p className='text-xs'>Keitoto</p>
            </div>
            <Image src={upload} alt="" />
          </div>
        </div>
        <div className='p-2'>
          <Image src={material} alt="" className='rounded-lg' />
          <div className='flex items-center justify-between px-2'>
            <div className='flex items-center py-3 gap-x-3'>
              <div className="flex items-center justify-center text-white bg-blue-700 rounded-xl w-7 h-7"> X </div>
              <p className='text-xs'>Keitoto</p>
            </div>
            <Image src={upload} alt="" />
          </div>
        </div>
        <div className='p-2'>
          <Image src={material} alt="" className='rounded-lg' />
          <div className='flex items-center justify-between px-2'>
            <div className='flex items-center py-3 gap-x-3'>
              <div className="flex items-center justify-center text-white bg-blue-700 rounded-xl w-7 h-7"> X </div>
              <p className='text-xs'>Keitoto</p>
            </div>
            <Image src={upload} alt="" />
          </div>
        </div>
        <div className='p-2'>
          <Image src={material} alt="" className='rounded-lg' />
          <div className='flex items-center justify-between px-2'>
            <div className='flex items-center py-3 gap-x-3'>
              <div className="flex items-center justify-center text-white bg-blue-700 rounded-xl w-7 h-7"> X </div>
              <p className='text-xs'>Keitoto</p>
            </div>
            <Image src={upload} alt="" />
          </div>
        </div>
        <div className='p-2'>
          <Image src={material} alt="" className='rounded-lg' />
          <div className='flex items-center justify-between px-2'>
            <div className='flex items-center py-3 gap-x-3'>
              <div className="flex items-center justify-center text-white bg-blue-700 rounded-xl w-7 h-7"> X </div>
              <p className='text-xs'>Keitoto</p>
            </div>
            <Image src={upload} alt="" />
          </div>
        </div>
        <div className='p-2'>
          <Image src={material} alt="" className='rounded-lg' />
          <div className='flex items-center justify-between px-2'>
            <div className='flex items-center py-3 gap-x-3'>
              <div className="flex items-center justify-center text-white bg-blue-700 rounded-xl w-7 h-7"> X </div>
              <p className='text-xs'>Keitoto</p>
            </div>
            <Image src={upload} alt="" />
          </div>
        </div>
        


      </div>

    </div>
  )
}

export default Materials
