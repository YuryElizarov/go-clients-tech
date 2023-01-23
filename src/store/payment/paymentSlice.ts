import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {mockCards, mockPayments} from "./mock";
import {IPayment, IPaymentCard} from "./types";


export interface PaymentState {
    selectedCard: number | null
    selectedPayment: number | null
    cards: IPaymentCard[]
    payments: IPayment[]
}

const initialState: PaymentState = {
    selectedCard: null,
    cards: mockCards,
    payments: mockPayments,
    selectedPayment: null
}

export const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        selectCard: (state, action: PayloadAction<number>) => {
            state.selectedCard = state.selectedCard === action.payload ? null : action.payload
        },
        selectPayment: (state, action: PayloadAction<number>) => {
            state.selectedPayment = state.selectedPayment === action.payload ? null : action.payload
        }
    },
})

export const {selectCard, selectPayment} = paymentSlice.actions
export default paymentSlice.reducer