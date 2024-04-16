import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const isMobile = useMediaQuery({maxWidth: "768px"});
  const listClassName = isMobile ? "navbar-list" : "dk-nav-list";
  const iconClassName = isMobile ? "toggle" : "no-icon"

  const toggleActive = () => {
    setIsActive(!isActive);
  }

  return (
    <header className='header'>
      <nav className='navbar'>
        <div className="navbar-container">
          <ul className={`${listClassName} ${isActive ? "active" : ""}`}>
            <li className="navbar-item">
              <Link to="/" onClick={toggleActive} className='navlink'>
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/favorite" onClick={toggleActive} className='navlink'>
                Favorite
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/watchlist" onClick={toggleActive} className='navlink'>
                Watchlist
              </Link>
            </li>
          </ul>
          <div className='navbar-icon' onClick={toggleActive}>
            {isActive ? (
                <div className={iconClassName}  onClick={toggleActive}>
                  <FontAwesomeIcon icon={faXmark}/> {" "}
                </div>          
            ) : (
                <div className={iconClassName} onClick={toggleActive}>
                  <FontAwesomeIcon icon={faBars}/>
                </div>                       
            )}
          </div>          
        </div>
      </nav>      
    </header>
  )
}
