const Moviescard = ({Image_path})=>{
  if(!Image_path) return null;
  return(
    <div className="w-48 p-2 transition-transform duration-200 hover:translate-y-2 translate-x-2">
      <img alt="Movies Card" src={"https://image.tmdb.org/t/p/w200"+ Image_path}/>
    </div>
  );
};

export default Moviescard;