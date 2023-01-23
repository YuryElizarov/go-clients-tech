import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {EModals, IAlert} from "./types";


export interface AppState {
    modals: {
        [EModals.Search]: boolean,
        [EModals.Pin]: boolean,
        [EModals.ReviewAnswer]: boolean,
        [EModals.Timetable]: boolean,
        [EModals.AddService]: boolean,
        [EModals.EditService]: boolean,
        [EModals.NewWaitlist]: boolean,
        [EModals.Qrcode]: boolean,
        [EModals.CustomizeForm]: boolean,
        [EModals.Preview]: boolean,
        [EModals.Send]: boolean,
        [EModals.AddEmployee]: boolean,
        [EModals.AddPatient]: boolean,
        [EModals.CalendarDetail]: boolean,
        [EModals.DeleteEvent]: boolean,
        [EModals.NewEvent]: boolean,
    },
    alert: IAlert | null
}

const initialState: AppState = {
    modals: {
        [EModals.Search]: false,
        [EModals.Pin]: false,
        [EModals.ReviewAnswer]: false,
        [EModals.Timetable]: false,
        [EModals.AddService]: false,
        [EModals.EditService]: false,
        [EModals.NewWaitlist]: false,
        [EModals.Qrcode]: false,
        [EModals.CustomizeForm]: false,
        [EModals.Preview]: false,
        [EModals.Send]: false,
        [EModals.AddEmployee]: false,
        [EModals.AddPatient]: false,
        [EModals.CalendarDetail]: false,
        [EModals.DeleteEvent]: false,
        [EModals.NewEvent]: false,
    },
    alert: null
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        showModal: (state, action: PayloadAction<EModals>) => {
            state.modals = {
                ...state.modals,
                [action.payload]: true
            }
        },
        closeModal: (state, action: PayloadAction<EModals>) => {
            state.modals = {
                ...state.modals,
                [action.payload]: false
            }
        },
        showAlert: (state, action: PayloadAction<IAlert>) => {
            state.alert = action.payload
        },
        closeAlert: (state) => {
            state.alert = null
        },
    },
})

export const {closeModal, showModal, showAlert, closeAlert} = appSlice.actions
export default appSlice.reducer