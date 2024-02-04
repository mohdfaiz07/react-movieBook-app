import React, { createContext, useEffect, useState } from "react";

export const moviesContext = createContext();

const ContextStore = ({ children }) => {
   const [moviesData, setmoviesData] = useState([])
   const [searchVal,setSearchVal] = useState('')

    //Api url
    const API_URL = "https://api.tvmaze.com/search/shows?q=all";;
   
    // fetching Api fucntion
    const fetchingMoviesData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setmoviesData(data)
      console.log(data)
    } 
    catch (error) {
      console.log(error);
    }};

   // call api fetching function using useEffect; 
  useEffect(() => {
    fetchingMoviesData(API_URL);
  }, []);

  return (
    <>
      <moviesContext.Provider value={{moviesData, setmoviesData, searchVal,setSearchVal}}>
        {children}
    </moviesContext.Provider>
    </>
  );
};

export default ContextStore;
