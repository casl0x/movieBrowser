import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faInfo, faPlay, faStar } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} className="icon favorite" />
      </Link>
      <Link to="/favorite">
        <FontAwesomeIcon icon={faStar} className="icon favorite" />
      </Link>
      <Link to="/watchlist">
        <FontAwesomeIcon icon={faPlay} className="icon favorite" />
      </Link>
      <Link to="/about">
        <FontAwesomeIcon icon={faInfo} className="icon favorite" />
      </Link>
    </nav>
  )
}
