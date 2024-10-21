import Link from 'next/link'
import React from 'react'
import { ToggleMySession } from './ToggleMySession'

const Navbar = async () => {

  return (
    <div className='w-full flex justify-between items-center text-md md:text-lg px-4 py-1 border my-4 rounded-full shadow-md bg-yellow-400'>
        <Link href="/">
          <h1 className='font-mono font-extrabold'>EasyApply</h1>
        </Link>
        <ToggleMySession/>
    </div>
  )
}

export default Navbar