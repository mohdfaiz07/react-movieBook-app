import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import style from "./MovieDetails.module.css";


const MovieDetails = () => {
  const { id } = useParams();
 const [movie, setmovie] = useState(null);
 

  const API_URL = `https://api.tvmaze.com/shows/${id}`;

  // API data fetch function
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setmovie(data);
    } catch (error) {
      console.log(error);
    }
  };
  // api function call using useEffect

  useEffect(() => {
    fetchData(API_URL);
  }, [id, setmovie]);

 

  return (
    <>
      {movie && movie.image && (
        <div className={style.movieDetailContainer}>
    
          <div className={style.detailsLeft}>
            <div className={style.detaileImg}>
              <img src={movie.image.original} alt="image" loading="lazy" />
            </div>
          </div>
          <div className={style.detailRight}>
            <div className={style.detailText}>
              <h1>{movie.name}</h1>
              <div className={style.detailLanguage}>
                <h6>{movie.language}</h6>
                <h6>
                  {movie.genres[0]} , {movie.genres[1]}
                </h6>
                <h6>{movie.network.country.name}</h6>
              </div>
              <div className={style.detailsummary}>
                <p>{movie.summary}</p>
              </div>
              <div className={style.rating}>
                <p>🧭{movie.premiered}</p>
                <p>{movie.rating.average}⭐</p>
              </div>
              <Link to = {`/booking/${movie.id}`} >
                 <button className={style.movieButton} >book ticket</button>
              </Link>
            </div>
          </div>


        </div>
      )}
    </>
  );
};

export default MovieDetails;
