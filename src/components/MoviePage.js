import MovieCast from "./MovieCast";
import MovieVideosComp from "./MovieVideosComp";
import MovieInfoComp from "./MovieInfoComp";
import { useParams } from "react-router-dom";
import Header from "./Header";

const MoviePage = () => {
  const { movie_id } = useParams();

  return (
    <div className="bg-black">
      {/* <Header/> */}
      <MovieInfoComp id={movie_id} />
      <MovieCast id={movie_id} />
      <MovieVideosComp id={movie_id} />
      
    </div>
  );
};

export default MoviePage;
