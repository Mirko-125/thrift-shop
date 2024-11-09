import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import NewArrivals from './pages/NewArrivals.jsx'
import Articles from './pages/Articles.jsx'
import Article from './pages/Article.jsx'
import Favorites from './pages/Favorites.jsx'
import Bag from './pages/Bag.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  [
    { path: '/', element: <App /> },
    { path: '/new-arrivals', element: <NewArrivals /> },
    { path: '/articles/:category', element: <Articles /> },
    { path: '/article/:idcode', element: <Article /> },
    { path: '/favorites', element: <Favorites /> },
    { path: '/bag', element: <Bag /> }
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);