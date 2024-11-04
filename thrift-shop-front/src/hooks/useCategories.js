import { fetchLatestArticles as fetchArticlesFromApi} from '@/api/api';
import { useState, useEffect } from 'react';

const useCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchArticlesFromApi().then(data => {
            const uniqueCategories = [...new Set(data.map(item => item.category))];
            setCategories(uniqueCategories);
            setLoading(false);
        }).catch(error => {
            console.error('Error fetching categories:', error);
            setLoading(false);
        });
    }, []);
    return { categories };
};

export default useCategories;
/*
import { useState, useEffect } from 'react';
import fetchCategoriesFromApi from '../api/fetchCategories';
const useCategories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => 
    {
        fetch('/api/categories')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);
    return { categories };
};
export default useCategories;
*/