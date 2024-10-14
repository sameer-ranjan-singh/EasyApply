import Link from 'next/link'
import React from 'react'
import { auth } from '../../auth'
import ServerSideRendered from './ssr'
import UserAvatar from './UserAvatar'
import { AuthSignup } from './AuthSignup'

const Navbar = async () => {
  const session = await auth()

  return (
    <div className='w-full flex justify-between items-center text-md md:text-lg px-4 py-1 border my-4 rounded-full shadow-md bg-yellow-300'>
        <Link href="./">
          <h1 className='font-mono font-extrabold'>Easyply</h1>
        </Link>
        {/* <ServerSideRendered/> */}
        <div className='flex gap-2'>
            <AuthSignup/>
            {session?.user &&
            <div className='flex'>
                <Link href="./setting">
                  <button
                    className="flex justify-center items-center p-1 font-mono font-semibold active:bg-yellow-400">
                    Setting
                  </button>
                </Link>
              <UserAvatar/>
            </div>
            }
        </div>
        
    </div>
  )
}

export default Navbar