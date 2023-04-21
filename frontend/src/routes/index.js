import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import BuyerRoutes from './buyerRoutes'
import AdminRoutes from './adminRoutes'

const IndexRoutes = () => {
  return (
    <div>
      {/* <BuyerRoutes /> */}
      <AdminRoutes />
    </div>
  )
}

export default IndexRoutes
