import React, { useEffect, useState } from "react";
import MovieList from "./movieList/MovieList";

//Api url

const Home = () => {
  const [moviesData, setmoviesData] = useState([]);

  const API_URL = "https://api.tvmaze.com/search/shows?q=all";

  // API data fetch function
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setmoviesData(data);
    } catch (error) {
      console.log(error);
    }
  };
  // api function call using useEffect

  useEffect(() => {
    fetchData(API_URL);
  }, []);

  return (
    <>
      <ul className="card-container">
        {moviesData &&
          moviesData.map((item) => {
            return (
              <li key={item.show.id}>
                <MovieList data={item} />
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Home;
