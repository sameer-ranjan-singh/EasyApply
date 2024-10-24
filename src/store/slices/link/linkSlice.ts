import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { linkInterface } from "@/types/type";
import { RootState } from "@/store/store";

const initialState: linkInterface = {
    id: undefined,
    userID: undefined,
    portfolio: "https://sameer-campus.netlify.app",
    linkedin: "",
    twitter: "",
    github: "",
    discord: "",
    reddit: "",
    leetcode: ""
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