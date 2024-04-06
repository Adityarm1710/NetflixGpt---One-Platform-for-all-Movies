import VideoBG from "./VideoBG";
import VideoTL from "./VideoTL";
import { useSelector } from "react-redux";

const Mainvideopart = () => {

  const moviesList = useSelector((store)=> store.movie.moviesList);
  if (!moviesList) return;

  const displayMovie = moviesList[0];
  
  const {original_title, overview, id} = displayMovie;

  return(
    <div>
       <VideoTL title={original_title} overview={overview} movie_id={id}/>
       <VideoBG movie_id={id}/> 
    </div>
  );
};

export default Mainvideopart;