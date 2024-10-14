import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { linkInterface } from "@/app/(lib)/types/type";
import { RootState } from "@/store/store";

const initialState: linkInterface = {
    id: undefined,
    userID: undefined,
    portfolio: undefined,
    linkedin: undefined,
    twitter: undefined,
    github: undefined,
    discord: undefined,
    reddit: undefined,
    leetcode: undefined
}

const linkSlice = createSlice({
    name:"linkSlice",
    initialState,
    reducers: {
        addLinks : (state, action:PayloadAction<linkInterface>) => {
            return action.payload
        }
    }
})
const linkFromRootState = (state:RootState) => state.link

export const {addLinks} = linkSlice.actions
export default linkSlice.reducer