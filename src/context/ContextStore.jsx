  import React, { createContext, useEffect, useState } from "react";

  export const moviesContext = createContext();

  const ContextStore = ({ children }) => {
    const [moviesData, setmoviesData] = useState([])
    const [searchVal,setSearchVal] = useState('')
    const [fetchdata, setFetchdata] = useState(true)
    const [error , setError] = useState(null)
    const [bookingList, setBookingList] = useState([])

      //Api url
      const API_URL = "https://api.tvmaze.com/search/shows?q=all";;
    
      // fetching Api fucntion
      const fetchingMoviesData = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setmoviesData(data)
        setError(null)
        
       
      } 
      catch (error) {
        setError(error.message || 'please try after sometime')
        console.log(error);
      }
      finally{
        setFetchdata(false);
      }
    };

    // call api fetching function using useEffect; 
    useEffect(() => {
      fetchingMoviesData(API_URL);
    }, []);

    return (
      <>
        <moviesContext.Provider value={{moviesData, setmoviesData,
           searchVal, setSearchVal, fetchdata, error,bookingList, setBookingList}}>
          {children}
      </moviesContext.Provider>
      </>
    );
  };

  export default ContextStore;
