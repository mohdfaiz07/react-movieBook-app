import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import MovieDetails from './components/movieDetails.jsx/MovieDetails.jsx'
import Home from './components/Home.jsx'
import BookingForm from './components/form/BookingForm.jsx'
import { BookingProvider } from './context/BookingProvider.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },

      {
        path: '/movie/:id',
        element: <MovieDetails/>
      },
      
      {
        path: '/booking/:id',
        element: <BookingForm/>
      }
    ]
  }


])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BookingProvider >
    <RouterProvider router={router}>
    </RouterProvider>
    </BookingProvider>
  </React.StrictMode>,
)
