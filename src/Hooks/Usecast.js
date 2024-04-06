import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addcastList } from "../utils/moviepageSlice";


const useCast = (id) => {
    const dispatch = useDispatch();

    const fetchCast = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+id+"/credits", options);
        const json = await data.json();
        dispatch(addcastList(json.cast));
    }

    useEffect(() => {
        fetchCast();
    },[id])
}

export default useCast;