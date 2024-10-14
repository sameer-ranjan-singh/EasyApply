"use client"

import { useEffect, useState } from "react"

interface usernameInterface{
  username : string
}

const DynamicUsernamePage =  ({ params}: {params: usernameInterface}) => {
  const [username, setUsername] = useState("")
  
  useEffect(()=> {
    const getData = async (input:string)=> {
      const data = await fetch(`https://api.github.com/users/${input}`)
      const userData = await data.json()
      setUsername(await userData.login)
      console.log({userData,params,username})
    }
    getData(params.username)
    
  },[params.username])

return (
    <div className="flex flex-col justify-center text-center mt-5">
      {username =="" ? <h1>Data is Loading ...</h1>
      :(
        <div >
          <h1 className="underline font-bold">DynamicUsernamePage</h1>
          <h1>useState : {username}</h1>
          <h1>Next params : {params.username}</h1>
        </div>
       )
      }
    </div>
  )
}

export default DynamicUsernamePage
