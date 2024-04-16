import React from 'react'

export default function Footer() {
  return (
    <footer >
      <a href="https://www.themoviedb.org/" className='tmdb'><img src="/logo-short.svg" alt="logo of TMDB" /></a>        
      <div className='api'>
        <a href="https://developer.themoviedb.org/docs/faq" className='link'>About TMDB</a>        
        <a href="https://www.themoviedb.org/terms-of-use" className='link'>Terms of use</a>
        <a href="https://www.themoviedb.org/api-terms-of-use" className='link'>API terms of use</a>
      </div>
      <div className='developer'>
        <a href="" className='link'>About the developer</a>
        <a href="https://github.com/casl0x/movieBrowser" className='link'>Repository of the project</a>        
      </div>
    </footer>
  )
}
