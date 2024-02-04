import React from 'react';


const BookingForm = () => {
 

  const handleConfirmBooking = () => {
    const movieData = {
      id: 42181,
      name: 'All Rise',
      premiered: '2019-09-23',
      language: 'English',
      genres: ['Drama', 'Legal'],
      imageUrl:
        'https://static.tvmaze.com/uploads/images/original_untouched/413/1034988.jpg',
    };

 
  };

  return (
    <div className='bookingForm-container'>
    <div>
      <div>
        <img
          src="https://static.tvmaze.com/uploads/images/original_untouched/413/1034988.jpg"
          alt="Movie Poster"
          style={{ width: '200px', height: '300px' }}
          />
      </div>
      <div>
        <h2>All Rise</h2>
        <p>
          <b>Language:</b> English
        </p>
        <p>
          <b>Genres:</b> Drama, Legal
        </p>
        <p>
          <b>Premiered:</b> 2019-09-23
        </p>
      </div>
      <div>
        <button className='bookingForm-button'>Confirm Booking</button>
      </div>
    </div>
          </div>
  );
};

export default BookingForm;
