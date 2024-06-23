import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RandomColor from './components/RandomColor.jsx'
import ImageSlider from './components/ImageSlider.jsx'

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
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>,
)
