"use client"
import { useAppDispatch } from "@/store/redux/useReduxTypeHooks";
import { updateTheme } from "@/store/slices/theme/themeSlice";
import { useEffect } from "react";

export default function useThemeDetector() {
  const dispatch = useAppDispatch()
  const prefersLightScheme = window.matchMedia('(prefers-color-scheme: light)');
  const currentTheme = prefersLightScheme.matches ? "dark" : "light"
  
  const setThemeInitialState = ()=>{
    dispatch(updateTheme({themeNow : currentTheme}))
    console.log("InitialStateFixed :",currentTheme)
  }

useEffect(()=>{
    setThemeInitialState()
},[])

// return currentTheme;

}
