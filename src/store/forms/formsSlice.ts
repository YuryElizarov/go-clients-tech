import {createSlice} from "@reduxjs/toolkit";
import {IForm, IPatientSubmission} from "../../types";
import {mockForms, mockPatients} from "./mock";


export interface FormsState {
    forms: IForm[]
    patientsSubmissions: IPatientSubmission[]
}

const initialState: FormsState = {
    forms: mockForms,
    patientsSubmissions: mockPatients
}

export const formsSlice = createSlice({
    name: 'forms',
    initialState,
    reducers: {
    },
})

export const {actions} = formsSlice
export default formsSlice.reducer