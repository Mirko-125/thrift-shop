import React, { useState, useEffect } from 'react';
import useCategories from "../../hooks/useCategories.js";

const ClothingShort = () => {
    const [loading, setLoading] = useState(true);
    const { categories: items } = useCategories();

    useEffect(() => {
        if (items.length > 0) {
            setLoading(false);
        }
    }, [items]);

    return (
        <>
            {loading ? (
                <>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div>Loading...</div>
                </>
            ) : (
                <>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    {items.map((item, index) => (
                        <div key={index}>
                            <h3>{item}</h3>
                        </div>
                    ))}
                    <div>
                        <h2>Total Categories: {items.length}</h2>
                    </div>
                </>
            )}
        </>
    );
};

export default ClothingShort;