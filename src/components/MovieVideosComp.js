import useVideo from "../Hooks/Usemovievideos";
import { useSelector } from "react-redux";

const MovieVideosComp = ({ id }) => {
  useVideo(id);

  const movieVideos = useSelector((store) => store.moviepage.videoList);
  if (!movieVideos) return null;

  const movievideosLength = movieVideos.length;

  return (
    <div>
      { movievideosLength !== 0 ? <div className="pl-4 z-10 mt-10 mb-1">
        <h1 className=" mb-5 text-3xl text-white font-bold">Movie Videos</h1>
        <div className="flex overflow-x-scroll">
          <div className="flex">
            {movieVideos.map((video) => (
              <div className="mr-3">
                <iframe
                  width="560"
                  height="350"
                  src={
                    "https://www.youtube-nocookie.com/embed/" +
                    video.key +
                    "?si=k2o1NqB0_Ba4tT2Q"
                  }
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div> : null}
      
    </div>
  );
};

export default MovieVideosComp;
