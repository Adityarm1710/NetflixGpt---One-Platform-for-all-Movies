import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    moviesList: null,
    topratedmoviesList: null,
    nowplayingmoviesList: null,
    trailorVideoData: null,
    alltimefavmoviesList: null,
    discovermoviesList: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.moviesList = action.payload;
    },
    addtopratedmovies: (state, action) => {
      state.topratedmoviesList = action.payload;
    },
    addnowplayingmovies: (state, action) => {
      state.nowplayingmoviesList = action.payload;
    },
    addTrailorVideo: (state, action) => {
      state.trailorVideoData = action.payload;
    },
    addalltimefavmovies: (state, action) => {
      state.alltimefavmoviesList = action.payload;
    },
    adddiscovermovies: (state, action) => {
      state.discovermoviesList = action.payload;
    },
  },
});

export const {
  addMovies,
  addtopratedmovies,
  addnowplayingmovies,
  addTrailorVideo,
  addalltimefavmovies,
  adddiscovermovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
