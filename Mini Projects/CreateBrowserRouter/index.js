import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import reportWebVitals from './reportWebVitals'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import Todos from './Todos'
import Event from './Event'
import Router from './Router'
import Admin from './Admin'
import NoMatch from './NoMatch'

// Imagine we get token from server
let user = 'admin'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Router />,
    children: [
      {
        path: '/home',
        element: <Home />,
        children: [
          {
            path: '/home/event',
            element: <Event />
          },
          {
            path: '/home/event2',
            element: <Event titre="2" />
          }
        ]
      },
      {
        path: '/todos',
        element: <Todos />
      },
      {
        path: '/admin',
        element: <Admin role={user} />,
        role: 'admin'
      },
      { path: '*', element: <NoMatch /> },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
