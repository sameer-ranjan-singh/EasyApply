import React from 'react'
import { auth } from '../../auth'
import Image from 'next/image'
import UserIcon from "../public/userIcon.png"

const UserAvatar = async () => {
    const session = await auth()
    console.log(session)
    if(!session?.user) return null
  return (
    <div className='flex justify-center items-center ml-2'>
        {session?.user && (
           <Image
             width={30}
             height={30}
             className='rounded-full'
             src={session.user.image || UserIcon}
             alt='DP'/>
        )}
    </div>
  )
}

export default UserAvatar