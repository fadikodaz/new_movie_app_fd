import React from 'react'
import '@/style/MovieCards.css'
import './SkeletonLoader.css'

const SkeletonLoader = () => {
  return (
    <div className='LoaderCardBox'>
        <div className="LoaderimgBox">
            <div className="loader"></div>
        </div>
        {/* <div className='Loadertitle'>
            <div className="Lineloader"></div>
        </div>
        <div className="LoderDate_Type">
            <div className="Lineloader"></div>
            <div className="Lineloader"></div>
        </div> */}
    </div>
  )
}

export default SkeletonLoader
