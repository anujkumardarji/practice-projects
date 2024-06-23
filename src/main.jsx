import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RandomColor from './components/RandomColor.jsx'
import ImageSlider from './components/ImageSlider.jsx'
import LoadMoreButton from './components/LoadMoreButton/LoadMoreButton.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>
  },
  {
    path : "/random-color",
    element: <RandomColor/>
  },
  {
    path : "/image-slider",
    element : <ImageSlider/>
  },
  {
    path : "/load-more",
    element : <LoadMoreButton/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>,
)
