import { RootState } from "@/store/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userInterface } from "@/app/(lib)/types/type";

const initialState: userInterface = {
    id : undefined,
    name: undefined,
    password: undefined,
    email: undefined,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser : (state,action: PayloadAction<userInterface>)=> {
            return action.payload
        }
    },
})

export const userFromRootState = (state:RootState)=> state.user

export const {addUser} = userSlice.actions
export default userSlice.reducer