'use client'
import './DetailPage.css'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import noPoster from '@/public/assets/no_thumbnail.jpg';
import MoviesCards from '@/Components/MovieCards/page'
import DetialCard from '@/Components/DetailComponents/DetialMainCard/page';

const Detailpage = (params) => {
    
    const [detailResult, setDetailResult] = useState('');
    const [simillarResults, setSimillarResults] = useState([]);
    const media_type = params?.params?.media_type
    const type = media_type    //for simillar fetch api 
    const id = params?.searchParams?.id
    const Backdrop_Image = detailResult?.backdrop_path ? `https://image.tmdb.org/t/p/original/${detailResult.backdrop_path}` : noPoster;

    // Api Key Oath
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjVlMzUzNWFlM2U4NmY5NWY4ZGExYWNmMzZjNzBhMiIsInN1YiI6IjY0YjI3NzEzZTBjYTdmMDBlNzcxODA2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fUUeCiyagBGpxNEfAHWalYWnHTJsuJPs0OTRqSMhw88'
        }
    };

    //Fetching Movies or Tv Detail Data
    const  FetchDetailData = async () => {
        const resp = await fetch(`https://api.themoviedb.org/3/${media_type}/${id}`, options)
        const result = await resp.json()
        setDetailResult(result)
    }
    useEffect(()=>{
      FetchDetailData()
    },[id])
    
    //Fetching Recomended or Simillar Movies/TvShows Data
    const  FetchSimillarData = async () => {
      const resp = await fetch(`https://api.themoviedb.org/3/${type}/${id}/similar`, options)
      const data = await resp.json()
      setSimillarResults(data.results)
    }
    useEffect(()=>{
      FetchSimillarData()
    },[type,id])
    

  return (
    <>
      <div className='MainWrapperDetail'>
      <div className='BackdropImageWrapper'>
            <div className='Layer'> </div>
            <Image
              priority
              width={1000}
              height={1000}
              src={Backdrop_Image}
              alt="poster"
            />
      </div>
        
        <div className='DetailMainCard'>
              <DetialCard result={detailResult}/>
        </div>
      </div>
      
      <div className='MoreMoviesSection'>
          <h3>You may like these</h3>
          <MoviesCards allData={simillarResults}/>
      </div>

    </>
  )
}

export default Detailpage
