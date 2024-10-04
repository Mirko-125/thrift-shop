import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Category from './pages/Category.jsx'
import New_Arrivals from './pages/New_Arrivals.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  [
    { path: '/', element: <App /> },
    { path: '/category', element: <Category /> },
    { path: '/new-arrivals', element: <New_Arrivals /> }
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);