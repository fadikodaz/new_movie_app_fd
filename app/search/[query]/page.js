'use client'
import './searchPage.css'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import SpinnerLoader from '@/Components/Spinner/page'
import noResults from '@/public/assets/no-results.png'
import SearchMoviesCards from '@/Components/SearchMoviesCards/page';

const SearchPage = ({params}) => {

    const query = params?.query
    const cleanTitle = query.replace(/[0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, ' ');;
    const [SearchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);


    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjVlMzUzNWFlM2U4NmY5NWY4ZGExYWNmMzZjNzBhMiIsInN1YiI6IjY0YjI3NzEzZTBjYTdmMDBlNzcxODA2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fUUeCiyagBGpxNEfAHWalYWnHTJsuJPs0OTRqSMhw88'
        }
      };
    const fetchSearchData = async () => {
        const resp = await fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&page=1`,options)
        const data = await resp.json()
        setSearchResults(data.results)
      }
      useEffect(() => {
        fetchSearchData()
      }, [query])

  return (
    isLoading 
    ? 
    (
      <SpinnerLoader/>
    )
    :
    <div className='searchWrapper'>
        {
          SearchResults.length > 0 ?
          <h2>Search {SearchResults.length > 1 ? 'results' : 'result'} for "{cleanTitle}"</h2>
          :
          <h2>Search result not found </h2>
        }
        {
          SearchResults.length > 0 ?
          (
           
            (
              <SearchMoviesCards allData={SearchResults}/>
            )
          )
          :
          <div className='noResultFoundBox'>
            <Image 
              priority 
              style={{ width: "100%", height: "auto" }}
              src={noResults} 
              alt='No Result Found'
            />
          </div>
        }
    </div>
  )
}

export default SearchPage