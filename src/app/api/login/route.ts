import client from "@/prisma/prismaNeon"
import { NextResponse } from "next/server"


//POST login user -- signup
export const POST = async (req: Request) => {
    try{
      const prisma = client
      const body = await req.json()
      if(!body || !body.email){
        return new NextResponse("Email NOT FOUND in the Request body",{status:400})
    }
  
      const user = await prisma.user.findUnique({where: {email: body.email}})
      if(!user){
        return new NextResponse("User NOT FOUND",{status:400})
      }
      return new NextResponse(
        JSON.stringify({message: "Found the user !", user: user }),
        {status:200}
      )

    }catch(error:any){
      return new NextResponse("Error in fetching userData, "+ error.message,{status:500})
    }
  }