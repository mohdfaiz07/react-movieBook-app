import React
, { useContext,
useState } from 'react';
import style from './BookingForm.module.css'
import { moviesContext } from '../../context/ContextStore';
import { useNavigate, useParams } from 'react-router-dom';

const BookingForm = () => {
 const { id } =  useParams()  
const  {setBookingList, moviesData} = useContext(moviesContext)
   
   
  const filterData = moviesData.find( (item)=>  id == item.show.id )    
  
  const submitHandler = (e)=>{
      e.preventDefault();
      setBookingList( (prev)=> [ ...prev, filterData]);
      console.log('clicked')

    }


  return (
     
    <div className={style.bookingFormContainer}>
    <div className={style.bookingFormLeftSide}>
      <div className={style.bookingFormImg} >
        <img         src={filterData.show.image.original}
          alt="Movie Poster"
          style={{ width: '200px', height: '300px' }}
          />
      </div>
     </div>

<div className={style.bookingFormRightSide}>
<form className={style.bookingForm} onSubmit={submitHandler}>
      <div className={style.inputDiv}>
        <label htmlFor="movieName">Movie Name:-</label>
        <input 
          type="text"
          id="movieName"
          value={filterData.show.name}
          className={style.movieNameInput}
          readOnly
        />
      </div>

      <div className={style.inputDiv}>
        <label htmlFor="movieLanguage">Movie Language:-</label>
        <input
          type="text"
          id="movieLanguage"
          value={filterData.show.language}
          className={style.movieLanguageInput}
          readOnly
        />
      </div>

      <div className={style.inputDiv}>
        <label htmlFor="movieCountry">Movie Country:-</label>
        <input
          type="text"
          id="movieCountry"
          value={filterData.show.network.country.name}
          className={style.movieCountryInput}
          readOnly
        />
      </div>
      <div className={style.inputDiv}>
        <label htmlFor="date"> Date :-</label>
        <input type="date" id='date'  />
      </div>


      <div className={style.qtyDiv} >
        <label htmlFor="qty"> Quantity :-</label>
        <select >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      

      <input type="submit" value='confirm booking' className= {style.formButton}/>
    </form>
   

</div>



    </div>

  
         
  );
};

export default BookingForm;
