import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userConfigInterface {
    userLoggedIn : boolean
    userSession : userSessionInterface | undefined
}

interface userSessionInterface {
    name : string | undefined | null
    email: string | undefined | null
    password?: string | undefined | null
    image?: string | undefined | null
    userLoggedIn : boolean | undefined | null
}

const initialState : userConfigInterface = {
    userLoggedIn: false,
    userSession : {
        name : undefined,
        email : undefined,
        password: undefined,
        image : undefined,
        userLoggedIn : false
    }
}

const userConfigSlice = createSlice({
    name : "userConfig",
    initialState,
    reducers:{
        addSession : (state, action : PayloadAction<userConfigInterface>)=> {
            return action.payload

        },
        logOutSession : (state) => {
            state.userLoggedIn = false
            state.userSession?.userLoggedIn == false
        }
    }
})

export const {addSession, logOutSession } = userConfigSlice.actions
export default userConfigSlice.reducer