import useCast from "../Hooks/Usecast";
import Usegettrailorvideo from "../Hooks/Usegettrailorvideo";
import { useSelector } from "react-redux";
import useVideo from "../Hooks/Usemovievideos";
import Loader from "./Loader";

const VideoBG = ({ movie_id }) => {
  const Trailor_id = useSelector((store) => store.movie?.trailorVideoData);

  Usegettrailorvideo(movie_id);
  
  
  
  return (
    <div className="bg-black">
      <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          Trailor_id?.key +
          "?&autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist="+Trailor_id?.key
        }
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoBG;
