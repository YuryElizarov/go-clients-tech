import {createSlice} from "@reduxjs/toolkit";
import {IWaitlistItem} from "../../types";
import {waitlistAll, waitlistAsap, waitlistContinuing, waitlistDrafts} from "./mock";


export interface WaitlistState {
    all: IWaitlistItem[]
    asap: IWaitlistItem[]
    continuing: IWaitlistItem[]
    drafts: IWaitlistItem[]
}

const initialState: WaitlistState = {
    all: waitlistAll,
    asap: waitlistAsap,
    continuing: waitlistContinuing,
    drafts: waitlistDrafts,
}

export const waitlistSlice = createSlice({
    name: 'waitlist',
    initialState,
    reducers: {
    },
})

export const {actions} = waitlistSlice
export default waitlistSlice.reducer