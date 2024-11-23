import { useEffect } from 'react'

const useTriggerThemeVar = (theme:string,bgd:string,txt:string) => {
  // let bgd = `bg-${theme}-bg`
  // let txt = `text-${theme}-secondary`
  
  const changeOnRender = ()=>{
    bgd = `bg-${theme}-bg`
    txt = `text-${theme}-secondary`
  }
  
  useEffect(() => {
    changeOnRender()
  },[theme])
}

export default useTriggerThemeVar