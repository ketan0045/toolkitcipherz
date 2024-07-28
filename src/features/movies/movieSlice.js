import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../common/apis/MovieApi";
import { APIkey } from "../../common/apis/MovieApiKey";
import { addmovies } from "../../features/movies/movieSlice";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  // ("movies/fetchAsyncMovies" here initialState MOVIESLICE NAME  and function for identify)
  async () => {
    const movieText = "harry";

    const response = await MovieApi.get(
      `?apikey=${APIkey}&s=${movieText}&type=movie`
    );
      
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  // "movies/fetchAsyncShows",kasdach aanbhi
  async () => {
    const seriesText = "Friends";
    const response = await MovieApi.get(
      `?apikey=${APIkey}&s=${seriesText}&type=series`
    );
    return response.data;
  }
  
);



export const fetchAsyncMovieOrShowsDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShows",
  async (id) => {
    const response = await MovieApi.get(
      `?apikey=${APIkey}&i=${id}&Plot=full`
    );
    return response.data;
  }
);

const initialState = {
  //   moviesx: {},
  movies: {},
  shows: {},
  selectMovieOrShow: {},
};

const movieSlice = createSlice({
  //   name: "movieszz",
  name: "movies ",
  initialState,
  reducers: {

    // this not use because upar fetchAsyncMovies this nichenu
    // (:: addmovies is action)
    addmovies: (state, { payload }) => {
      //   console.log(payload, "lllll");
      state.movies = payload;
      //   state.moviesx = payload;
    },
    // this not use because upar fetchAsyncMovies this upar ^^

    removeSelectedMovieOrShow: (state) => {
      state.selectMovieOrShow = {};
    },
  },

  // if action is supposed to be handle by one reducer ,use reducer.
  // if action is supposed to be handle by multiple reducer ,use extrareducers.

  // 1 extraReducers working find but may be  

  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("sucessfully !");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected !");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("sucessfully !");
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieOrShowsDetail.fulfilled]: (state, { payload }) => {
      console.log("sucessfully !");
      console.log(payload,"jjjkk");
      return { ...state, selectMovieOrShow: payload };
    },
  },
  // 2 extraReducers working find .addcase compulsary

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchAsyncMovies.pending, () => {
  //       console.log("pending");
  //     })
  //     .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
  //       console.log("sucessfully !");
  //       return { ...state, movies:payload };
  //     })
  //     .addCase(fetchAsyncMovies.rejected, () => {
  //       console.log("rejected !");
  //     });
  // },

  // 3 extraReducers working find but buider.addcase compulsary

  // extraReducers: (builder) => {
  //   builder.addCase(fetchAsyncMovies.pending, () => {
  //     console.log("pending");
  //   });
  //   builder.addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
  //     console.log("sucessfully !");
  //     return { ...state, movies: payload };
  //   });
  //   builder.addCase(fetchAsyncMovies.rejected, () => {
  //     console.log("rejected !");
  //   });
  // },
});

// export const { addmovies } = movieSlice.actions; aa nthi use thatu aa fetchAsyncMovies pchi
export const {  removeSelectedMovieOrShow} = movieSlice.actions; 
export const getAllmovies = (state) => state.movies.movies;
// export const getAllmovies =(state)=>state.movieszz(name of reducer).moviesx(property of state final state)
export const getAllshows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;


