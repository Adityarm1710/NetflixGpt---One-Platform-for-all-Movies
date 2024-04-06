import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import langReducer from "./langSlice";
import moviepageReducer from "./moviepageSlice"

const reducer = {
  user: userReducer,
  movie: moviesReducer,
  gpt: gptReducer,
  lang: langReducer,
  moviepage : moviepageReducer,
};

const appStore =  configureStore({
  reducer: reducer,
});

export default appStore;