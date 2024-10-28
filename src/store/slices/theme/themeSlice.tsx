import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { themeInterface } from "@/types/type";

const initialState: themeInterface = {
    themeNow: "light"
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        updateTheme :(state,action: PayloadAction<themeInterface>) => {
            return state = action.payload
        }
    }
})

export const {updateTheme} = themeSlice.actions
export default themeSlice.reducer 