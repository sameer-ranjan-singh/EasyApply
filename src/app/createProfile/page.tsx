"use client"
import { useForm, SubmitHandler } from "react-hook-form"
import { Inputs } from "../(lib)/types/type"

export default function CreateProfile() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log(watch("Github")) // watch input value by passing the name of it

  return (
    <div className="flex justify-center text-center w-screen h-screen bg-blue-100">
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-screen md:w-1/2 p-4">
      <input
        className="p-2 m-2 border"
        defaultValue="defaultValue"
        placeholder="Enter Github link"
        {...register("Github")}
        />
      {errors.Github && <span>This field is required</span>}


      <input 
        className="p-2 m-2 border"
        {...register("LinkedIn")}
        placeholder="Enter Linkedin link"
        />

      <input
       className="p-2 m-2 border"
       type="text"
       placeholder="Enter Twitter Link" 
       {...register("Twitter")}
       />

      <input
       className="p-2 m-2 border"
       type="text"
       placeholder="Enter Porfolio Link" 
       {...register("Portfolio")}
       />
       

      <input 
        className="p-2 m-2 border" 
        type="submit" 
        />
    </form>
  </div>
  )
}