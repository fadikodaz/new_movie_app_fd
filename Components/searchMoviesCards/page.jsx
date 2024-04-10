'use client'
import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import '@/style/MovieCards.css';
import SkeletonLoader from '@/Components/CardsSkeletonLoader/page';
import img from '@/public/Assets/no-poster.png';

const SearchMoviesCards = ({ allData }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const MediaDetailHandler = (type, name, id) => {
        router.push(`/${type}/${name}?id=${id}`);
    };

    const cards = allData?.map((detail,index) => {
        const type = detail?.media_type;
        const title = detail?.title || detail?.name;
        const cleanTitle = title.replace(/[ :]+/g, '-');
        const id = detail?.id;
        const poster = `https://image.tmdb.org/t/p/original/${detail?.poster_path}`

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
                    <div className="imgBox" key={index} onClick={() => { MediaDetailHandler(type, cleanTitle, id) }}>
                        <Image
                            priority
                            src={ poster || img }
                            alt={title}
                            width={200}
                            height={300}
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

export default SearchMoviesCards;

