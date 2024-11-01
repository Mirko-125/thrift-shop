import React, { useState, useEffect } from "react"

import ClothingTypes from "@/components/my-components/ClothingTypes";
import Resizable_Gallery from "@/components/my-components/Resizable_Gallery";
import Navbar from "@/components/my-components/Navbar"
import Footer from "@/components/my-components/Footer"

import { url } from '../links.js';

function Clothing() 
{
    //#region State and Fake API Response
    const [content, setContent] = useState([]);
    
    const fakeApiResponse = [
        {
            "name": "Summer shirt",
            "category": "Shirts",
            "image": `${url}/sample1.jpg`,
            "price": "$19.99"
        },
        {
            "name": "Black coat",
            "category": "Coats",
            "image": `${url}/sample2.jpg`,
            "price": "$49.99"
        },
        {
            "name": "Orange hoodie",
            "category": "Hoodies",
            "image": `${url}/sample3.jpg`,
            "price": "$29.99"
        },
        {
            "name": "Black boots",
            "category": "Shoes",
            "image": `${url}/sample4.jpg`,
            "price": "$39.99"
        },
        {
            "name": "Sunglasses",
            "category": "Accessories",
            "image": `${url}/sample5.jpg`,
            "price": "$15.99"
        },
        {
            "name": "Fur coat and purse",
            "category": "Coats",
            "image": `${url}/sample6.jpg`,
            "price": "$99.99"
        },
        {
            "name": "Black jacket",
            "category": "Jackets",
            "image": `${url}/sample7.jpg`,
            "price": "$59.99"
        },
        {
            "name": "Skirt",
            "category": "Bottoms",
            "image": `${url}/sample8.jpg`,
            "price": "$24.99"
        },
        {
            "name": "Leather blazor",
            "category": "Blazors",
            "image": `${url}/sample9.jpg`,
            "price": "$44.99"
        }
    ];

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Faking it
        setTimeout(() => {
            setContent(fakeApiResponse);
            const uniqueCategories = [...new Set(fakeApiResponse.map(item => item.category))];
            setCategories(uniqueCategories);
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
    console.table(categories);
    //#endregion

    return (
        <>
            <Navbar/>
            <ClothingTypes types={categories}/>
            <Resizable_Gallery content={categories}/>
            <Footer/>
        </>
    )
}

export default Clothing
