import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch, AppStore } from '../store.js'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useSelector.withTypes<AppStore>()