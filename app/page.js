'use client'
import MoviesCards from '@/Components/MoviesCards/page'
import React, { useEffect, useState } from 'react'

const Home = () => {


  // set Button Types id for movies and tv shows
  const [active, setActive] = useState(() => {
    const storedActive = localStorage.getItem('active');
    return storedActive !== null ? JSON.parse(storedActive) : 0;
  });

  // Update localStorage whenever active state changes
  useEffect(() => {
    localStorage.setItem('active', JSON.stringify(active));
  }, [active]);

  //function geting active value from btn and setting in hook state
  const typeBtnHandler = (id) =>{
    setActive(id)
  }

  // set  Fetching Data in hook state
  const [results, setResults] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjVlMzUzNWFlM2U4NmY5NWY4ZGExYWNmMzZjNzBhMiIsInN1YiI6IjY0YjI3NzEzZTBjYTdmMDBlNzcxODA2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fUUeCiyagBGpxNEfAHWalYWnHTJsuJPs0OTRqSMhw88'
    }
  };
  
  const fetchApiData = async () => {
    const resp = await fetch(`https://api.themoviedb.org/3/trending/${active === 1 ? 'tv' : 'movie'}/day?language=en-US`,options)
    const data = await resp.json()
    setResults(data.results)
  }
  useEffect(() => {
    fetchApiData()
  }, [active])
  

  return (
    <div className='MainWrapper'>

      <div className='TypeContainer'>
          <span className='typeName'>
            Trending
          </span>
          <div className='typesBtns'>
              <button onClick={()=>{typeBtnHandler(0)}} className={`${active === 0 ? 'movieBtn': ''}`}>
                <i className="ri-play-fill"></i>  Movies
              </button>
              <button onClick={()=>{typeBtnHandler(1)}} className={`${active === 1 ? 'tvBtn': ''}`}>
                <i className="ri-list-check"></i> Tv Shows
              </button>
          </div>
      </div>

      <MoviesCards allData={results}/>
      
    </div>
  )
}

export default Home