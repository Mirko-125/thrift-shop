import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useCategories from "../hooks/useCategories.js";
import useLatestArticles from "../hooks/useLatestArticles.js";

import Scroll from '@/components/my-components/Scroll.jsx';
import Navbar from '@/components/my-components/Navbar.jsx';
import Resizable_Gallery from '@/components/my-components/Resizable_Gallery.jsx';

function Articles() {
    let get_the_json = window.location.pathname.split('/').pop();
    
    // for the category mini menu
    const { categories: items } = useCategories();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (items.length > 0) {
            setLoading(false);
        }
    }, [items]);
    const navigate = useNavigate();
    // ↑ up here

    const { items: articles, loading: loadingArticles } = useLatestArticles(); // replace with a specific call you need

    return (
        <>
            <Scroll/>
            <Navbar/>
            <br/>
            <br/>
            <br/>
            <div className="location">
                <h1>
                    Home / Clothing or Accesories? / {get_the_json}
                </h1>
            </div>
            <div>
                {loading ? (
                    <div className="please-wait">Loading...</div>
                ) : (
                    <>
                        <br/>
                            <div className="category-mini-menu">
                                {items.map((cat, index) => (
                                    <a className="mini-cat" key={index} onClick={()=>navigate(`/articles/${cat}`)}>
                                        <h3>{cat}</h3>
                                    </a>
                                ))}
                            </div>
                    </>
                )}  
            </div>
            {
                loadingArticles  ? 
            (
                <>
                    <div className="page-part-loader">Loading your articles...</div>
                </>
            ) 
            : 
                (
                    <Resizable_Gallery content={articles}/>
                )
            }
            <br/>
            <br/>
            <br/>
        </>
    );
};

export default Articles;