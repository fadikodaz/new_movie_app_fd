import React from 'react'
import '@/style/MovieCards.css'
import './SkeletonLoader.css'

const SkeletonLoader = () => {
  return (
    <div className='CardBox'>
        <div className="LoaderimgBox">
            <div className="loader"></div>
        </div>
        <div className='Loadertitle'>
            <div className="Lineloader"></div>
        </div>
        <div className="Date_Type">
            <div className="Lineloader"></div>
            <div className="Lineloader"></div>
        </div>
    </div>
  )
}

export default SkeletonLoader
