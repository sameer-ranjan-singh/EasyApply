"use client"
import React from 'react'
import { useRouter } from "next/navigation";
import ClientSideRendered from './csr';

const ButtonSignup = () => {
  const router = useRouter()
  return (
    <>
     <button 
      onClick={()=> router.push("./signup")}
      className="flex justify-center items-center border border-black p-2 font-mono font font-extrabold hover:bg-orange-500  hover:text-white hover:border-none">
        <ClientSideRendered/>
        Sign Up {"-->"} 
      </button>
    </>
  )
}

export default ButtonSignup