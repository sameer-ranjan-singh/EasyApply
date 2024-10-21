"use client"
import React from 'react'
import Image from 'next/image'
import UserIcon from "../public/userIcon.png"
import { useSession } from 'next-auth/react'

const UserAvatar =  () => {
    const {data: session} = useSession()
    console.log(session)
  return (
    <div className='flex justify-center items-center ml-2'>
      <Image
        width={30}
        height={30}
        className='rounded-full'
        src={session?.user.image || UserIcon}
        alt='uIcon'/>
    </div>
  )
}

export default UserAvatar