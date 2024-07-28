// 4
import {configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movies/movieSlice"
// import movieSlice from "./movies/movieSlice"; aa ny krvanu import from movieslice


export const store =configureStore({
    reducer:{
        movies:movieReducer
    },
})


