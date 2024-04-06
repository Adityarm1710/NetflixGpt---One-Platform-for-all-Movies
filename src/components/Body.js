import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MoviePage from "./MoviePage";

const Body= ()=>{

  const Approuter= createBrowserRouter([
    {
      path:"/",
      element: <Login/>
    },
    {
      path:"/Browse",
      element: <Browse/>
    },
    {
      path: "/moviePage/:movie_id",
      element: <MoviePage/>
    },
  ]);

  return (   
      <div>
        <RouterProvider router={Approuter}/>
      </div>
  );
};



export default Body;