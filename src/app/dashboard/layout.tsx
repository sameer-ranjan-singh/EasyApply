"use client"
import { useAppSelector } from "@/store/redux/useReduxTypeHooks"
import React from "react"

const dashboradLayout = ({children}:{children:React.ReactNode}) => {
  const theme = useAppSelector((store) => store.theme.themeNow )

  return (
    <>
     {/* <div className="flex flex-col justify-center items-center "> */}
     <div className={`bg-${theme}-bg text-${theme}-text flex flex-col justify-center items-center`}>
      {children}
     </div>
    </>
  )
}

export default dashboradLayout
