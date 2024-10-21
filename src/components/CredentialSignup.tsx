"use client"
import Link from "next/link";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../store/redux/useReduxTypeHooks";
import { addUser } from "@/store/slices/user/userSlice";
import {useForm, SubmitHandler} from "react-hook-form"
import { userInterface } from "../types/type";
import { addSession } from "@/store/slices/config/userConfigSlice";

function CredentialSignup() {
  const [isSignInForm, setIsSignInForm] = useState(false);

  const dispatch = useAppDispatch()
  const userConfig = useAppSelector((store)=> store.userConfig)
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
    dispatch(addSession({
      userLoggedIn: true,
      userSession : {
        name : data.name,
        email : data.email,
        password: data.password,
        image : undefined,
        userLoggedIn: true
    }
    }))

    console.log("userConfig-after Signup :",userConfig)
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

    // console.log("userFromStore-after :",userFromStore)
    console.log("userdispatch :",userdispatch)
    router.replace("./dashboard")
  };

 const SIGNIN_ERROR_URL = "/"

  return (
    <>
      <div className="">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:w-1/2 p-4 md:px-14 md:mx-auto left-0 right-0 text-black bg-opacity-90"
        >

          <div>
            {!isSignInForm && (
              <input {...register("name",{required:true})}
                // ref={nameRef}
                type="text"
                placeholder="Full Name"
                className="my-2 px-4 py-3 w-full bg-transparent text-black border border-neutral-500 rounded-md capitalize"
              />
            )}
            {errors.name && <span className="text-red-700 font-bold  my-2">This field is required</span>}
            <input
              {...register("email",{required:true})}
              // ref={emailRef}
              type="text"
              placeholder="Email"
              className="my-2 px-4 py-3 w-full bg-transparent text-black border border-neutral-500 rounded-md "
            />
            {errors.email && <span className="text-red-700 font-bold  my-2">This field is required</span>}

            <input
              {...register("password",{required:true})}
              // ref={passwordRef}
              type="password"
              placeholder="Password"
              className="my-2 px-4 py-3 w-full bg-transparent text-black border border-neutral-500 rounded-md"
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
                <button className="mt-2 p-2 w-full bg-stone-600  bg-opacity-50 text-bold rounded-md font-bold ">
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

export default CredentialSignup;
