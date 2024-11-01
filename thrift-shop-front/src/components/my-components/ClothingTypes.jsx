import React, { useState, useEffect } from "react"

// it needs to pass in category names 
function ClothingTypes({ categories = [] }) {
    return (
        <>
            {categories.map((category, index) => (
                <div key={index}>
                    <a href={`#${category}`}>{category}</a>
                </div>
            ))}
        </>
    );
}

export default ClothingTypes
