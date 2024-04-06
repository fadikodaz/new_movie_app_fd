'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import './ImageContainer.css';

const ImageContainer = ({ result }) => {

    const poster = 'https://image.tmdb.org/t/p/original/'+ result?.poster_path;
    const vote_average = Math.round(result?.vote_average * 10) / 10;
    const voteBarWidth = (vote_average / 10) * 100 + "%";

    return (
        <div className='ContainerWrapper'>
            <div className="imgBox">
                <Image
                    priority
                    src={poster}
                    alt={result?.title}
                    width={300} // Placeholder width value
                    height={450} // Placeholder height value
                />
            </div>
            <div className="votingBox">
                <span className="votingText">
                    <strong>{vote_average}</strong> 
                    <p> / {result?.vote_count} voted</p>
                </span>
                <div className="votingLine">
                    <div className="voteBar" style={{width : voteBarWidth}}></div>
                </div>
                <div className="voteBtnBox">
                    <button>Like</button>
                    <button>Dislike</button>
                </div>
            </div>
        </div>
    );
};

export default ImageContainer;
