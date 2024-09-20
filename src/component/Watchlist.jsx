import { useEffect, useState } from "react";

import genreids from '../Utility/gener.js'

function Watchlist({ watchListItems, setWatchList, handleRemoveFromWatchList}) {
  const [search, setSearch] = useState("");

  const [genreList, setGenreList] = useState(['All Genres'])
  const [currGenre , setCurrGenre] = useState("All Genres")

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let handleFilter =(genre)=>{
    setCurrGenre(genre)
  }
  let sortIncreasing = () =>{
    let sortedIncreasing = watchListItems.sort((movieA, movieB)=>{
      return movieA.vote_average - movieB.vote_average
    })
    setWatchList([...sortedIncreasing])
  }

  let sortDecreasing = () =>{
    let sortedDecreasing = watchListItems.sort((movieA, movieB)=>{
      return movieB.vote_average - movieA.vote_average
    })
    setWatchList([...sortedDecreasing])
  }

  useEffect(()=>{
    let temp = watchListItems.map((movieObj)=>{
      return genreids[movieObj.genre_ids[0]]
    })
    temp = new Set(temp)
    setGenreList(['All Genres' , ...temp])
    console.log(temp)
  }, [watchListItems])

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genreList.map((genre)=>{
          return <div onClick={()=>handleFilter(genre)} className={currGenre == genre? "flex justify-center items-center h-[3rem] w-[9rem] bg-blue-500 rounded-xl text-white font-bold mx-4 " : "flex justify-center items-center h-[3rem] w-[9rem] bg-gray-500 rounded-xl text-white font-bold mx-4" }>
          {genre}
        </div>
        })}
         
        
        {/* <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-gray-500 rounded-xl text-white font-bold">
          Action
        </div> */}
      </div>

      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search Movies"
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4"
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th>Relesase-Date</th>
              <th className="flex justify-center">
                <div onClick={sortIncreasing} className="p-2"><i className="fa-solid fa-arrow-up"></i></div>
                <div className="p-2">Ratings</div>
                <div onClick={sortDecreasing} className="p-2"><i className="fa-solid fa-arrow-down"></i></div>
              </th>

              <th>Popularity</th>
              <th>Geners</th>
            </tr>
          </thead>
          <tbody>
            {watchListItems.filter((movieObj)=>{
              if(currGenre == 'All Genres'){
                return true
              }
              else{
                return genreids[movieObj.genre_ids[0]]==currGenre;
              }
            })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b-2">
                    <td className="flex item-center px-6 py-4">
                      <img
                        className="h-[9rem] w-[9rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                      />
                      <div className="mx-10 content-center ">
                        {movieObj.title}
                      </div>
                    </td>
                    <td>{movieObj.release_date}</td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>

                    <td onClick={()=>handleRemoveFromWatchList(movieObj)} className="text-red-900">Delete</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
