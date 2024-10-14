import Image from 'next/image'
import React from 'react'
// import btnBeforeCopy from "../public/copyBefore.svg"
// import btnAfterCopy from "../public/copyAfter.svg"

interface InputLinkPropsInterface {
    onChange: (event: React.ChangeEvent<HTMLInputElement>)=> void
    value: string | undefined
    handleCopyBtn: () => void
    placeholder:string,
    copyBtnSrc: string
}

const InputLink = ({onChange, value, handleCopyBtn, placeholder,copyBtnSrc}:InputLinkPropsInterface) => {
  
  return (
    <div className="border border-blue-700 border-dotted mx-4 md:m-0 p-2 flex justify-between rounded-md bg-none">
    <input
     id ="random"
     type="text"
     onChange={onChange}
     value={value}
     placeholder={placeholder}
     className="p-1 md:p-2 bg-transparent text-sm md:text-lg font-mono text-black w-full focus:outline-none"
     />
    <button className="px-2 h-8 w-fit uppercase font-bold flex items-center rounded-lg text-xs  text-gray-200 active:text-blue-500"
      onClick={handleCopyBtn}>
        <Image
         height={30}
         width={30} 
         src={copyBtnSrc}
         alt='Copy'
        />
    </button>
  </div>
  )
}

export default InputLink