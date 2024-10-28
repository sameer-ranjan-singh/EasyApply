"use client"
import Link from 'next/link'
import React from 'react'
import { ToggleMySession } from './ToggleMySession'
import ToggleTheme from './ToggleTheme'
import { useAppSelector } from '@/store/redux/useReduxTypeHooks'

const Navbar = () => {
const theme = useAppSelector((store) => store.theme.themeNow )
console.log("theme in Navbar :",theme)

  return (
    <div className={`w-full ${theme ? `bg-${theme}-secondary text-${theme}-primary` :`bg-light-secondary text-light-primary`} flex justify-between items-center text-md md:text-lg px-4 py-1 border my-4 rounded-full shadow-md`}>
        <Link href="/">
          <h1 className='font-mono font-extrabold'>EasyApply</h1>
        </Link>
        <div className='flex justify-center items-center'>
         <ToggleMySession/>
         <ToggleTheme/>
        </div>
    </div>
  )
}

export default Navbar