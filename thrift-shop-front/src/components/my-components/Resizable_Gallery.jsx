import React, { useState } from 'react';
import Slider from './Slider.jsx';
import { useNavigate } from 'react-router-dom';

function Resizable_Gallery({content}) 
{
    const [size, setSize] = useState(59);
    const [offset] = useState(35);

    const handleSizeChange = (newSize) => {
        setSize(newSize);
    };

    const navigate = useNavigate();

    return (
        <>
            <div className="slider-box">
                <Slider onSizeChange={(newSize) => handleSizeChange(Math.max(40, Math.min(100, newSize)))}/>
            </div>
            <div className="gallery">
                {content.map((content) => {
                    return (
                        <div className="art-info" key={content.name} style={{ width: `${size - offset}%`, height: `${size - offset}%` }}>
                            <a onClick={()=>navigate(`/article/${content.idcode}`)}>
                                <img src={content.picture[0]} alt="pic" className="pic">
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
