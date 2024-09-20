function MovieCard({
  movieObj,
  poster_path,
  name,
  handleAddtoWatchlist,
  handleRemoveFromWatchList,
  watchListItems , // Changed this to match what is passed from Movies.jsx
}) {
  function doesContain(movieObj) {
    // Check if watchListItems is undefined or null, fallback to an empty array
    if (!watchListItems) return false;
    
    for (let i = 0; i < watchListItems.length; i++) {
      if (watchListItems[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="h-[40vh] w-[150px] bg-cover bg-center rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-center m-4 relative"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => handleRemoveFromWatchList(movieObj)}
          className="absolute top-1 right-2 text-xl rounded-lg bg-black"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddtoWatchlist(movieObj)}
          className="absolute top-1 right-2 text-xl rounded-lg bg-black"
        >
          &#128525;
        </div>
      )}

      <div className="absolute bottom-0 text-white text-lg text-center w-full bg-gray-900/60 p-1">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
