import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Router = () => {
  // Simulate Fetch
  let role = 'admin'

  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={`/home`}>Home</Link>
            </li>
            <li>
              <Link to={`/todos`}>Todos</Link>
            </li>
            {role === 'admin' ? (
              <li>
                <Link to={`/admin`}>Admin</Link>
              </li>
            ) : (
              ''
            )}
          </ul>
        </nav>

        <hr />

        <Outlet />
      </div>
    </>
  )
}

export default Router
