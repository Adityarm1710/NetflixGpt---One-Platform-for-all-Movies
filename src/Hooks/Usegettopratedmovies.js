import { useDispatch } from "react-redux";
import { addtopratedmovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";

const Usegettopratedmovies = () => {
  const dispatch = useDispatch();

  const gettopratedmovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    );
    const json = await data.json();
    dispatch(addtopratedmovies(json.results));
  };

  useEffect(() => {
    gettopratedmovies();
  }, []);
};

export default Usegettopratedmovies;
