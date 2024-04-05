import React from 'react'
import './DetailCardLoader.css'

const DetailCardLoader = () => {
  return (
    <div className='infoWrapper'>
    <div className="Watch_add_Btns loadingSkeleton">
        <div className="watchBtn">
            <div className="loadingIcon"></div>
            <div className="loadingText"></div>
        </div>
        <div className="addBtn">
            <div className="loadingIcon"></div>
            <div className="loadingText"></div>
        </div>
    </div>
    
    <div className="MovieTitle">
        <div className='loadingSkeleton'>
            <div className="title"></div>
            <div className="tagLine"></div>
        </div>
    </div>
    
    <div className="videoType_Btns">
        <div className="trailerBtn loadingSkeleton">
            <div className="loadingIcon"></div>
            <div className="loadingText"></div>
        </div>
        <div className="hdBtn loadingSkeleton">
            <div className="loadingIcon"></div>
            <div className="loadingText"></div>
        </div>
        <div className="imdbBtn loadingSkeleton">
            <div className="loadingIcon"></div>
            <div className="loadingText"></div>
        </div>
    </div>
    
    <div className="Movie-Over_View">
        <div className='loadingSkeleton'>
            <div className="loadingText"></div>
        </div>
    </div>

    <div className="MovieDetails">
        <div className="Column">
            <div className="MovieDetailsSection">
                <div className='loadingSkeleton'>
                    <div className="loadingText"></div>
                </div>
                <div className="MovieDetailsSection">
                    <div className='loadingSkeleton'>
                        <div className="loadingText"></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="Column">
            <div className="MovieDetailsSection">
                <div className='loadingSkeleton'>
                    <div className="loadingText"></div>
                </div>
                <div className="MovieDetailsSection">
                    <div className='loadingSkeleton'>
                        <div className="loadingText"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>


  )
}

export default DetailCardLoader
