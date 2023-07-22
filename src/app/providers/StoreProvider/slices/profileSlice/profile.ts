import { createSlice } from "@reduxjs/toolkit";




export interface Profile {
    id: string
    username: string
    userId: string
    avatarURL: string
    email: string
}

const initialState: Profile = {
    id: "1",
    username: "Mock name",
    userId: "oxofklkspf1o123po",
    avatarURL: "url",
    email: "mockemail@gmail.com"
}


const profile = createSlice({
    name: "profile",
    initialState,
    reducers: {
        login: () => {

        },
        logout: () => {

        }
    }
})


export const { login, logout } = profile.actions

export const profileSelector = (state: {profile: Profile}) => state.profile

export default profile.reducer