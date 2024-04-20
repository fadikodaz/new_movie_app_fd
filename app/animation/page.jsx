'use client'
import React, { useEffect, useState } from 'react'
import '@/style/Allpages.css'
import Pagination from '@/Components/pagination/page';
import AnimationPageCards from '@/Components/Animation/page';



const Movies = () => {

    const [results, setResults] = useState();
    const [totalPages, setTotalPages] = useState();
    const [currentPage, setCurrentPage] = useState(1);
  
    const onPageChange = async (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjVlMzUzNWFlM2U4NmY5NWY4ZGExYWNmMzZjNzBhMiIsInN1YiI6IjY0YjI3NzEzZTBjYTdmMDBlNzcxODA2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fUUeCiyagBGpxNEfAHWalYWnHTJsuJPs0OTRqSMhw88'
      }
    };
    
    const fetchMoviesData = async () => {
      const resp = await fetch(`https://api.themoviedb.org/3/search/multi?query=animation&include_adult=false&language=en-US&page=${currentPage}`,options)
      const data = await resp.json()
      setResults(data.results)
      setTotalPages(data.total_pages)
    }
    useEffect(() => {
      fetchMoviesData()
    }, [currentPage])

  return (
    <div className='MoviesPageWrapper'>

      <div className='paginationWrapper'>
        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={onPageChange}/>
      </div>

      <div className="Pagetitle">
            <h3>Animation</h3>
      </div>

      <div className='cardsWrapper'>
        <AnimationPageCards allData={results}/>
      </div>

    </div>
  )
}

export default Movies