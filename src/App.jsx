import React from 'react';
import { Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import WatchList from './pages/WatchList';
import About from './pages/About';

// components
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app">
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/watchlist" element={<WatchList />} />
            <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
    </div>
  )
}


