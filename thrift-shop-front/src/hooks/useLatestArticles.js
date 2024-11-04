import { useState, useEffect } from 'react';
import { fetchLatestArticles as fetchArticlesFromApi } from '../api/api.js';

const useLatestArticles = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchArticlesFromApi().then(data => {
            setItems(data);
            setLoading(false);
        });
    }, []);

    return { items, loading };
};

export default useLatestArticles;