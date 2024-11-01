// import React, { useState, useEffect } from 'react';

import Navbar from "@/components/my-components/Navbar"
import Scroll from "@/components/my-components/Scroll"
import Footer from "@/components/my-components/Footer"

import { background, url } from './links.js';

import { useNavigate } from 'react-router-dom';

function App() 
{
    // maybe making a function that generates a random number betweern
    // 1 and number of articles, htan replace the number in {`${url}/sample1.jpg`}
    // so that it shows a random article each time the page is loaded
    
    /*
    const [content,setContent] = useState([]);

    useEffect(() => {
      fetch("http://localhost:8888/articles.json")
          .then(response => response.json())
          .then(data => setContent(data));
    }, []);
    */

    const navigate = useNavigate();
    return (
      <>
        <Scroll/>
        <Navbar color="white"/>
        <div className="main-page-content">
          <div className="new-collection">
            <a onClick={() => navigate('/new-arrivals')} className="main-page">
              <div className="main-image-background">
              <img src={background} alt="pic">
              </img>
              </div>
              <div className="title-menu">
                <h2>
                  NEW COLLECTION
                </h2>
                <p className="clickable-link">
                  view
                </p>
              </div>
            </a>
          </div>
          <div className="two-categories">
            <div className="item-thumbnail">
              <a href='/category'>
                <img src={`${url}/sample1.jpg`} alt="pic">
                </img>
                <div className="inner-text">
                  <h1>Shirts</h1>
                  <p>view</p>
                </div>
              </a>
            </div>
            <div className="item-thumbnail">
              <a href='/article'>
                <img src={`${url}/sample2.jpg`} alt="pic">
                </img>
                <div className="inner-text">
                  <h1>Hats</h1>
                  <p>view</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <Footer/>
      </>
    )
}

export default App
