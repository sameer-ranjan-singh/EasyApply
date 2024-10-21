"use client"
import { useAppSelector } from '@/store/redux/useReduxTypeHooks'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const useRedirect = () => {

 const {data: session} = useSession()
 const router = useRouter()
 const userConfig = useAppSelector((store)=> store.userConfig)

if(!session?.user.name && userConfig?.userLoggedIn === undefined) {
  router.push("/")
}

// if(session?.user){
//   session.user.userLoggedIn = true
//   useEffect(() => {
//     fillStoreUsingSession()
//   },[])
// }

// if(userConfig?.userLoggedIn){
//   router.replace("/dashboard")
// }

// useEffect(() => {
//   fillStoreUsingSession()
// },[])
 
}

export default useRedirect