"use client"
import { signOut, useSession } from "next-auth/react" 
import Link from "next/link"
import { useAppSelector } from "@/store/redux/useReduxTypeHooks"
import UserAvatar from "./UserAvatar"
 
export function ToggleMySession(){
  const {data: session} = useSession()
  let userConfig = useAppSelector((store)=> store.userConfig)
  let {userLoggedIn,userSession} = userConfig

  const handleFormAction = () => {
    if(session?.user?.name){
      session.user.userLoggedIn = false
      userLoggedIn = false
      userSession = undefined
      signOut({redirectTo:"/"})
    }
//bug to fix : userlogged needs to be dipatched to be changed , cant use it like a variable to change the state.
    if(userLoggedIn){
      userLoggedIn = false
      userSession = undefined
      signOut({redirectTo:"/"})
    }
  }

  return (
    <form
      action={() => {handleFormAction()}}>
         {session?.user.userLoggedIn || userLoggedIn ? (
          <div className="flex gap-2">
           <button
             type="submit"
              className="flex justify-center items-center p-1 font-mono font-semibold active:bg-yellow-400 ">
              Logout
            </button>
            <div className='flex'>
              <Link href="/setting">
                <button
                  className="flex justify-center items-center p-1 font-mono font-semibold active:bg-yellow-400">
                   Setting
                </button>
              </Link>
              <UserAvatar/>
           </div>
         </div>
        ): (
          <Link href="/signup">
            <button
              className="flex justify-center items-center p-1 font-mono font-semibold active:bg-yellow-400 ">
               Signup
            </button>
          </Link>
        )
      } 
    </form>
  )
}