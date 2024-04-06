import { options } from "../utils/constants";
import { useDebugValue, useEffect } from "react";
import { addalltimefavmovies } from "../utils/moviesSlice";
import { UseDispatch, useDispatch } from "react-redux";

const Usegetalltimefavmovies = () => {

  const dispatch= useDispatch();

  const getalltimefavmovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&page=1&region=IN&sort_by=vote_count.desc&with_origin_country=IN&with_original_language=hi",
      options
    );
    const json = await data.json();
    dispatch(addalltimefavmovies(json.results));
  };

  useEffect(() => {
    getalltimefavmovies();
  }, []);
};

export default Usegetalltimefavmovies;
