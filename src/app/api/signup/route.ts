import client from "@/prisma/prismaNeon";
import { NextRequest, NextResponse } from "next/server";

//POST - Signup / add new user
export const POST = async (req: NextRequest) => {
 try{
  const prisma = client
  const body = await req.json()
  const userAlreadyExist = await prisma.user.findUnique({where:{email: body.email}})
  if(userAlreadyExist){
    return new NextResponse(JSON.stringify({message:"Email Already exist"}))
  }
  const newUser = await prisma.user.create({data:body})
  const newUserLink = await prisma.link.create({data:{userId:newUser.id}})
  console.log(newUserLink)
  return new NextResponse(JSON.stringify({messsage:"User added successfully !", newUser: newUser, newUserLink : newUserLink}))

  }catch(error:any){
  return new NextResponse(JSON.stringify({message:"Failed to create Account", error: error.message})) 
 }
}