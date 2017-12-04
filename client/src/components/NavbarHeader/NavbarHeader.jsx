import React from 'react'

import { NavLink } from 'react-router-dom'

import './NavbarHeader.css'

const NavbarHeader = () => {
  return (
    <div className='navbar-content'>
      <ul className='navbar-ul'>
        <li className='navbar-li navbar-title'><NavLink className='navbar-a' to='/' >Ana Fernández</NavLink></li>
        <li className='navbar-li'><NavLink className='navbar-a' to='/collections' >Colecciones</NavLink></li>
        <li className='navbar-li'><NavLink className='navbar-a' to='/about' >Conóceme</NavLink></li>
        <li className='navbar-li'><NavLink className='navbar-a' to='/contact' >Contacto</NavLink></li>
      </ul>
    </div>
  )
}

export default NavbarHeader
