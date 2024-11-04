import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Clothing from './pages/Clothing.jsx'
import NewArrivals from './pages/NewArrivals.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  [
    { path: '/', element: <App /> },
    { path: '/clothing', element: <Clothing /> },
    { path: '/new-arrivals', element: <NewArrivals /> }
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);