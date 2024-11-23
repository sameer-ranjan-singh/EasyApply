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
      <select name='Theme' id='theme' onChange={handleThemeChange} value={theme}
        // className={`${theme ? `bg-${theme}-border text-${theme}-primary` :`bg-light-secondary text-light-text`}`}
        className={`bg-${theme}-bg text-${theme}-text`}
      >
         <option value="light">Light</option>
         <option value="light1">Light1</option>
         <option value="dark">Dark</option>
         <option value="dark1">Dark1</option>
         <option value="dark2">Dark2</option>
         <option value="dark3">Dark3</option>
      </select>
    </div>
  )
}

export default ToggleTheme