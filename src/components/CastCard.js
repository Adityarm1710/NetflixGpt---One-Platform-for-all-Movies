const CastCard = ({profile_path, character, name})=>{
  if(!profile_path) return null;
  return (
    <div className="w-48 pr-2 mt-2">
      <img className="  w-full h-[80%]" alt="Cast Card" src={"https://image.tmdb.org/t/p/w200"+ profile_path}/>
      <div className="bg-gray-500 p-2 h-[20%]">
        <p className="text-white font-semibold xl:text-base text-xs text-center">{name}</p>
        <p className="text-gray-300 font-light xl:text-sm md:text-xs sm:text-xs text-[10px] lg:text-sm text-center">{character}</p>
      </div>
    </div>
  );
};

export default CastCard;