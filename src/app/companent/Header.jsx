"use client"
import React, { useState } from 'react'
import { BiSearch } from "react-icons/bi";
import MenÜItem from './MenÜItem';
import ThemComp from './ThemComp';
import { useRouter } from 'next/navigation';



const Header = () => {
  const [keyword,setKeyword]=useState('')
  const router=useRouter();
  const searcFunc=(e)=>{
    if(e.key==="Enter" && keyword.length>=3){
      router.push(`/search/${keyword}`)
      setKeyword(" ")
    }
  }
const menü=[
    {name:"About",
        url:"/about"
    },
    {name:"Sign In",
        url:"/url"
    }
]

  return (
    <div className='flex items-center gap-7 h-20'>
      <div className='bg-amber-600 p-3 text-2xl font-bold rounded-lg'>MovieApp
        
      </div>
      <div className='flex flex-1 rounded-lg items-center gap-2 border p-3 '>
        <input value={keyword} onKeyDown={searcFunc} onChange={e=>setKeyword(e.target.value)} className='outline-none flex-1  ' placeholder="Arama YApınız" type="text" />
        <BiSearch size={25}/>
      </div>
      <ThemComp/>
      {
        menü.map((mn,i)=><MenÜItem mn={mn}/>)
      }
      
    </div>
  
    );}

export default Header
