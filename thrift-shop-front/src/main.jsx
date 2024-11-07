import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import NewArrivals from './pages/NewArrivals.jsx'
import Article from './pages/Article.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  [
    { path: '/', element: <App /> },
    { path: '/new-arrivals', element: <NewArrivals /> },
    { path: '/article/:idcode', element: <Article /> }
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);