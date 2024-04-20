'use client'
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import SkeletonLoader from '@/Components/CardsSkeletonLoader/page';
import noPoster from '@/public/assets/no_thumbnail.jpg';
import '@/style/MovieCards.css';


const MoviesCards = ({ allData }) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const cards = allData.map((detail) => {

        const type = detail?.media_type;
        const title = detail?.title || detail?.name;
        const cleanTitle = title.replace(/[ :]+/g, '-');
        const poster = 'https://image.tmdb.org/t/p/original/' + detail?.poster_path;
        const id = detail?.id;

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
                <div className="imgBox">
                <Link className='Linktag' href={`/${type}/${cleanTitle}?id=${id}`}>
                    <Image
                        priority
                        src={ poster || noPoster }
                        alt={title}
                        width={200} // Placeholder width value
                        height={300} // Placeholder height value
                    />
                    <div className='PlayBtn'>
                        <i className="ri-play-fill"></i>
                    </div>
                </Link>
                </div>
                )}
                <Link className='Linktag' href={`/${type}/${cleanTitle}?id=${id}`}>
                    <h2 className='title' title={title}>
                        {detail?.title || detail?.name}
                    </h2>
                </Link>
                <div className="Date_Type">
                    <span className='date'>
                        {detail?.release_date || detail?.first_air_date}
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

