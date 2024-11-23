import Image from 'next/image'
import React from 'react'
import linkLogo from "../public/moto/link.png"
import cvLogo from "../public/moto/resume.png"
import timeLogo from "../public/moto/clock.png"

const Moto = () => {
    
const motoObjects = [
    {
        title : "Copy Link",
        logoSrc: linkLogo
    },
    {
        title : "Manage CV",
        logoSrc: cvLogo
    },
    {
        title : "Save Time",
        logoSrc: timeLogo
    },
]

  return (
    <div className='flex md:flex-row flex-col justify-between items-start gap-2 md:gap-10'>
        {motoObjects.map((moto)=>{
         return (
           <div
              key={moto.title}
              className='flex justify-between font-bold md:font-extrabold mt-2 text-gray-400  gap-1 uppercase'>
            <Image
              src={moto.logoSrc}
              height={15}
              width={25}
              alt='#'
            />
            <h1>{moto.title}</h1>
           </div>
         )
        })
    }
    </div>
  )
}

export default Moto