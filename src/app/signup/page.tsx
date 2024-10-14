"use client"
import Link from "next/link";
import { useRef, useState } from "react";
import ClientSideRendered from "../../components/csr";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../(lib)/redux/useReduxTypeHooks";
import { addUser } from "@/store/slices/user/userSlice";
import {useForm, SubmitHandler} from "react-hook-form"
import { userInterface } from "../(lib)/types/type";

function Signup() {
  const [isSignInForm, setIsSignInForm] = useState(false);

  const dispatch = useAppDispatch()
  const userFromStore = useAppSelector((store)=> store.user)
  const router = useRouter()
  
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  
  const {
    register,
    handleSubmit,
    formState :{errors},
    
  } = useForm<userInterface>()
  
  const onSubmit: SubmitHandler<userInterface> = (data) =>{
    console.log("Form submitted data",data)
    const userdispatch = dispatch(addUser({
      id:`${Math.floor(Math.random()*100)}`,
      name:data.name,
      password:data.password,
      email:data.email
    }))

    console.log("userFromStore-after :",userFromStore)
    console.log("userdispatch :",userdispatch)
    router.replace("./dashboard")
  }
  console.log("rendered")


  const toggleSign = () => {
    setIsSignInForm(!isSignInForm);
  };

  const name = nameRef.current?.value
  const password = passwordRef.current?.value
  const email = emailRef.current?.value

  const handleButtonClick = () => {

    const userdispatch = dispatch(addUser({
      id:"Math.floor(Math.random()*100)",
      name:name,
      password:password,
      email:email
    }))

    console.log("userFromStore-after :",userFromStore)
    console.log("userdispatch :",userdispatch)
    router.replace("./dashboard")
  };


  return (
    <>
      <div className="bg-slate-200 shadow-lg">
       <ClientSideRendered/>
        <form onSubmit={handleSubmit(onSubmit)}
          className="h-screen w-screen md:w-4/12 p-4 md:p-14 md:mx-auto left-0 right-0 text-black bg-opacity-90"
        >
          <h1 className="text-2xl md:text-3xl font-bold py-4 ">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <div>
            {!isSignInForm && (
              <input {...register("name",{required:true})}
                // ref={nameRef}
                type="text"
                placeholder="Full Name"
                className="my-2 px-4 py-3 w-full bg-transparent text-black border border-neutral-700 rounded-sm"
              />
            )}
            {errors.name && <span className="text-red-700 font-bold  my-2">This field is required</span>}
            <input
              {...register("email",{required:true})}
              // ref={emailRef}
              type="text"
              placeholder="Email"
              className="my-2 px-4 py-3 w-full bg-transparent text-black border border-neutral-700 rounded-sm"
            />
            {errors.email && <span className="text-red-700 font-bold  my-2">This field is required</span>}

            <input
              {...register("password",{required:true})}
              // ref={passwordRef}
              type="password"
              placeholder="Password"
              className="my-2 px-4 py-3 w-full bg-transparent text-black border border-neutral-700 rounded-sm "
            />
            {errors.password && <span className="text-red-700 font-bold  my-2">This field is required</span>}
            

            <button
              type="submit"
              // onClick={handleButtonClick}
              className="bg-blue-700  hover:bg-blue-600 text-white p-2 rounded-md  font-bold  w-full"
            >
                {isSignInForm ? "Sign In" : "Sign Up"}
            </button>

            {isSignInForm ? (
              <>
                <h1 className=" m-4 text-md md:text-xl text-black text-center">
                  OR
                </h1>
                <button className="mt-2 p-2 w-full bg-stone-600  bg-opacity-50 text-bold rounded-sm font-bold ">
                  Use a sign-in code
                </button>
              </>
            ) : null}
            <Link className="m-2" href={"/"}>
              <h1 className="text-center hover:underline font-semibold">
                Forgot password ?
              </h1>
            </Link>
          </div>
          <div>
            <input type="checkbox" className="mx-2 size-4" />
            <label className=" ">Remember me ?</label>
          </div>
          {isSignInForm ? (
            <h1 className="mx-2 my-4 text-stone-500 ">
              New to Easyply?
              <span
                className="font-bold hover:underline cursor-pointer text-black"
                onClick={toggleSign}
              >
                {" "}
                Sign Up Now !
              </span>
            </h1>
          ) : (
            <h1 className="mx-2 my-4 text-stone-500">
              Already have an account?
              <span
                className="font-bold hover:underline cursor-pointer text-black"
                onClick={toggleSign}
              >
                {" "}
                Login !
              </span>
            </h1>
          )}
        </form>
      </div>
    </>
  );
}

export default Signup;
