import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "Sourov",
        email: "sourov@gmail.com",
    },
    reducers: {
        update: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
        remove: () => ({}),
        addHello: (state, action) => {
          state.name = ` hi ${action.payload.name}`
        },
    },
})

export const {update, remove, addHello} = userSlice.actions
export default userSlice.reducer