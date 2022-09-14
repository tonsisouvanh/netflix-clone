import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import requests from '../api';

function Main() {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];



  useEffect(() => {
    axios.get(requests.requestPopular).then((res) => {
      setMovies(res.data?.results);
    })
  }, [])

  const truncateStr = (str, num) => {
    if (str?.length > num) {
      return str?.slice(0, num) + "...";
    }
    return str;
  }

  return (
    <div className='w-full h-[350px] md:h-[800px] text-white'>
      <div className="absolute w-full h-[350px] md:h-[800px] bg-gradient-to-r from-black"></div>
      <div className="w-full h-full">
        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
      </div>
      <div className='absolute flex flex-col space-y-2 w-full md:w-1/2 top-[10%] md:top-[20%] p-4 md:p-8'>
        <h1 className='text-white font-bold text-1xl mb-3 md:text-5xl'>{movie?.title}</h1>
        <div className='flex space-x-5 items-center'>
          <Link to={`/movie/${movie?.id}`}>
            <button className='border rounded-sm font-semibold bg-white hover:bg-white text-black py-2 px-5 md:py-4 md:px-7 md:text-lg'>Play</button>
          </Link>
          <button className='border rounded-sm font-semibold border-none text-white py-2 px-5 md:py-4 md:px-7 bg-[gray]/70 transition hover:opacity-90 md:text-lg'>Watch Later</button>
        </div>
        <p className='text-gray-400'>Release: {movie?.release_date}</p>
        <p className='text-sm md:text-lg text-gray-200 w-full'>{truncateStr(movie?.overview, 200)}</p>
      </div>
    </div>
  )
}

export default Main