import React from 'react';
import { Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import WatchList from './pages/WatchList';
import Genre from './pages/Genre';

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Genre" element={<Genre />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/watchlist" element={<WatchList />} />
        </Routes>
        <Footer />
    </div>
  )
}


