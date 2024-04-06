import { useDispatch, useSelector } from "react-redux";
import { langConfig } from "../utils/langConfig";
import { useRef, useState } from "react";
import { options } from "../utils/constants";
import { setinputmovieList } from "../utils/gptSlice";

const SearchBargpt = () => {
  
  const selectedLanguage = useSelector((store) => store.lang.selectedLanguage);
  const dispatch = useDispatch();
  const [inputValue, setinputValue] = useState("");

  const fetchInputMovie = async (movie_name) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie_name +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const json = await data.json();
    dispatch(setinputmovieList(json.results));
  };

  return (
    <div className="absolute z-10 py-[10%] w-[65%] ml-40">
      <form
        className="bg-black  grid grid-cols-12 p-4 m-2 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          onChange={(e)=>setinputValue(e.target.value)}
          className="py-3 p-2 col-span-9  rounded-md font-bold text-lg"
          input="text"
          placeholder={langConfig[selectedLanguage].placeholderValue}
        ></input>
        <button
          onClick={() => fetchInputMovie(inputValue)}
          className="py-3 ml-4 col-span-3 bg-red-800 text-white font-bold rounded-md text-lg hover:bg-opacity-80"
        >
          {langConfig[selectedLanguage].buttonValue}
        </button>
      </form>
    </div>
  );
};

export default SearchBargpt;
