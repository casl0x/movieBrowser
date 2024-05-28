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
            <h3 className='more-title'>You've seen it all !</h3>
            <div className='more-button'>
              <button className='btn'><Link to={'/movie'} className='btn-text'>Seen more movies</Link></button>
              <button className='btn'><Link to={'/tv'} className='btn-text'>Seen more series</Link></button>
            </div>
        </div>
    </>

  )
}
