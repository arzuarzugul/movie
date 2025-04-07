
import Movie from '@/app/companent/Movie';
import React from 'react';

const Page = async ({ params }) => {
    const keyword = params.keyword;
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=92bdd6e7310e47b85ac8f2a8cb43f07d&query=${keyword}`);
    
    // JSON verisini al
    const data = await res.json();

    return (
        <div className='flex  flex-wrap items-center gap-4 justify-center'>
            {
                // Eğer data.results varsa, haritalayıp göster
                data.results && data.results.length > 0 ? (
                    data.results.map((dt, i) => (
                        <Movie key={i} dt={dt} />
                    ))
                ) : (
                    <div>Sonuç bulunamadı.</div>
                )
            }
        </div>
    );
}

export default Page;