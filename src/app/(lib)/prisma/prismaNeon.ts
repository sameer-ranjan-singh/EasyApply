import {Prisma, PrismaClient} from "@prisma/client"

const client = new PrismaClient()

const addUser = async() => {
  client.user.create({
    data:{
        name:"sameer",
        email:"sameer@gmail.com",
        password:"asdasdasdd"
    }
})
} 

addUser()
.then(async()=> {
    console.log("User Added")
    await client.$disconnect()
})
.catch(async (e)=>{
    console.error(e)
    client.$disconnect()
    process.exit(1)
})
    

export default client