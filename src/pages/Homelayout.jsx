import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, NavBar } from '../components'
const Homelayout = () => {
  return (
    <>
      <Header />
      <NavBar />
      <section className='align-element'>
        <Outlet />
      </section>
    </>
  )
}

export default Homelayout
