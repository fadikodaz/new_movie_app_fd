'use client'
import React, { useEffect, useRef } from 'react';
import './ImageContainer.css';

const ImageContainer = ({ result }) => {
    const Image_Base_Url = 'https://image.tmdb.org/t/p/original/';
    const poster = Image_Base_Url + result?.poster_path;
    const vote_average = Math.round(result?.vote_average * 10) / 10;
    const voteBarWidth = (vote_average / 10) * 100 + "%";
    const imgRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1 // Trigger the intersection callback when 10% of the image is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // When the image is in the viewport, replace data-src with src to trigger loading
                    entry.target.src = entry.target.dataset.src;
                    observer.unobserve(entry.target); // Stop observing once image is loaded
                }
            });
        }, options);

        if (imgRef.current) {
            observer.observe(imgRef.current); // Start observing the image element
        }

        return () => {
            if (imgRef.current) {
                observer.unobserve(imgRef.current); // Clean up observer on component unmount
            }
        };
    }, [poster]);

    return (
        <div className='ContainerWrapper'>
            <div className="imgBox">
                <img
                    ref={imgRef}
                    data-src={poster}
                    alt=""
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
