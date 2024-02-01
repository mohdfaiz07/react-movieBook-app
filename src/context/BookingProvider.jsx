import React, { createContext, useContext, useState } from 'react';

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {

  const [formData, setFormData] = useState([]);

  const addBooking = (bookingData) => {
    setFormData([...formData, bookingData]);
  };

  return (
    <BookingContext.Provider value={{ formData, addBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

