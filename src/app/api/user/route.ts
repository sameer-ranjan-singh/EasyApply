import client from "@/prisma/prismaNeon";
import { NextRequest, NextResponse } from "next/server";

//GET all users
export const GET= async ()=> {
  try{
    const prisma = client
    const userList = await prisma.user.findMany()
    return new NextResponse(
      JSON.stringify({message:"Got the Users Data !", users :userList }),
      {status:200}
    )
  }catch(error:any){
    return new NextResponse("Error in fethcing users"+ error.message,{status:500})
  }
}