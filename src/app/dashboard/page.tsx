"use client"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { linkInterface } from "../../types/type"
import SaveButton from "@/components/SaveButton"
import CopyButton from "@/components/CopyButton"
import SocialIcon from "@/components/SocialIcon"
import { addSession } from "@/store/slices/config/userConfigSlice"
import { useAppDispatch, useAppSelector } from "../../store/redux/useReduxTypeHooks"

export default function DashboardPage() {

  const dispatch = useAppDispatch()
  const {data: session} = useSession()
  const linkStore = useAppSelector((store)=> store.link)
  const nameInStore = useAppSelector((store) => store.userConfig?.userSession?.name)
  const [links, setLink] = useState<linkInterface>(linkStore)
  
  const fillStoreUsingSession = ()=> {
    if(session?.user?.name ){
      session.user.userLoggedIn = true
      const {name , email, image} = session.user
      dispatch(addSession({
        userLoggedIn: true,
        userSession: {
          name: name,
          email: email,
          image: image,
          password: undefined,
          userLoggedIn : true,
        }
      }))
    }
  }
  
  const handleOnChange = (field: keyof linkInterface, event: React.ChangeEvent<HTMLInputElement>) => {
    setLink({ ...links, [field]: event.target.value });
  };
    
const shouldIncludeKeys = (linkKey: string)=> {
  const excludeKey = ["id", "userID"]
  return !excludeKey.includes(linkKey)
}

  useEffect(() => {
    if(session?.user.name){
        fillStoreUsingSession()
      }
  },[session])

    return (
      <>
        <div className="text-center flex flex-col md:m-0 mx-5 my-2 md:w-1/2 w-full">
          <h1 className="font-bold md:font-extrabold capitalize my-[10%] text-lg md:text-4xl text-blue-700"># {nameInStore}</h1>
          <div className="flex flex-col gap-5 h-screen">
            { Object.keys(linkStore).filter(shouldIncludeKeys).map((linkKey)=> {
              return (
                <>
                  <div
                    key={linkKey}
                    className=" border border-black-700 mx-4 md:m-0 p-2 flex justify-between items-center rounded-md bg-none"
                  >
                    <SocialIcon
                      linkKey={linkKey}
                    />
                    <input
                      key={linkKey}
                      placeholder={`${"store your " + linkKey + " link"}`}
                      value={links[linkKey as keyof typeof linkStore]}
                      onChange={(event) =>
                        handleOnChange(linkKey as keyof typeof linkStore, event)
                      }
                      className="p-1 md:p-2 bg-transparent text-sm md:text-lg font-mono text-black w-full focus:outline-none"
                    />

                    {linkStore[linkKey as keyof typeof linkStore] == "" ? (
                      <SaveButton linkKey={linkKey} links={links} />
                    ) : (
                      <CopyButton
                        linkKey={linkKey}
                      />
                    )}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </>
    )
  }