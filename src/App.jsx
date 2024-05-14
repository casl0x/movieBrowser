import React from 'react';
import { Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Movie from './pages/Movie';
import AllMovie from './pages/AllMovie';
import Genres from './components/Genres';
import Serie from './pages/Serie';
import AllSerie from './pages/AllSerie';
import Favorite from './pages/Favorite';
import WatchList from './pages/WatchList';

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie" element={<AllMovie />} />
            <Route path="/tv" element={<AllSerie />} />
            <Route path="/movie/:movieId" element={<Movie />} />
            <Route path="/movie/:genreId" element={<Genres />} />
            <Route path="/tv/:tvId" element={<Serie />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/watchlist" element={<WatchList />} />
        </Routes>
        <Footer />
    </div>
  )
}


