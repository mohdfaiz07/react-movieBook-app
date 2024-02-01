import React from "react";
import style from "./MovieList.module.css";
import { Link } from "react-router-dom";

const MovieList = (props) => {
      const {show} = props.data;
      const imageUrl = show.image && show.image.medium;

  return (
        <Link to = {`/movie/${show.id}`} style={{textDecoration: "none", color: 'inherit'}}  >
      <div className={style.card}> 
        <div className={style.cardImg}> 
          <img src={imageUrl} alt="image" />
        </div>
        <div className={style.cardText}> 
          <div className={style.movieName}> 
            <h3>{show.name}</h3>
            <h6>{show.rating.average}⭐</h6>
          </div>
          <div className={style.movieBtn}> 
            <h5> {show.genres[0]},{show.genres[1]} </h5>
            <button>Book now</button>
          </div>
        </div>
      </div>
        </Link>
    
  );
};

export default MovieList;
