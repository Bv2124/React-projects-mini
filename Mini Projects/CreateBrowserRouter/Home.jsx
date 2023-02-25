import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <p>Home</p>
      <Link to={`/home/event`}>Event</Link>
      <Link to={`/home/event2`}>Event2</Link>
      <Outlet />
    </>
  )
}

export default Home
