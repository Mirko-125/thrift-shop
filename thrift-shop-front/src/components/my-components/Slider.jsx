import React, { useState } from 'react';

function Slider({onSizeChange}) {
    const [value, setValue] = useState(59);

    const handleChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
        onSizeChange(newValue);
    };

    return (
        <div className="slider-container">
            <input 
                type="range" 
                min="40" 
                max="68" 
                value={value} 
                onChange={handleChange}
                className="slider" 
            />
        </div>
    );
}

export default Slider;