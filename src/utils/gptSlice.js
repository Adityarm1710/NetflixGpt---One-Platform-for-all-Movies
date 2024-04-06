import { createSlice } from "@reduxjs/toolkit";

const gptSlice= createSlice({
  name: "gpt",
  initialState:{
    viewStatus: false,
    inputmovieList: null,
    movieStatus: false,
  },
  reducers:{
    toggleviewStatus: (state)=>{
       state.viewStatus= !state.viewStatus;
    },
    setmovieStatus: (state,action)=>{
      state.movieStatus = action.payload;
    },
    setinputmovieList: (state,action)=>{
      state.inputmovieList = action.payload;
    },
  },
});

export const {toggleviewStatus,setmovieStatus,setinputmovieList} = gptSlice.actions;
export default gptSlice.reducer;