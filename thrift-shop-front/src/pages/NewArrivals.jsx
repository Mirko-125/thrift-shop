import React from 'react'

import Navbar from "@/components/my-components/Navbar"
import Resizable_Gallery from "@/components/my-components/Resizable_Gallery";
import Footer from "@/components/my-components/Footer"
import useLatestArticles from "../hooks/useLatestArticles.js";
import Scroll from "@/components/my-components/Scroll";

function NewArrivals() 
{
    const { items: newArrivals, loading: loadingNewArrivals } = useLatestArticles();

    return (
        <>
            <Scroll/>
            <Navbar/>
            <br/>
            <br/>
            <br/>
            <div className="location">
                <h1>
                    Home / New Arrivals
                </h1>
            </div>
            {
                loadingNewArrivals ? 
            (
                <>
                    <div className="page-part-loader">Loading newest articles...</div>
                </>
            ) 
            : 
                (
                    <Resizable_Gallery content={newArrivals}/>
                )
            }
            <br/>
            <br/>
            <br/>
            <Footer/>
        </>
    )
}

export default NewArrivals;