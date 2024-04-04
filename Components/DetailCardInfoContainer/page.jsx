import React from 'react'
import Link from 'next/link'
import './DetailInfoContainer.css'

const DetailInfoContainer = ({result}) => {
  return (
    <div className='infoWrapper'>

     <div className="Watch_add_Btns_Wrapper">
          <a className='watchBtn' target='_blank' href={result?.homepage}>
              <i className="ri-play-fill"></i>
              Watch now
          </a>
          <button className='addBtn'>
              <i className="ri-add-line"></i>
              Add to favorite
          </button>
      </div>
      
      <div className="MovieTitleWrapper">
          <a className='title' target='_blank' href={result?.homepage}>{result?.title || result?.name}</a>
          <p className="tagLine">{result?.tagline}</p>
      </div>
      
      <div className="videoType_Btns_Wrapper">
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
      
      <div className="Movie_Over_View_Wrapper">
          <p>{result?.overview}</p>
      </div>

    </div>
  )
}

export default DetailInfoContainer
