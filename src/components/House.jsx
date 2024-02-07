import React from 'react'
import Image from "next/image";
import house from "../assets/home_design.webp"

const House = () => {
  return (
    <div>
   <div className='flex flex-col items-center justify-center -mt-20 md:-mt-36'>
    
    <Image src={house} alt="" className=''/>
    {/* <p className='-mt-72'>Bedroom</p> */}
    </div>
    {/* <div className='flex items-center justify-center '>
    <p className='-mt-96'>Bedroom</p>
<p>Study</p>
<p>Kitchen</p>
<p>Living Room</p>
<p>Store</p>
<p>Bathroom</p>
    </div> */}

    </div>
        
  )
}

export default House
