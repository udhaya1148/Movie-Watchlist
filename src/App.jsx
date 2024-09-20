import { useEffect, useState } from "react";
import Banner from "./component/Banner";
import Movies from "./component/Movies";
import Navbar from "./component/Navbar";
import Watchlist from "./component/Watchlist";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  let [watchListItems, setWatchList] = useState([])

  let handleAddtoWatchlist =(movieObj)=>{
    let newWatchList = [...watchListItems, movieObj]
    localStorage.setItem('moviesApp', JSON.stringify(newWatchList)) //store movies in local storage
    setWatchList(newWatchList)
    console.log(newWatchList)
  }

  
  let handleRemoveFromWatchList = (movieObj) => {
    let filteredWatchlist = watchListItems.filter((movie) => {
      return movie.id != movieObj.id
    } )
    setWatchList(filteredWatchlist)
    localStorage.setItem('moviesApp', JSON.stringify(filteredWatchlist))//delete local storage also
  }

  

  //get movies from localstorage ,display movies in watchlist without delete if i refresh webpage
   useEffect(()=>{
    let moviesFromLocalStorage = localStorage.getItem('moviesApp')
    if(!moviesFromLocalStorage){
      return
    }
    setWatchList(JSON.parse(moviesFromLocalStorage))
   },[])
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner /> <Movies watchListItems={watchListItems} handleAddtoWatchlist={handleAddtoWatchlist} handleRemoveFromWatchList={handleRemoveFromWatchList}/>
              </>
            }
          />
          <Route path="/watchlist" element={<Watchlist watchListItems={watchListItems} setWatchList={setWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

