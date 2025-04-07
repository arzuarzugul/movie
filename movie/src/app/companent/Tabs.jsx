"use client"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';
import React from 'react'

const Tabs = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');
  console.log(genre);

  const tabs = [
    { name: "En Popüler", url: "popular" },
    { name: "En Son", url: "latest" },
    { name: "Yakında Gelecekler", url: "upcoming" }
  ];

  return (
    <div className='p-5 m-5 flex items-center justify-center bg-gray-100 dark:bg-gray-900 gap-7'>
      {tabs.map((tab, i) => (
        <Link 
          key={i} 
          href={`/?genre=${tab.url}`}  
          className={`cursor-pointer hover:opacity-75 transition-opacity ${tab.url === genre ? "underline underline-offset-8 text-amber-600" : ""}`}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
}

export default Tabs;
