"use client"
import Navbar from "@/components/Navbar"
import { store, AppStore } from "@/store/store"
import React, { useRef } from "react"
import { Provider } from "react-redux"

export const StoreProvider = ({children}:{children: React.ReactNode})=> {
    const storeRef = useRef<AppStore>()
    if(!storeRef.current){
        storeRef.current = store
    }
    return (
    <Provider store={storeRef.current}>
        {children}
    </Provider>
    )
}