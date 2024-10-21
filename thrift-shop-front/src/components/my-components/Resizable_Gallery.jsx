import React, { useState, useEffect } from 'react';
import Slider from './Slider.jsx';

function Resizable_Gallery() 
{
    //#region Might have to be moved to a separate file
    const [content,setContent] = useState([]);
    
    const fakeApiResponse = [
        {
            "name": "Summer shirt",
            "category": "Shirts",
            "image": "http://localhost:8888/sample1.jpg",
            "price": "$19.99"
        },
        {
            "name": "Black coat",
            "category": "Coats",
            "image": "http://localhost:8888/sample2.jpg",
            "price": "$49.99"
        },
        {
            "name": "Orange hoodie",
            "category": "Hoodies",
            "image": "http://localhost:8888/sample3.jpg",
            "price": "$29.99"
        },
        {
            "name": "Black boots",
            "category": "Shoes",
            "image": "http://localhost:8888/sample4.jpg",
            "price": "$39.99"
        },
        {
            "name": "Sunglasses",
            "category": "Accessories",
            "image": "http://localhost:8888/sample5.jpg",
            "price": "$15.99"
        },
        {
            "name": "Fur coat and purse",
            "category": "Coats",
            "image": "http://localhost:8888/sample6.jpg",
            "price": "$99.99"
        },
        {
            "name": "Black jacket",
            "category": "Jackets",
            "image": "http://localhost:8888/sample7.jpg",
            "price": "$59.99"
        },
        {
            "name": "Skirt",
            "category": "Bottoms",
            "image": "http://localhost:8888/sample8.jpg",
            "price": "$24.99"
        },
        {
            "name": "Leather blazor",
            "category": "Blazors",
            "image": "http://localhost:8888/sample9.jpg",
            "price": "$44.99"
        }
    ];

    useEffect(() => {
        // Faking it
        setTimeout(() => {
            setContent(fakeApiResponse);
        }, 1000);
    }, []);

    /* Need to set up CORS properly, a little help Krle!
    useEffect(() => {
      fetch("http://localhost:8888/articles.json")
          .then(response => response.json())
          .then(data => setContent(data));
    }, []);

    console.table(content);
    */
    console.table(content);
    //#endregion

    const [size, setSize] = useState(59);
    const [offset] = useState(35);

    const handleSizeChange = (newSize) => {
        setSize(newSize);
    };

    return (
        <>
            <div className="slider-box">
                <Slider onSizeChange={(newSize) => handleSizeChange(Math.max(40, Math.min(100, newSize)))}/>
            </div>
            <div className="gallery">
                {content.map((content) => {
                    return (
                        <div className="art-info" key={content.name} style={{ width: `${size - offset}%`, height: `${size - offset}%` }}>
                            <a href='/category'>
                                <img src={content.image} alt="pic" className="pic">
                                </img>
                                <div>
                                    <h1>{content.name}</h1>
                                    <p>{content.price}</p>
                                </div>
                            </a>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Resizable_Gallery;
