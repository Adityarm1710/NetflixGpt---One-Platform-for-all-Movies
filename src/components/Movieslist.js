import Moviescard from "./Moviescard";
import { Link } from "react-router-dom";

const Movieslist = ({ title, movies }) => {
  if (!movies) return;

  return (
    <div className="pl-4 z-10 w-full">
      <h1 className=" m-2 mb-4 text-4xl text-white font-bold">{title}</h1>
      <div className="flex overflow-x-scroll scrollbarwidht">
        <div className="flex">
          {movies.map((movie) => (
            <Link to={"/moviePage/"+ movie.id}>
              <Moviescard Image_path={movie.poster_path} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movieslist;
