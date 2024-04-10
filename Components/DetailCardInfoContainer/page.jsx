'use clinet'
import React, { useEffect, useState, useRef } from 'react';
import './DetailInfoContainer.css'
import DetailCardLoader from '../DetailCardLoader/page'

const DetailInfoContainer = ({result}) => {
    
    const [isLoading, setIsLoading] = useState(true);

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
            <a className='title' target='_blank' href={result.homepage}>{result?.title || result?.name}</a>
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
 
        <div className="row">
            <div className='columnLeft'>
                {result && (
                    <>
                        <div className="row-line">
                            <span className="type"><strong>Released Date:</strong></span> 
                            <span className="value">{result.release_date || result.first_air_date}</span>
                        </div>
                        <div className="row-line">
                            <span className="type"><strong>{result.spoken_languages && result.spoken_languages.length > 1 ? 'Languages' : 'Language'}:</strong></span> 
                            <span className="value">
                                {result.spoken_languages?.map((lang, index) => (
                                    <span key={lang.id}>{index > 0 && ', '}
                                        <a href={``} title={lang.name && lang.english_name}>{lang.name && lang.english_name}</a>
                                    </span>
                                ))}
                            </span>
                        </div>
                        <div className="row-line">
                            <span className="type"><strong>Genre:</strong></span> 
                            <span className="value">
                                {result.genres?.map((gen, index) => (
                                    <span key={gen.id}>{index > 0 && ', '}
                                        <a href={``} title={gen.name}>{gen.name}</a>
                                    </span>
                                ))}
                            </span>
                        </div>
                    </>
                )}
            </div>
            <div className='columnRight'>
                {result && (
                    <>
                        <div className="row-line">
                            <span className="type"><strong>{result.runtime ? 'Duration' : (result.number_of_seasons > 1 ? 'Seasons' : 'Season')}:</strong></span>
                            <span className="value">{result.runtime ? `${result.runtime} min` : `${result.number_of_seasons} (Episodes-${result.number_of_episodes})`}</span>
                        </div>
                        <div className="row-line">
                            <span className="type"><strong>Country:</strong></span> 
                            <span className="value">
                                {result.production_countries?.map((count, index) => (
                                    <span key={count.id}>{index > 0 && ', '}
                                        <a href={``} title={count.name}>{count.name}</a>
                                    </span>
                                ))}
                            </span>
                        </div>
                        <div className="row-line">
                            <span className="type"><strong>Production:</strong></span> 
                            <span className="value">
                                {result.production_companies?.map((prod, index) => (
                                    <span key={prod.id}>{index > 0 && ', '}
                                        <a href={``} title={prod.name}>{prod.name}</a>
                                    </span>
                                ))}
                            </span>
                        </div>
                    </>
                )}
            </div>
        </div>
 
     </div>
     
    }
    </>
  )
}

export default DetailInfoContainer
