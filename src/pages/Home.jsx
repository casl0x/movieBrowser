import React from 'react'
import { Banner } from '../components/Banner'
import Upcoming from '../components/Upcoming'
import PopularMovies from '../components/PopularMovies'
import PopularSeries from '../components/PopularSeries'

export default function Home() {
  return (
    <>
        <Banner />
        <Upcoming />
        <PopularMovies />
        <PopularSeries />
    </>

  )
}
