import React, { useContext, useEffect, useState } from "react";
import MovieList from "./movieList/MovieList";
import { moviesContext } from "../context/ContextStore";
import Loading from "./loading/Loading";
import Error from "./error/Error";

//Api url

const Home = () => {
  const { moviesData, searchVal, fetchdata, error } = useContext(moviesContext);
  const [debounceSearchVal, setDebounceSearchVal] = useState("");

  // moviesData contains all movies data of api.
  // searchVal contains search input value.
  // fetchdata contains true, false shows fetching completed or not.
    console.log(moviesData)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceSearchVal(searchVal);
      
    }, 1000);

    return () => {
      clearTimeout(timeout);
   
    };
  }, [searchVal]);

  const filterData =
    moviesData &&
    moviesData.filter((movie) => {
      return movie.show.name
        .toLowerCase()
        .includes(debounceSearchVal.toLowerCase());
    });
  return (
    <>
      <ul className="card-container">
        {fetchdata ? (
          <Loading />
        ) : error ? (
          <Error />
        ) : filterData.length > 0 ? (
          filterData.map((item) => {
            return (
              <li key={item.show.id}>
                <MovieList data={item} />
              </li>
            );
          })
        ) : (
          <h4> no result found.</h4>
        )}
      </ul>
    </>
  );
};

export default Home;
