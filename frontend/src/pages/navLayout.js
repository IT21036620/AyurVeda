import React from 'react'
import Navbar from '../components/navbar'
import { Outlet } from 'react-router-dom'

export default function navLayout() {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  )
}
