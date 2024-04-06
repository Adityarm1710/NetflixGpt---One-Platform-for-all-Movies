import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addmovieInfo } from "../utils/moviepageSlice";

const useMovieInfo = (id) => {
    const dispatch = useDispatch();

    const fetchMovie = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+id, options);
        const json = await data.json();
        dispatch(addmovieInfo(json));
    }

    useEffect(() => {
        fetchMovie();
    }, []);
}

export default useMovieInfo;