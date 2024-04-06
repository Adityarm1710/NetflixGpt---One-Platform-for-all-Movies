import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addvideoList } from "../utils/moviepageSlice";


const useVideo = (id) => {
    const dispatch = useDispatch();

    const getVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos", options);
        const json = await data.json();
        dispatch(addvideoList(json.results));
    }

    useEffect(() => {
        getVideos();
    }, [id])
}

export default useVideo;