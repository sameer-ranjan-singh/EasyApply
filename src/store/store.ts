import {configureStore} from "@reduxjs/toolkit"
import userReducer  from "./slices/user/userSlice"
import linkReducer from "./slices/link/linkSlice"
import userConfigReducer from "./slices/config/userConfigSlice"
import themeSliceReducer from "./slices/theme/themeSlice"

export const store = configureStore({
    reducer :{
        user : userReducer,
        link : linkReducer,
        userConfig : userConfigReducer,
        theme : themeSliceReducer
    }
})

export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch