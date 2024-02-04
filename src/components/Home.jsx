import React, { useContext } from "react";
import MovieList from "./movieList/MovieList";
import { moviesContext } from "../context/ContextStore";
import Loading from "./loading/Loading";

//Api url

const Home = () => {
  const { moviesData, searchVal } = useContext(moviesContext);
  
  const filterData = moviesData && moviesData.filter( (movie)=>{
   return movie.show.name.toLowerCase().includes(searchVal.toLowerCase())

  } )
  console.log(filterData)



  return (
    <>
      <ul className="card-container">
        {filterData.length > 0 ?
          filterData.map((item) => {
            return (
              <li key={item.show.id}>
                <MovieList data={item} />
              </li>
            );
          })
        : <Loading/>
        }
      </ul>
    </>
  );
};

export default Home;
