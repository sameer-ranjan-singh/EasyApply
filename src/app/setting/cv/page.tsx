import React from 'react'

const Resume = async () => {
    const fetchData = async () => {
        const data = await fetch("https://api.github.com/users/sameer-ranjan-singh")
        const JsonData = await data.json()
        console.log("server side RENDERED")
        return JsonData
    }
    const gitData = await fetchData()
  return (
    <div> Bio {gitData.bio}</div>
  )
}

export default Resume