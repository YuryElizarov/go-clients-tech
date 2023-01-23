import {createSlice} from "@reduxjs/toolkit";
import {IDoctorBooking, IPatientItem, IService} from "../../types";
import {doctors, patients, services} from "./mock";


export interface BookingState {
    patients: IPatientItem[]
    services: IService[]
    doctors: IDoctorBooking[]
}

const initialState: BookingState = {
    patients,
    services,
    doctors,
}

export const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        // selectChat: (state, action: PayloadAction<number>) => {
        selectChat: () => {

        }
    },
})

export const {selectChat} = bookingSlice.actions
export default bookingSlice.reducer