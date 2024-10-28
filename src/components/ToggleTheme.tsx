"use client"
import { useAppDispatch, useAppSelector } from '@/store/redux/useReduxTypeHooks';
import { updateTheme } from '@/store/slices/theme/themeSlice';

const ToggleTheme = () => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector((store) => store.theme.themeNow )

  const handleThemeChange = (event: any)=>{
    const newTheme = event.target.value
    console.log("newTheme :", newTheme)
    dispatch(updateTheme({themeNow : newTheme}))
  }

  return (
    <div className='flex justify-center items-center p-1 font-mono font-semibold'>
      <select 
       className={`${theme ? `bg-${theme}-secondary text-${theme}-primary` :`bg-light-secondary text-light-primary`} `}
       name='Theme' id='theme' onChange={handleThemeChange} value={theme}>
         <option value="light">Light</option>
         <option value="dark">Dark</option>
      </select>
    </div>
  )
}

export default ToggleTheme