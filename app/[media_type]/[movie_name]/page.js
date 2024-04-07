'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import './DetailPage.css'
import DetialCard from '@/Components/DetialMainCard/page';

const page = (params) => {
    
    const [result, setResult] = useState('');
    const media_type = params.params.media_type
    const id = params.searchParams.id
    const Backdrop_Image = 'https://image.tmdb.org/t/p/original/'+result?.backdrop_path


    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjVlMzUzNWFlM2U4NmY5NWY4ZGExYWNmMzZjNzBhMiIsInN1YiI6IjY0YjI3NzEzZTBjYTdmMDBlNzcxODA2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fUUeCiyagBGpxNEfAHWalYWnHTJsuJPs0OTRqSMhw88'
        }
    };
    const  FetchApiData = async () => {
        const resp = await fetch(`https://api.themoviedb.org/3/${media_type}/${id}`, options)
        const result = await resp.json()
        setResult(result)
    }
    useEffect(()=>{
        FetchApiData()
    },[id])
    
  return (
    <>
      <div className='MainWrapperDetail'>
      <div className='BackdropImageWrapper'>
            <div className='Layer'> </div>
            <img
              src={Backdrop_Image}
              alt="poster"
            />
      </div>
        
        <div className='DetailMainCard'>
              <DetialCard result={result}/>
        </div>
      </div>
      
      <div className='MoreMoviesSection'>
          <h3>You may like these</h3>
      </div>

    </>
  )
}

export default page
