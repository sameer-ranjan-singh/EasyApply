import Link from 'next/link'
import React from 'react'
import ServerSideRendered from '../../components/ssr'

const Setting = () => {
  return (
    <>
    <ServerSideRendered/>
    <div className=' w-screen h-screen text-center flex flex-col text-sm md:text-md '>
     <div className='gap-3'>
        <Link href={"./setting/profile"}>
          <button className='p-2 bg-white text-blue-500 border-b active:bg-blue-700 active:text-white active:font-semibold font-bold font-mono md:text-lg '>Edit Links</button>
        </Link>
        <button className='p-2 bg-white text-blue-500 border-b active:bg-blue-700 active:text-white active:font-semibold font-bold font-mono md:text-lg  '>Delete Account</button>
        <button className='p-2 bg-white text-blue-500 border-b active:bg-blue-700 active:text-white active:font-semibold font-bold font-mono md:text-lg '>Create/Update CV</button>
     </div>
     <Link href={"./dashboard"} className='flex justify-center'>
       <button className='text-xl md:text-4xl font-extrabold text-black border border-black text-center mt-10 px-3 py-2 w-fit active:text-blue-500'>Back to Dashboard</button>
     </Link>
    </div>
    </>
  )
}
      
export default Setting
