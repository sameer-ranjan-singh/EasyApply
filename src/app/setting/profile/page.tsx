import ServerSideRendered from '@/components/ssr'
import React from 'react'

const profilepage = () => {

    // const getData = async (input:string)=> {
    //   try {
    //     const data = await fetch(`https://api.github.com/users/${input}`)
    //     const userData = await data.json()
    //     console.log("fetchedUserData",userData)
    //   } catch (error) {
    //     console.log("faile to fetch data",error)
    //     alert(error)   
    //   }
    // }
    // const user = getData("sameer-ranjan-singh")

    
  return (
    <>
    <ServerSideRendered/>
    <div>ProfilePage : Enter your_git_username in the url params</div>
    </>
  )
}

export default profilepage