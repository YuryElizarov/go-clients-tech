import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {EDuration} from "./types";


export interface CalendarState {
    selectedDuration: EDuration
}

const initialState: CalendarState = {
    selectedDuration: EDuration.Day
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        selectDuration: (state, action: PayloadAction<EDuration>) => {
            state.selectedDuration = action.payload
        }
    },
})

export const {selectDuration} = calendarSlice.actions
export default calendarSlice.reducer