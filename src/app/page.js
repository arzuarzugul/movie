import React from 'react';
import Movie from './companent/Movie';
 

const Page = async ({ searchParams }) => {
  const res = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"}?api_key=92bdd6e7310e47b85ac8f2a8cb43f07d`);
  const data = await res.json();
  
  return (
    <div className='flex items-center justify-center flex-wrap gap-3'>
      {
        data?.results?.map((dt, i) => 
          <Movie key={i} dt={dt} />
        )
      }
    </div>
  );
}

export default Page;