import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import BuyerRoutes from './buyerRoutes'
import AdminRoutes from './adminRoutes'
import DeliveryRoutes from './deliveryRoutes'

const IndexRoutes = () => {
  return (
    <div>
      {/* <BuyerRoutes /> */}
      <AdminRoutes />
      <DeliveryRoutes />
    </div>
  )
}

export default IndexRoutes
