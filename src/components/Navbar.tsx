"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ToggleMySession } from './ToggleMySession'
import ToggleTheme from './ToggleTheme'
import { useAppSelector } from '@/store/redux/useReduxTypeHooks'
import useTriggerThemeVar from '@/hooks/useTriggerThemeVar'
import { themeOptionsInterface } from '@/types/type'

const Navbar = () => {

const theme = useAppSelector((store) => store.theme.themeNow )
// const themeOptions = useAppSelector((store) => store.theme.options ) 

// const [bgd, setBackground] = useState( `bg-${theme}-bg`)
// const [txt, setText] = useState( `text-${theme}-text`)

const themeOptions: themeOptionsInterface = {
  light:"light",
  dark:"dark",
  light1:"light1",
  dark1:"dark1",
  dark2:"dark2",
  dark3:"dark3"
}

const themeShouldBe = themeOptions[theme as keyof typeof themeOptions]
console.log("themeShouldBe",themeShouldBe)

let bgd = `bg-${theme}-bg`
let txt = `text-${theme}-text`

/*

const changeOnRender = ()=>{
  setBackground(`bg-${theme}-bg`)
  setText(`text-${theme}-text`)

  // bgd = `bg-${theme}-bg`
  // txt = `text-${theme}-text`
}

useEffect(() => {
  changeOnRender()
},[theme])

*/

  return (
    // <div className={`w-full ${bgd} ${txt} bg-light- flex justify-between items-center text-md md:text-lg px-4 py-1 border my-4 rounded-full shadow-md`}>
    <div className={`w-full ${theme === themeShouldBe  ? `${bgd} ${txt}` :`bg-light1-bg text-light1-text`} flex justify-between items-center text-md md:text-lg px-4 py-1 border my-4 rounded-full shadow-md`}>
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