'use client'
import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import '@/style/MovieCards.css'
import SkeletonLoader from '@/Components/CardsSkeletonLoader/page'
import img from '@/public/Assets/no-poster.png'



const MoviesCards = ({allData}) => {
    
    const imgRef = useRef(null);
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true);
    const Image_Base_Url = 'https://image.tmdb.org/t/p/original/'

    useEffect(() => {
        const timer = setTimeout(() => {
        setIsLoading(false);
        }, 1000);
    
        return () => clearTimeout(timer); 
    }, []);
    
    const  MediaDetailHandler = (type,name,id) => {
        router.push(`/${type}/${name}?id=${id}`)
    }

    const cards =  allData.map((detail)=>{

        let type  = detail?.media_type
        let title = detail?.title || detail?.name
        let cleanTitle = title.replace(/[ :]+/g, '-');
        let id    = detail?.id

    return (
        
        isLoading
        ?
        <SkeletonLoader/>
        :
        <div className='CardBox' key={detail?.id}>
            <div className="imgBox" onClick={()=>{MediaDetailHandler(type, cleanTitle, id)}}>
                <img
                    ref={imgRef}
                    src={Image_Base_Url+detail?.poster_path}
                    alt={title} 
                />
                <div className='PlayBtn'>
                    <i className="ri-play-fill"></i>
                </div>
            </div>
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
        )
    })

    return (
        <div className='CardsGridbox'>
            {cards}
        </div>
    )
}

export default MoviesCards