'use client'
import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import '@/style/MovieCards.css';
import SkeletonLoader from '@/Components/CardsSkeletonLoader/page';
import img from '@/public/Assets/no-poster.png';

const MoviesCards = ({ allData }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const Image_Base_Url = 'https://image.tmdb.org/t/p/original/';

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
                {
                isLoading 
                ? 
                (
                    <SkeletonLoader />
                )
                : 
                (
                    <div className="imgBox" onClick={() => { MediaDetailHandler(type, cleanTitle, id) }}>
                        <Image
                            priority
                            src={Image_Base_Url + detail?.poster_path || img}
                            alt={title}
                            width={200} // Placeholder width value
                            height={300} // Placeholder height value
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

