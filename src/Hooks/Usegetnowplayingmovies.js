import { useDispatch } from "react-redux";
import { addnowplayingmovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";

const Usegetnowplayingmovies= ()=>{
   
  const dispatch = useDispatch();

   const GetNowPlaying = async () =>{
      const data= await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",options);
      const json= await data.json();
      dispatch(addnowplayingmovies(json.results));
   };
   useEffect(()=>{
       GetNowPlaying();
   },[]);

};

export default Usegetnowplayingmovies;