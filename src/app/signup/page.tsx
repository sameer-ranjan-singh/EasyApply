import { redirect  } from "next/navigation";
import { signIn } from "../../../auth"; 
import { AuthError } from "next-auth";
import { providerMap } from "../../../auth";
import { providers } from "../../../auth";
import CredentialSignup from "@/components/CredentialSignup";

function Signup(props: {
  searchParams: { callbackUrl: string | undefined }
}) {

  const SIGNIN_ERROR_URL = "/signup"
  console.log("providers :",providers)
  return (
    <>
      <div className="">
        <div className="flex justify-center items-center flex-col my-3">
          <h1 className="text-2xl md:text-3xl font-bold pb-8 ">
             Sign Up to Easily Apply
          </h1>
         {Object.values(providerMap).map((provider) => (
          <form
            className="w-10/12 md:w-4/12 p-1 md:mx-auto left-0 right-0 text-black bg-opacity-90"
            action={async () => {
            "use server"
            try {
                await signIn(provider.id, {
                redirectTo: props.searchParams?.callbackUrl ?? "/dashboard",
              })
            } catch (error) {
              if (error instanceof AuthError) {
                return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`)
              }
              throw error
            }
            }}
          >
            <button 
              className="bg-slate-200 text-black hover:bg-slate-300  p-2 rounded-md font-bold w-full"
              type="submit">
               <span>Sign in with {provider.name}</span>
            </button>
          </form>
        ))}
      </div>
      
        <div className="flex justify-center items-center">
          <span>Or</span>
        </div> 

       <CredentialSignup/>

      </div>
    </>
  )
}

export default Signup;