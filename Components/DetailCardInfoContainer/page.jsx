'use clinet'
import React, { useEffect, useState, useRef } from 'react';
import './DetailInfoContainer.css'
import DetailCardLoader from '../DetailCardLoader/page'

const DetailInfoContainer = ({result}) => {
    
    const [isLoading, setIsLoading] = useState(true);
    console.log(result)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

  return (
    <>
    {
    isLoading 
     ? 
    (
        <DetailCardLoader />
    ) 
     :
    
    <div className='infoWrapper'>

        <div className="Watch_add_Btns">
            <a className='watchBtn' target='_blank' href={result?.homepage}>
                <i className="ri-play-fill"></i>
                Watch now
            </a>
            <button className='addBtn'>
                <i className="ri-add-line"></i>
                Add to favorite
            </button>
        </div>
        
        <div className="MovieTitle">
            <a className='title' target='_blank' href={result?.homepage}>{result?.title || result?.name}</a>
            <p className="tagLine">{result?.tagline}</p>
        </div>
        
        <div className="videoType_Btns">
            <button className='trailerBtn'>
                <i className="ri-vidicon-fill"></i> 
                Trailer
            </button>
            <button className='hdBtn'>
                HD
            </button>
            <button className='imdbBtn'>
                IMDB
            </button>
        </div>
        
        <div className="Movie-Over_View">
            <p>{result?.overview}</p>
        </div>

        <div className="MovieDetails">
                <div className="Column">
                    <div className="MovieDetailsSection">
                        <h4>Released Date:</h4>
                        <p>{result?.release_date}</p>
                    </div>
                    <div className="MovieDetailsSection">
                        <h4>Genre:</h4>
                        <div className="Genres">
                            {result?.genres.map(gen => (
                                <p key={gen.id}>{  ',' + gen.name }</p>
                                ))}
                        </div>
                    </div>
                </div>
                <div className="Column">
                    <div className="MovieDetailsSection">
                        <h4>Duration:</h4>
                        <p>{result?.runtime} min</p>
                    </div>
                    <div className="MovieDetailsSection">
                        <h4>Production:</h4>
                        <div className="ProductionCompanies">
                            {result?.production_countries.map(pr => (
                                <p key={pr.id}>{pr.name}</p>
                            ))} 
                        </div>
                    </div>
                </div>
        </div>

    </div>

    }
    </>
  )
}

export default DetailInfoContainer
