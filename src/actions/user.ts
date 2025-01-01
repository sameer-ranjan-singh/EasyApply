"use server"

import client from "@/prisma/prismaNeon";
import { NextRequest, NextResponse } from "next/server";

//POST - Signup / add new user
export const addUserAction = async (req: NextRequest) => {
 try{
  const prisma = client
  const body = await req.json()
  const userAlreadyExist = await prisma.user.findUnique({where:{email: body.email}})
  if(userAlreadyExist){
    return {message:"Email Already exist"}
  }
  const newUser = await prisma.user.create({data:body})
  const newUserLink = await prisma.link.create({data:{userId:newUser.id}})
  console.log(newUserLink)
  return {messsage:"User added successfully !", newUser: newUser, newUserLink : newUserLink}

  }catch(error:any){
  return {message:"Failed to create Account", error: error.message}
 }
}