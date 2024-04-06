import { Link } from "react-router-dom";

const VideoTL = ({ title, overview, movie_id }) => {
  return (
    <div className=" absolute pt-[15%] px-20 w-screen aspect-video text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-4xl">{title}</h1>
      <div className="text-xs my-5 text-left w-1/4">{overview}</div>
      <div className="flex w-2/4">
        <Link to={"/moviePage/" + movie_id}>
          <button className="px-14 p-2  bg-white text-black hover:bg-opacity-80 text-sm rounded-md">
            <span className="text-black">▶</span> Play
          </button>
        </Link>
        <button className="px-16 p-2  bg-gray-600 text-white bg-opacity-50 text-sm ml-1 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTL;
