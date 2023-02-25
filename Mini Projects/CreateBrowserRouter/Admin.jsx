import React from 'react'
import { Navigate } from 'react-router-dom'

const Admin = (props) => {
  if (!props.role) {
    console.log('not an admin')
    return <Navigate to={'/home'} replace />
  }

  return (
    <>
      <p>Admin only</p>
    </>
  )
}

export default Admin
