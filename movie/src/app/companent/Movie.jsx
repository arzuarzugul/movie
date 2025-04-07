"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

const Movie = ({ dt }) => {
  const router = useRouter(); // useRouter fonksiyonunu çağırıyoruz

  // Konsol loglama
  console.log(dt);

  return (
    <div onClick={() => router.push(`/movie/${dt.id}`)} className='min-w-[400px] relative imgContainer cursor-pointer'>
      <img 
        src={`https://image.tmdb.org/t/p/w500${dt.poster_path}`} 
        alt={dt.title || dt.name || dt.original_name} // Film adı
        className='w-[470px] h-[300px] object-cover' 
      />
      <div className='absolute bottom-0 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity p-3 text-2xl text-white font-bold'>
        <div className='text-2xl font-bold'>{dt?.release_date} / {dt?.vote_average}</div>
        <div>
          {dt?.title || dt?.name || dt?.original_title}
        </div>
      </div>
    </div>
  );
}

export default Movie;