import React from 'react'
import './detailCard.css'
import ImageContainer from '../DetailCardImageContainer/page'
import DetailInfoContainer from '../DetailCardInfoContainer/page'

const DetialCard = ({result}) => {
  return (
    <div className='detailCardWrapper'>
        <ImageContainer result={result} />
        <DetailInfoContainer result={result} />
    </div>
  )
}

export default DetialCard
