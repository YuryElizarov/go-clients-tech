import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export interface MessengerState {
    selectedChat: number | null
}

const initialState: MessengerState = {
    selectedChat: null
}

export const messengerSlice = createSlice({
    name: 'messenger',
    initialState,
    reducers: {
        selectChat: (state, action: PayloadAction<number>) => {
            state.selectedChat = action.payload
        }
    },
})

export const {selectChat} = messengerSlice.actions
export default messengerSlice.reducer