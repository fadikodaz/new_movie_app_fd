'use client'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import './TopHeader.css'

const TopHeader = () => {

const inputRef = useRef()
const path = usePathname()
const router = useRouter();
const [query, setSearchQuery] = useState('');
const [activeMenu, setActiveMenu] = useState(false);
const [activeSearchField, setActiveSearchField] = useState(false);


const SrchQueryHandler = (e) => {
  if(e.key === 'Enter' && query.length > 0 )
  {
    router.push(`/search/${query}`)
    setSearchQuery('')
    setActiveSearchField(false)
  }
}

const menu = [
    {name: 'Home',url: '/',},
    {name: 'Movies',url: '/movies'},
    {name: 'Tv Show',url: '/tv-shows'},
    {name: 'Anime',url: '/animation'},
]

let list = menu.map((li,id)=>
{
    return(

        <li key={id}><Link onClick={()=>{setActiveMenu(false)}}  className={`${path === li.url ? 'active' : 'links'}`} href={li.url} >{li.name}</Link></li>
    )
})

  return (
    <div className='ToHeader'>

        <Link 
          className='logo' 
          href={'/'}
        >
          Movie App.
        </Link>

        <ul 
          className={`${activeMenu == true ? 'openMenu' : ''}`} 
        >
          {list}
        </ul>

        <div className={`Searchfield ${activeSearchField == true ? 'openSearch' : ''}`}>
          <span><i className="ri-search-line"></i></span>
          <input 
            onChange={(e)=>{setSearchQuery(e.target.value)}} 
            onKeyUp={SrchQueryHandler} value={query} 
            type='text' 
            placeholder='Search Here..'
            ref={inputRef}
          />
        </div>

        <div className='btns'>
        {/* Search Bar or field Toggle on-off */}
        <span 
          className='searchBtn' 
          onClick={()=>{
            setActiveSearchField(!activeSearchField)
            setActiveMenu(false)
            inputRef.current.focus();
            }}  
        >
            <i className="ri-search-line"></i>
        </span>
        {/* Menu List Toggle On-Off */}
        <span 
          className='menuBtn' 
          onClick={()=>{
            setActiveMenu(!activeMenu)
            setActiveSearchField(false)
          }} >
            <i className="ri-menu-3-line"></i>
        </span>

        </div>
    </div>
  )
}

export default TopHeader
