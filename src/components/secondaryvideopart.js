import Movieslist from "./Movieslist";
import { useSelector } from "react-redux";

const Secondaryvideopart = () => {
  const list = useSelector((store) => store.movie);
  
  return (
    <div className="bg-black w-full">
      <div className="-mt-80 relative z-20 w-full">
        <Movieslist
          title={"Popular"}
          movies={list.moviesList}
        />
        <Movieslist
          title={"Top Rated"}
          movies={list.topratedmoviesList}
        />
        <Movieslist
          title={"Now Playing"}
          movies={list.nowplayingmoviesList}
        />
        <Movieslist
          title={"All Time Favourite"}
          movies={list.alltimefavmoviesList}
        />
        <Movieslist
          title={"Discover"}
          movies={list.discovermoviesList}
        />
      </div>
    </div>
  );
};

export default Secondaryvideopart;
