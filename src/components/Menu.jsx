import React from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'

function Menu() {
  return (
    <nav>
      <NavLink to='/' exact activeClassName='selected'>Usuarios</NavLink>
      <NavLink to='/tareas' activeClassName='selected'>Tareas</NavLink>
    </nav>
  )
}

export default Menu
