import React from 'react'
import './spinner.css'

const SpinnerLoader = () => {
  return (
    <div className='spinnerWrapper'>
        <div className="three-body">
          <div className="three-body__dot"></div>
          <div className="three-body__dot"></div>
          <div className="three-body__dot"></div>
        </div>
    </div>
  )
}

export default SpinnerLoader
