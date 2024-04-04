'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import './TopHeader.css'
import { useRouter } from 'next/navigation'

const TopHeader = () => {

const router = useRouter();
const [active, setActive] = useState(0);
const [query, setSearchQuery] = useState('');
const [activeMenu, setActiveMenu] = useState(false);
const [activeSearchField, setActiveSearchField] = useState(false);


const SrchQueryHandler = (e) => {
  if(e.key === 'Enter' && query.length > 0 )
  {
    router.push(`/Search?s=${query}`)
    setSearchQuery('')
  }
}



const menu = [
    {name: 'Home',url: '/',},
    {name: 'Movies',url: ''},
    {name: 'Tv Show',url: ''},
    {name: 'Anime',url: ''},
]

let list = menu.map((li,id)=>
{
    return(

        <li key={id}><Link onClick={()=>{setActive(id),setActiveMenu(!activeMenu)}} className={`links ${active === id ? 'active' : ''}`} href={li.url} >{li.name}</Link></li>
    )
})

  return (
    <div className='ToHeader'>
        <div><Link className='logo' href={'/'}>Movie App.</Link></div>

        <ul className={`${activeMenu == true ? 'openMenu' : ''}`} >{list}</ul>

        <div className={`Searchfield ${activeSearchField == true ? 'openSearch' : ''}`}>
          <span><i className="ri-search-line"></i></span>
          <input onChange={(e)=>{setSearchQuery(e.target.value)}} onKeyUp={SrchQueryHandler} value={query} type='text' placeholder='Search Here..'/>
        </div>

        <div className='btns'>
{/* Search Bar or field Toggle on & off */}
        <span 
        className='searchBtn' 
        onClick={()=>{
          setActiveSearchField(!activeSearchField)
          setActiveMenu(false)
          }}  >
            <i className="ri-search-line"></i>
        </span>
{/* Menu List Toggle On & Off */}
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
