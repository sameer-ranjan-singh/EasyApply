"use client"
import { useAppDispatch, useAppSelector } from '@/store/redux/useReduxTypeHooks'
import { addLinks } from '@/store/slices/link/linkSlice'
import Image from 'next/image'
import saveMyFile from "../public/placard.png"
import React from 'react'
import { linkInterface } from '@/types/type'

const SaveButton = ({linkKey,links}:{linkKey : string, links:linkInterface}) => {
 const dispatch = useAppDispatch()
 const linkStore = useAppSelector((store)=> store.link)

    const handleSaveBtn = () => {
      console.log("linkValue :",links[linkKey  as keyof typeof linkStore])
      if(links[linkKey  as keyof typeof linkStore] !== ""){
        dispatch(addLinks({
          ...linkStore, [linkKey]: links[linkKey as keyof typeof linkStore]
        }))
        console.log("Save btn store updated",linkStore)
      }
    }

  return (
    <button className="px-2 h-8 w-fit uppercase font-bold flex justify-center items-center rounded-lg text-xs  text-gray-200 active:text-blue-500"
      onClick= {handleSaveBtn}>
    <Image
      height={45}
      width={45}
      src={saveMyFile}
      alt='Save'
    />
   </button>
  )
}

export default SaveButton