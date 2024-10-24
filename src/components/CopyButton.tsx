"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import copy from "../public/copy.png"
import btnAfterCopy from "../public/copyAfter.svg"
import { useAppSelector } from '@/store/redux/useReduxTypeHooks'

const CopyButton = ({linkKey}:{linkKey:string}) => {
  const [isCopied,setIsCopied] = useState(false)
  const linkStore = useAppSelector((store)=> store.link)
  
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
        src={isCopied ? btnAfterCopy : copy}
        alt='Copy'
       />
      </button>
    </div>
  )
}

export default CopyButton


