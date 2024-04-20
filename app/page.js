'use client'
import MoviesCards from '@/Components/Cards/page'
import React, { useEffect, useState } from 'react'

const Home = () => {

  const [results, setResults] = useState([]);
  const [active, setActive] = useState(0);
  const [tvMovie, setTvMovie] = useState('movie');

  const typeBtnHandler = (id) =>{
    setActive(id)
  }

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjVlMzUzNWFlM2U4NmY5NWY4ZGExYWNmMzZjNzBhMiIsInN1YiI6IjY0YjI3NzEzZTBjYTdmMDBlNzcxODA2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fUUeCiyagBGpxNEfAHWalYWnHTJsuJPs0OTRqSMhw88'
    }
  };
  const fetchApiData = async () => {
    const resp = await fetch(`https://api.themoviedb.org/3/trending/${tvMovie}/day`,options)
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
              <button onClick={()=>{typeBtnHandler(0),setTvMovie('movie')}} className={`${active === 0 ? 'movieBtn': ''}`}>
                <i className="ri-play-fill"></i>  Movies
              </button>
              <button onClick={()=>{typeBtnHandler(1),setTvMovie('tv')}} className={`${active === 1 ? 'tvBtn': ''}`}>
                <i className="ri-list-check"></i> Tv Shows
              </button>
          </div>
      </div>

      <MoviesCards allData={results}/>
      
    </div>
  )
}

export default Home