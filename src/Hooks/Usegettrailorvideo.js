import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailorVideo } from "../utils/moviesSlice";

const Usegettrailorvideo = (movie_id) => {

  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movie_id + "/videos",
      options
    );
    const json = await data.json();
    const filteredData = json.results.filter(
      (videoData) => videoData.type === "Trailer"
    );
    const Trailor = filteredData.length ? filteredData[0] : json.results[0];
    console.log(Trailor);
    dispatch(addTrailorVideo(Trailor));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default Usegettrailorvideo;
