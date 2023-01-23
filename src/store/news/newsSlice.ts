import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPost} from "../../types";
import {posts} from "./mock";


export interface NewsState {
    selectedPost: number | null
    posts: IPost[]
}

const initialState: NewsState = {
    selectedPost: null,
    posts
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        selectPost: (state, action: PayloadAction<number>) => {
            state.selectedPost = action.payload
        }
    },
})

export const {selectPost} = newsSlice.actions
export default newsSlice.reducer