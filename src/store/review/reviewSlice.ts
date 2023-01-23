import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IReview} from "../../types";
import {reviews} from "./mock";


export interface ReviewState {
    selectedReview: IReview | null
    reviews: IReview[]
}

const initialState: ReviewState = {
    selectedReview: null,
    reviews
}

const findReview = (reviewsArr: IReview[], id: number): IReview | null => {
    let item: IReview | null = null
    if (reviewsArr.length > 0) {
        for (const iReview of reviewsArr) {
            if (iReview.id === id) {
                item = iReview
            } else if (iReview.childReview) {
                item = findReview(iReview.childReview, id)
            }
            if (item !== null) break
        }
    }
    return item
}

export const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {
        selectReview: (state, action: PayloadAction<number>) => {
            state.selectedReview = findReview(state.reviews, action.payload)
        },
        unselectReview: (state) => {
            state.selectedReview = null
        }
    },
})

export const {selectReview, unselectReview} = reviewSlice.actions
export default reviewSlice.reducer