"use client"
import { useAppDispatch, useAppSelector } from '@/app/(lib)/redux/useReduxTypeHooks'
import { addSession } from '@/store/slices/config/userConfigSlice'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const useRedirect = () => {
 const session = useSession()
 const router = useRouter()
 const dispatch = useAppDispatch()
 const userConfig = useAppSelector((store)=> store.userConfig)

 const fillStoreUsingSession = async ()=> {
  if(session?.data?.user?.name){
    const {name , email, image} = session?.data?.user
    console.log("Session exist :",email)
        dispatch(addSession({
          userLoggedIn: true,
          userSession: {
            name: name,
            email: email,
            image: image,
          }
        }))
      console.log("userConfig :",userConfig)
  }
}

 useEffect(()=>{
    if(session.status === "unauthenticated") {
        return router.push("/")
    } else if (session.status === "authenticated"){
        fillStoreUsingSession()
    }
 },[session.status])
 
}

export default useRedirect