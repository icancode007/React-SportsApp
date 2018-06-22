import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = ()=>(

  <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand">
      <img src={require('../../styles/kobe.gif')} alt='kobe is the logo' className="comparePlayerIcon"/>
    </a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav mr-auto mt-2 mt-md-0">
        <li className="nav-item active">
        <Link to='/' className='nav-link'> Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link to='/player/201566' className='nav-link'> Players</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </nav>
)
export default NavBar;
