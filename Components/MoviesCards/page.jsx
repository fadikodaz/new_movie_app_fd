'use client'
import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import '@/style/MovieCards.css';
import SkeletonLoader from '@/Components/CardsSkeletonLoader/page';
import img from '@/public/Assets/no-poster.png';

const MoviesCards = ({ allData }) => {
    const imgRef = useRef(null);
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [cachedImageURLs, setCachedImageURLs] = useState({});
    const Image_Base_Url = 'https://image.tmdb.org/t/p/original/';

    useEffect(() => {
        // Fetch cached image URLs from local storage
        const cachedData = localStorage.getItem('cachedImageURLs');
        if (cachedData) {
            setCachedImageURLs(JSON.parse(cachedData));
        }
    }, []);

    useEffect(() => {
        // Cache image URLs
        const fetchAndCacheImageURLs = async () => {
            const urlsToCache = {};
            for (const detail of allData) {
                const imageURL = Image_Base_Url + detail?.poster_path;
                urlsToCache[detail.id] = imageURL;
            }
            setCachedImageURLs(urlsToCache);
            localStorage.setItem('cachedImageURLs', JSON.stringify(urlsToCache));
        };

        fetchAndCacheImageURLs();
    }, [allData]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const MediaDetailHandler = (type, name, id) => {
        router.push(`/${type}/${name}?id=${id}`);
    };

    const cards = allData.map((detail) => {
        let type = detail?.media_type;
        let title = detail?.title || detail?.name;
        let cleanTitle = title.replace(/[ :]+/g, '-');
        let id = detail?.id;

        return (
            <div className='CardBox' key={detail?.id}>
                {isLoading ? (
                    <SkeletonLoader />
                ) : (
                    <div className="imgBox" onClick={() => { MediaDetailHandler(type, cleanTitle, id) }}>
                        <img
                            ref={imgRef}
                            src={cachedImageURLs[id] || img}
                            alt={title}
                            loading="lazy" // lazy loading
                        />
                        <div className='PlayBtn'>
                            <i className="ri-play-fill"></i>
                        </div>
                    </div>
                )}
                <h2 className='title' title={title}>
                    {detail?.title || detail?.name}
                </h2>
                <div className="Date_Type">
                    <span className='date'>
                        {detail?.release_date}
                    </span>
                    <span className='type'>
                        {detail?.media_type}
                    </span>
                </div>
            </div>
        );
    });

    return (
        <div className='CardsGridbox'>
            {cards}
        </div>
    );
};

export default MoviesCards;
