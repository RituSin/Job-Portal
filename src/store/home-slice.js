import { createSlice } from "@reduxjs/toolkit";

const initialState = {home: true, postjob: false, viewApplicant: false};

const homeSlice = createSlice(
    {
        name: "home",
        initialState,
        reducers: {
            home(state)
            {
                state.postjob = false;
                state.viewApplicant = false;
                state.home = true;
            },
            postjob(state)
            {
                state.postjob = true;
                state.viewApplicant = false;
                state.home = false;
            },
            viewApplicant(state)
            {
                state.postjob = false;
                state.viewApplicant = true;
                state.home = false;
            }
        }

    }
);

export const homeAction = homeSlice.actions;

export default homeSlice;