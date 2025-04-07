import React from 'react';

const getMovie = async (id) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=92bdd6e7310e47b85ac8f2a8cb43f07d`);
  
  if (!res.ok) {
    throw new Error('API Hatası: ' + res.statusText);
  }
  
  return await res.json();
}

const Page = async ({ params }) => {
  const id = params.id;
  const movieDetail = await getMovie(id);

  return (
    <div className='relative p-7 min-h-screen relative'>
      <img 
        src={`https://image.tmdb.org/t/p/w500${movieDetail?.backdrop_path}`} 
        alt={movieDetail.title || movieDetail.name || movieDetail.original_name} // Film adı
        className=' w-full object-cover object-cover' 
      />
    <div className='absolute p-5 top-20 pr-20 xl:text-xl'>
    <div className='text-4xl font-bold  my-3 '>{movieDetail.title}</div>
    <div className='max-w-2xl'>{movieDetail.overview}</div>
    <div className='text-l font-bold'>{movieDetail?.release_date} / {movieDetail?.vote_average}</div>
    <div className='border w-24 p-2  bg-amber-600 hover:bg-black hover:text-amber-600 font-bold my-2 rounded-md text-center text-lg cursor-pointer'>Trail</div>
        
    </div>
    
    </div>
  );
}

export default Page;