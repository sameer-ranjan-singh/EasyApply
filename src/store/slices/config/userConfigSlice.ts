import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userConfigInterface {
    userLoggedIn : boolean
    userSession : userSessionInterface
}

interface userSessionInterface {
    name : string | undefined | null
    email: string | undefined | null
    image: string | undefined | null
}

const initialState : userConfigInterface = {
    userLoggedIn: false,
    userSession : {
        name : undefined,
        email : undefined,
        image : undefined,
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
        }
    }
})

export const {addSession, logOutSession } = userConfigSlice.actions
export default userConfigSlice.reducer