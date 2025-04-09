// src/store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: JSON.parse(localStorage.getItem('currentUser')) || null,
    error: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload;
            state.error = null;
            localStorage.setItem('currentUser', JSON.stringify(action.payload));
        },
        loginFailure: (state, action) => {
            state.error = action.payload;
        },
        logout: (state) => {
            state.user = null;
            localStorage.removeItem('currentUser');
        }
    }
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;