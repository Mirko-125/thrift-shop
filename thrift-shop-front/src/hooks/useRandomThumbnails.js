import { fetchLatestArticles as fetchArticlesFromApi } from '@/api/api';
import { useState, useEffect } from 'react';

const useRandomThumbnails = () => {
    const [thumbnails, setThumbnails] = useState([]);

    useEffect(() => {
        fetchArticlesFromApi().then(data => {
            const images = data.map(item => item.picture[0]);
            const randomImages = [];
            const usedIndices = new Set();

            while (randomImages.length < 3 && usedIndices.size < images.length) {
                const randomIndex = Math.floor(Math.random() * images.length);
                if (!usedIndices.has(randomIndex)) {
                    usedIndices.add(randomIndex);
                    randomImages.push(images[randomIndex]);
                }
            }

            setThumbnails(randomImages);
        }).catch(error => {
            console.error('Error fetching thumbnails:', error);
        });
    }, []);

    return { thumbnails };
};

export default useRandomThumbnails;