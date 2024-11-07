import React, { useState, useEffect } from 'react';
import useCategories from "../../hooks/useCategories.js";
import useRandomThumbnails from '../../hooks/useRandomThumbnails.js';
import { useNavigate } from 'react-router-dom';

const ClothingShort = () => {
    const [loading, setLoading] = useState(true);
    const { categories: items } = useCategories();
    const { thumbnails: images } = useRandomThumbnails();
    
    // BITNO, proveri da li image postavlja prvu sliku iz niza ili lista prvi niz samo, u citaonici sam prvalio to

    useEffect(() => {
        if (items.length > 0) {
            setLoading(false);
        }
    }, [items]);

    const navigate = useNavigate();

    return (
        <>
            {loading ? (
                <>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="please-wait">Loading...</div>
                </>
            ) : (
                <>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="dropdown-content">
                        <div className="category-links">
                            {items.map((item, index) => (
                                <a className="category-link" key={index} onClick={()=>navigate(`/articles/${item.toLowerCase()}`)}>
                                    <h3>{item}</h3>
                                </a>
                            ))}
                        </div>
                        <div className="top-picks">
                            {images.map((image, index) => (
                                <a key={index} className="top-pick" onClick={()=>navigate(`/article/${content.idcode}`)}>
                                    <img className="drop-thumbnail" src={image} />
                                </a>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default ClothingShort;