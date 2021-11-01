import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import homeSlice from "./home-slice";
import landingSlice from "./landing-slice";


const store = configureStore(
    {
        reducer: {auth: authSlice.reducer, landing: landingSlice.reducer, home: homeSlice.reducer}
    }
)

export default store;