import React from 'react'
import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs'
import { FaBarsStaggered } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import NavLinks from './NavLinks'
import { useState } from 'react'
const themes = {
  sunset: 'sunset',
  silk: 'silk',
}
const NavBar = () => {
  const [theme, setTheme] = useState(themes.silk)
  const handleTheme = () => {
    const { sunset, silk } = themes
    const newTheme = theme === sunset ? silk : sunset
    document.documentElement.setAttribute('data-theme', theme)
    setTheme(newTheme)
  }
  return (
    <nav className='bg-base-200'>
      <div className='navbar align-element'>
        <div className='navbar-start'>
          <NavLink
            to='/'
            className='hidden lg:flex btn btn-primary text-3xl items-center '
          >
            C
          </NavLink>
          <div className='dropdown'>
            <label htmlFor='' tabIndex={0} className='btn btn-ghost lg:hidden'>
              <FaBarsStaggered className='h-6 w-6' />
            </label>
            <ul
              className='menu menu-sm dropdown-content mt-3 z-1 bg-base-200 p2 shadow rounded-box w-52'
              tabIndex={0}
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal '>
            <NavLinks />
          </ul>
        </div>
        <div className='navbar-end'>
          <label className='swap swap-rotate'>
            <input type='checkbox' onChange={handleTheme} />
            <BsSunFill className='swap-on h-4 w-4' />
            <BsMoonFill className='swap-off h-4 w-4' />
          </label>
          <NavLink to='/cart' className='btn btn-ghost btn-circle btn-md ml-4'>
            <div className='indicator'>
              <BsCart3 className='h-6 w-6' />
              <span className='badge badge-sm badge-primary indicator-item'>
                3
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
