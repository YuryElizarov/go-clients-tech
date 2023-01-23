import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {EStep} from "./types";


export interface StepsState {
    stepsComplete: { [step in EStep]: boolean }
    currentStep: EStep,
    form: {[key: string]: any}
}

const initialState: StepsState = {
    currentStep: EStep.PersonalInfo,
    stepsComplete: {
        [EStep.PersonalInfo]: false,
        [EStep.ContactInfo]: false,
        [EStep.Appointment]: false,
        [EStep.PatientInfo]: false,
        [EStep.DentalInfo]: false,
        [EStep.MedicalHistory]: false,
        [EStep.Signature]: false,
    },
    form: {
    }
}

export const stepsSlice = createSlice({
    name: 'steps',
    initialState,
    reducers: {
        nextStep: (state, action: PayloadAction<EStep>) => {
            state.stepsComplete[state.currentStep] = true
            state.currentStep = action.payload
        },
        change: (state, action: PayloadAction<{ key: string, val: any }>) => {
            state.form[action.payload.key] = action.payload.val
        },
        remove: (state, action: PayloadAction<{ key: string }>) => {
            delete state.form[action.payload.key]
        },
    },
})

export const {nextStep, change, remove} = stepsSlice.actions
export default stepsSlice.reducer