import { createSlice } from "@reduxjs/toolkit";

const moviepageSlice= createSlice({
  name: "moviepage",
  initialState: {
    castList: null,
    videoList: null,
    movieInfo: null,
  },
  reducers:{
    addcastList: (state,action)=>{
        state.castList = action.payload;
    },
    addvideoList: (state,action)=>{
      state.videoList = action.payload;
  },
  addmovieInfo: (state,action)=>{
    state.movieInfo = action.payload;
},
  },
});

export const {addcastList, addvideoList, addmovieInfo} = moviepageSlice.actions;
export default moviepageSlice.reducer;