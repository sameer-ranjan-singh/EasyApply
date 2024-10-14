"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { signIn, signOut } from 'next-auth/react'
import UserAvatar from './UserAvatar'
import { useSession } from 'next-auth/react'
import ClientSideRendered from './csr'

const NavbarClient = () => {
  // const {data : session} = useSession()
  // console.log(session)
  const [ userSession , setUserSession ] = useState(false)
  // if(session?.user?.name){
  //   setUserSession(!userSession)
  // }
  return (
    <div className='flex justify-between text-sm md:text-lg mx-1 border-b p-2'>
        <Link href="./">
          <h1 className='font-mono sm:font-bold md:font-extrabold'>Easyply</h1>
        </Link>
        <ClientSideRendered/>
        <div className='flex gap-2'>
          { userSession && <UserAvatar/> }
            <button 
              onClick={() => {
                if(userSession){
                  signOut({redirectTo:"./"})
                }
                signIn("google",{redirectTo:"./dashboard"})
              }}
              type='submit'
              className='font-mono text-sm px-2 py-1 border bg-blue-500 active:bg-blue-700 text-white'>
              {userSession ? "Logout" : "Signup"}
            </button>
            
          <h1 className='font-mono text-sm px-2 py-1 border border-blue-500 active:bg-blue-500 active:text-white'>
            <Link href="./setting">Setting</Link>
          </h1>
        </div>
        
    </div>
  )
}

export default NavbarClient