import React from 'react'
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <ul className="nav nav-tabs">
  <li className="nav-item">
    <NavLink to='/Home' className="nav-link active" aria-current="page" href="#">Home</NavLink>
  </li>
  <li className="nav-item">
    <NavLink to='/CreateForm' className="nav-link" href="#">Create Card</NavLink>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Profile</a>
  </li>
</ul>
  )
}

export default Header