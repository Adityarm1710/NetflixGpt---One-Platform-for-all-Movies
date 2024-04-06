import React from "react";
import useCast from "../Hooks/Usecast";
import { useSelector } from "react-redux";
import CastCard from "./CastCard";

const MovieCast = ({ id }) => {
  useCast(id);

  const castInfo = useSelector((store) => store.moviepage.castList);
  if (!castInfo) return null;

  const castsLength = castInfo.length;

  return (
    <div>
      <div className="pl-4 z-10 ">
        <h1 className=" m-2 mb-5 text-3xl text-white font-bold">Movie Cast</h1>
        {castsLength > 8 ? (
          <div className="flex overflow-x-scroll">
            <div className="flex">
              {castInfo.map((cast) => (
                <CastCard
                  profile_path={cast.profile_path}
                  character={cast.character}
                  name={cast.name}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex overflow-hidden">
            <div className="flex">
              {castInfo.map((cast) => (
                <CastCard
                  profile_path={cast.profile_path}
                  character={cast.character}
                  name={cast.name}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCast;
