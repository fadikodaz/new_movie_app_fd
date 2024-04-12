'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import './ImageContainer.css';
import noPoster from '@/public/assets/noPoster.png'

const ImageContainer = ({ result }) => {

    const poster = result.poster_path ? `https://image.tmdb.org/t/p/original/${result?.poster_path}` : noPoster;
    const vote_average = Math.round(result?.vote_average * 10) / 10;
    const voteBarWidth = (vote_average / 10) * 100 + "%";

    return (
        <div className='ContainerWrapper'>
            <div className="imgBox">
                <Image
                    priority
                    alt={result?.title}
                    width={200}
                    height={300}
                    src={poster ? poster : noPoster}
                />
            </div>
            <div className="votingBox">
                <span className="votingText">
                    <strong>{vote_average ? vote_average : '---'}</strong> 
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
        )
}
export default ImageContainer;
