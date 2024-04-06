import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: "lang",
  initialState:{
    selectedLanguage: "En-us",
  },
  reducers:{
    setselectedLangauge: (state,action)=>{
      state.selectedLanguage = action.payload; 
    }
  },
});

export const {setselectedLangauge} = langSlice.actions;
export default langSlice.reducer;