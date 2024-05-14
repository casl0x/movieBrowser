import React from 'react'
import { Link } from 'react-router-dom';
import { Banner } from '../components/Banner'
import Upcoming from '../components/Upcoming'
import NowPlaying from '../components/NowPlaying'
import PopularMovies from '../components/PopularMovies'
import PopularSeries from '../components/PopularSeries'

export default function Home() {
  return (
    <>
        <Banner />
        <Upcoming />
        <NowPlaying />
        <PopularMovies />
        <PopularSeries />
        <div className='more'>
            <p>You've seen it all!</p>
            <div>
              <Link to={'/movie'} className='more-movie btn'>Seen more movies</Link>
              <Link to={'/tv'} className='more-serie btn'>Seen more series</Link>
            </div>
        </div>
    </>

  )
}
