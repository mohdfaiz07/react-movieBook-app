import React, { useContext} from 'react'
import { moviesContext } from '../../context/ContextStore';
import style from './Dashboard.module.css'

const Dashboard = () => {
    const  {bookingList} = useContext(moviesContext);

  return (
    <div className={style.dashboardContainer}>
      {bookingList.length >0 ?

      <div className={style.tableContainer}>
      <table className={style.movieTable}>
      <thead>
        <tr>
          <th>Sl No.</th>
          <th>Movie Name</th>
          <th>Movie Language</th>
          <th>Rating</th>
          <th>Movie Genres</th>
          <th>Action</th>
        </tr>
        
      </thead>
      <tbody>
        {bookingList.map(movie => (
          <tr key={movie.show.id}>
            <td>{movie.show.id}</td>
            <td>{movie.show.name}</td>
            <td>{movie.show.language}</td>
            <td>{movie.show.rating.average}</td>
             <td>{movie.show.genres[0]},{movie.show.genres[1]}</td> 
            <td><button>Booked</button></td>
          </tr>
        ))}
      </tbody>
      
    </table>
    </div>
    : <div className={style.nobooking}>
      <p>no data available......</p>
    </div>


        }
    </div>


  )
}

export default Dashboard