import client from "@/prisma/prismaNeon";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

//POST - save link as new entry
export const POST = async (req: NextRequest) => {
  try {
    const prisma = client;
    const links = prisma.link.fields;
    const body = await req.json();
    const { linkField, userId } = body;
    const dbLinkField = links[linkField as keyof typeof links];
    const value = dbLinkField;
    const updatingLink = await prisma.link.update({
      where: { userId: userId },
      data: linkField in prisma.link.fields ? { [linkField]: value } : {},
    });
    return new NextResponse(
      JSON.stringify({
        message: "Link added Successfully !",
        updatedLink: value,
      })
    );
  }catch(error) {
    return new NextResponse(JSON.stringify({ message: "Failed to add link" }));
  }
};

// GET - user links 
export const GET = async (req:NextApiRequest,res:NextResponse, {params}:{params:{id : number}}) => {
  // const clientLinkId = new URL(req.url)
  const clientLinkId = params.id
  console.log("clientLinkId :",clientLinkId) // 2
  try{
    const prisma = client
    if(!clientLinkId){
      return new NextResponse(JSON.stringify({message:"link id not received from the client"}))
    }
    console.log("before User Link :")
    const userLinks = await prisma.link.findMany({where: {id: clientLinkId}}) // findUnique is not working leading to catch error
    console.log("userLinks :",userLinks)
    if(!userLinks){
      return new NextResponse(JSON.stringify({message:"userId not Found !"}))
    }
    return new NextResponse(JSON.stringify({links: userLinks}))
  }catch(error){
    return new NextResponse(JSON.stringify({message:"Failed to fetch links"}))
  }
}