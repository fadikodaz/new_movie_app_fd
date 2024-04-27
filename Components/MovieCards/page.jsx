'use client'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import SkeletonLoader from '@/Components/CardsSkeletonLoader/page';
import noPoster from '@/public/assets/no_thumbnail.jpg';
import '@/style/MovieCards.css';


const MoviesCards = ({ allData }) => {

    const pathName = usePathname()
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const cards = allData?.map((detail) => {

        const id = detail?.id;
        const type = detail?.media_type;
        const typeOnPathname = pathName === '/movies' ? 'movie' : 'tv';
        const title = detail?.title || detail?.name;
        const cleanTitle = title.replace(/[ :]+/g, '-');
        const poster = detail?.poster_path ? `https://image.tmdb.org/t/p/original${detail?.poster_path}` : noPoster;
        const releaseDate = detail?.release_date  || detail?.first_air_date;
        const year = releaseDate?.slice(0, 4);
        console.log(poster)

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
                        src={ poster }
                        alt={title}
                        width={200} // Placeholder width value
                        height={200} // Placeholder height value
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
                        {year}
                    </span>
                    <span className='type'>
                        {type || typeOnPathname}
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

