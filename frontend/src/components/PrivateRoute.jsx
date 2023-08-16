/* eslint-disable no-unused-vars */
// import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

// We Check here if the user is logged in

const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth)
  return userInfo ? <Outlet /> : <Navigate to='/login' replace />
}

export default PrivateRoute
