import React from 'react'
import './pagination.css'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {

    const handlePage = (page) => {
        onPageChange(page);
      };

    const handlePrevPage = () => {
    onPageChange(currentPage - 1);
    };

    const handleNextPage = () => {
    onPageChange(currentPage + 1);
    };


  return (
    <div className='wrapperBtns'>
        <button onClick={handlePrevPage} className='preBtn' disabled={currentPage === 1 }>{'<'}</button>

        <button onClick={()=>{handlePage(1)}} className={currentPage === 1 ? 'btnActive' : ''}>{1}</button>
        <button onClick={()=>{handlePage(2)}} className={currentPage === 2 ? 'btnActive' : ''}>{2}</button>
        <button onClick={()=>{handlePage(3)}} className={currentPage === 3 ? 'btnActive' : ''}>{3}</button>
        <button onClick={()=>{handlePage(4)}} className={currentPage === 4 ? 'btnActive' : ''}>{4}</button>
        <button onClick={()=>{handlePage(5)}} className={currentPage === 5 ? 'btnActive' : ''}>{5}</button>
        <button className={currentPage > 5 ? 'btnActive' : ''}>{currentPage > 5 ? currentPage : '...'}</button>
        <button onClick={()=>{handlePage(currentPage + 10)}}>+10</button>
        <button className={currentPage === totalPages ? 'btnActive' : ''}>...</button>

        <button onClick={handleNextPage} className='nxtBtn' disabled={currentPage === totalPages}>{'>'}</button>
    </div>
  )
}

export default Pagination
