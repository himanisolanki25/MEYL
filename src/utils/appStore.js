import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

// We will add slices inside it later
const appStore = configureStore({
    // App's big reducer and it consists of small reducers of different slices.
    reducer: {
        cart:cartReducer,
        // user:userReducer
    }
});

export default appStore;