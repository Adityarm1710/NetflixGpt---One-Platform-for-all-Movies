import { useDispatch, useSelector } from "react-redux";
import Movieslist from "./Movieslist";
import { setmovieStatus } from "../utils/gptSlice";
import { useDebugValue } from "react";

const SearchSuggestion= ()=>{
 
  const movieStatus = useSelector((store)=> store.gpt.movieStatus);
  const dispatch= useDispatch();
  const inputMovies = useSelector((store)=>store.gpt.inputmovieList);
  if(!inputMovies) {return null;}
  if(inputMovies.length === 0) dispatch(setmovieStatus(false));
  else dispatch(setmovieStatus(true));

  return(
   movieStatus && (<div className=" w-full py-[21%] fixed bg-black bg-opacity-70">
      <Movieslist title={"Search Results"} movies={inputMovies}/>
    </div>)
  );
};

export default SearchSuggestion;