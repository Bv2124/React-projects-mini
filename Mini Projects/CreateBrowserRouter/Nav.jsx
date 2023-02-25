import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>

        <Link to="/todos">Todos</Link>
      </nav>

      <p>
        We've introduced some fake async-aspects of routing here, so Keep an eye on the top-right
        hand corner to see when we're actively navigating.
      </p>
      <Outlet />
    </>
  )
}

export default Nav
