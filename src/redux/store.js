import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

export const store = configureStore({
    reducer:{
        //reducers shoud key-value pair
        counter:counterSlice
    }
})