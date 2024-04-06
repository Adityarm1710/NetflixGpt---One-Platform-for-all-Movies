import Usegetnowplayingmovies from "../Hooks/Usegetnowplayingmovies";
import Usegetpopularmovies from "../Hooks/Usegetpopularmovies";
import Usegettopratedmovies from "../Hooks/Usegettopratedmovies";
import Header from "./Header";
import Mainvideopart from "./Mainvideopart";
import Secondaryvideopart from "./secondaryvideopart";
import { useSelector } from "react-redux";
import GptBrowse from "./GptBrowse";
import Usegetdiscovermovies from "../Hooks/Usegetdiscovermovies";
import Usegetalltimefavmovies from "../Hooks/Usegetalltimefavmovies";

const Browse = () => {
  Usegetpopularmovies();
  Usegettopratedmovies();
  Usegetnowplayingmovies();
  Usegetdiscovermovies();
  Usegetalltimefavmovies();

  const viewStatus = useSelector((store) => store.gpt.viewStatus);

  return (
    <div>
      <Header />
      { viewStatus ? (
        <GptBrowse />
      ) : (
        <>
          <Mainvideopart />
          <Secondaryvideopart />
        </>
      )}
    </div>
  );
};

export default Browse;
