import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../types";
import {users} from "../../mock/users";


export interface ProfileState {
    selectedProfile: IUser
    profiles: IUser[]
    selectedProfileId: number | null
}

const initialState: ProfileState = {
    selectedProfile: users[0],
    profiles: users,
    selectedProfileId: null
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        selectProfile: (state) => {
            state.selectedProfile = state.profiles.filter((profile) => profile.id === state.selectedProfileId)[0] || 0
        },
        selectProfileId: (state, action: PayloadAction<number>) => {
            state.selectedProfileId = action.payload
        },
    },
})

export const {selectProfile, selectProfileId} = profileSlice.actions
export default profileSlice.reducer