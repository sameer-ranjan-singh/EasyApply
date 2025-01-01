import { useState } from "react"

export const useFetch = async (callbackFn) => {
 const [data, setData] = useState(undefined)
 const [error, setError] = useState(null)
 const [isloading, setLoading] = useState(false)
 
 const fn = async () => {
  setLoading(true)
    const response = await callbackFn()
  if(response){
    setData(response)
    setLoading(false)
  }
 }
}