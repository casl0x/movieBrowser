import React from 'react'

export default function Footer() {
  return (
    <footer >
      <a href="https://www.themoviedb.org/" className='tmdb'><img src="/logo-short.svg" alt="logo of TMDB" /></a>        
      <div className='api-link'>
        <a href="https://www.themoviedb.org/terms-of-use">Terms of use</a>
        <a href="https://www.themoviedb.org/api-terms-of-use">API terms of use</a>
        <a href="https://developer.themoviedb.org/docs/faq">About TMDB</a>
      </div>
    </footer>
  )
}
