import { createSlice } from "@reduxjs/toolkit";

const initialState = {login: true, signup: false, forgotPassword: false, resetPassword: false};

const landingSlice = createSlice(
    {
        name: "landing",
        initialState,
        reducers: {
            login(state)
            {
                state.signup = false;
                state.forgotPassword = false;
                state.resetPassword = false;
                state.login = true;
            },
            signup(state)
            {
                state.login = false;
                state.forgotPassword = false;
                state.resetPassword = false;
                state.signup = true;
            },
            forgotPassword(state)
            {
                state.login = false;
                state.resetPassword = false;
                state.signup = false;
                state.forgotPassword = true;
            },
            resetPassword(state)
            {
                state.login = false;
                state.signup = false;
                state.forgotPassword = false;
                state.resetPassword = true;
            }
        }

    }
);

export const landingAction = landingSlice.actions;

export default landingSlice;