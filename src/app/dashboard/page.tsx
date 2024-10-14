"use client"
import { useState } from "react"
import ClientSideRendered from "../../components/csr"
import InputLink from "../../components/InputLink"
import { useAppDispatch, useAppSelector } from "../(lib)/redux/useReduxTypeHooks"
import { addLinks } from "@/store/slices/link/linkSlice"
import { linkInterface } from "../(lib)/types/type"
import useRedirect from "@/hooks/useRedirect"
import btnBeforeCopy from "../../public/copyBefore.svg"
import btnAfterCopy from "../../public/copyAfter.svg"
// import btnAfterCopy 

export default function DashboardPage() {
  useRedirect()

  const dispatch = useAppDispatch()
  const userConfig = useAppSelector((store) => store.userConfig)
  const linkInfo = useAppSelector((store)=> store.link)

  const [isCopied,setIsCopied] = useState(false)
  const [links, setLinks] = useState<linkInterface>({
    github : "",
    twitter : "",
    portfolio : "",
  })
  
  const handleOnChange = (field: keyof linkInterface, event: React.ChangeEvent<HTMLInputElement>) => {
    setLinks({ ...links, [field]: event.target.value });
  };

  const handleCopyBtn = async () => {
    console.log("Todo : handleCopyBtn")
    await navigator.clipboard.writeText(links.github)
    setIsCopied(true)
    setTimeout(()=>{
      setIsCopied(false)
    },2000)
  }
    
  const handleSave = () => {
    console.log(links)
    dispatch(addLinks({
      github: links.github,
      twitter: links.twitter,
      portfolio: links.portfolio,
    }))
  }
    return (
      <>
      <ClientSideRendered/>
         <div className="text-center flex flex-col md:m-0 mx-5 my-2 md:w-1/2 w-full">
          <h1 className="font-bold md:font-extrabold capitalize my-[10%] text-lg md:text-4xl text-blue-700"># {userConfig.userSession.name}</h1>
          <div className="flex flex-col gap-5">
            <InputLink
              value={links.github}
              onChange={(event)=> handleOnChange("github",event)}
              handleCopyBtn={handleCopyBtn}
              placeholder="Hard-coded placeholder: Github link"
              copyBtnSrc = {isCopied ? btnAfterCopy : btnBeforeCopy}
            >
            </InputLink>
            <InputLink
              value={links.twitter}
              onChange={(event)=> handleOnChange("twitter",event)}
              handleCopyBtn={handleCopyBtn}
              placeholder="Hard-coded placeholder: Twitter link"
              copyBtnSrc = {isCopied ? btnAfterCopy : btnBeforeCopy}
              
              >
            </InputLink>
            <InputLink
              value={links.portfolio}
              onChange={(event)=> handleOnChange("portfolio",event)}
              handleCopyBtn={handleCopyBtn}
              placeholder="Hard-coded placeholder: portfolio link"
              copyBtnSrc = {isCopied ? btnAfterCopy : btnBeforeCopy}
              
              >
            </InputLink>
             <div className="flex justify-end">
              <button
                className="w-fit px-2 py-1 m-2 border rounded-md shadow-md bg-yellow-400"
                onClick={()=> handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }