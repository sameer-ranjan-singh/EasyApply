import { redirect } from "next/navigation"
import { auth, signIn, signOut } from "../../auth"
 
export async function AuthSignup() {
  const session = await auth()

  const handleFormAction = async () => {
    "use server"
    if(session?.user?.name){
      await signOut({redirectTo:"/"})
    }
    
    if(session?.user?.name === undefined)
      await signIn("google",{redirectTo:"/dashboard"})
  }
  return (
    <form
      action={async () => {
        "use server"
        await handleFormAction()
    }}>
      <button 
        type="submit"
        className="flex justify-center items-center p-1 font-mono font-semibold active:bg-yellow-400 ">
         {session?.user ? "Logout" : "Signup"}
      </button>
    </form>
  )
}


// const handleFormAction = async () => {
//     console.log("sameer handleFormAction")
//     //  if(userConfig.userSession){
//       await signOut()
//      }
//       await signIn()
//       const session = await auth()
//       if(session?.user){
//         const {name , email, image} = session.user
//         dispatch(addSession({
//           userLoggedIn : true,
//           userSession : {
//             name: name,
//             email: email,
//             image: image,
//             expires:session.expires
//           }
//         }))
//       }
//     }