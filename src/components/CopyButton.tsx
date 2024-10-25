"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import beforeCopyIcon from "../public/copyBefore.png"
import afterCopyIcon from "../public/copyAfter.png"
import { useAppSelector } from '@/store/redux/useReduxTypeHooks'

const CopyButton = ({linkKey}:{linkKey:string}) => {
  const linkStore = useAppSelector((store)=> store.link)
  const [isCopied , setIsCopied] = useState(false)
  
 const text = linkStore[linkKey as keyof typeof linkStore] || "default-sameer"

   const handleCopyBtn = (text:string) => {
    console.log("Todo : handleCopyBtn")
    navigator.clipboard.writeText(text)
    setIsCopied(true)
    setTimeout(()=>{
        setIsCopied(false)
    },2000)
    return undefined
    }

  return (
    <div>
     <button className="px-2 h-8 w-fit uppercase font-bold flex items-center rounded-lg text-xs  text-gray-200 active:text-blue-500"
       onClick= {()=> handleCopyBtn(text)}>
       <Image
        height={30}
        width={30}
        src={isCopied ? afterCopyIcon : beforeCopyIcon}
        alt='Copy'
       />
      </button>
    </div>
  )
}

export default CopyButton