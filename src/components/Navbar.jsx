import React from 'react'

const Navbar = () => {
  return (
    <nav className='container hidden md:bg-white w-full  2xl:w-full md:h-12 md:flex md:items-center md:justify-between md:pt-12 md:pb-12 '>
      <div className=' flex gap-x-6 px-16'>
        <a href=""></a>
<a href="" className='text-slate-600'> Explore</a>
<a href="" className='text-slate-600'>Become a Partner</a>
      </div>
      <div className=' flex gap-x-8'>
      <input type="text" placeholder="Search.."/>
      <button className='text-slate-600'> Sign In </button>
      <button className='bg-blue-700 text-white rounded-lg w-36 p-4'>Register Now</button>
      </div>
    </nav>
  )
}

export default Navbar
