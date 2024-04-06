import { useEffect } from "react";
import {options} from "../utils/constants";
import { adddiscovermovies } from "../utils/moviesSlice";
import { UseDispatch, useDispatch } from "react-redux";

const Usegetdiscovermovies = () => {
   
  const dispatch= useDispatch();
  
  const getdiscovermovies = async () =>{
       const data= await fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=hi&page=1&region=IN&sort_by=popularity.desc&with_origin_country=IN" ,options);
       const json = await data.json();
       dispatch(adddiscovermovies(json.results));
  };

  useEffect(()=>{
    getdiscovermovies();
  },[]);
  
};

export default Usegetdiscovermovies;