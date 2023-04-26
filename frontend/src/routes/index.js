import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import BuyerRoutes from './buyerRoutes'
import CartRoutes from './cartRoutes'
import ErrorRoute from './errorRoute'
import ProductRoutes from './productRoutes'
import PaymentRoutes from './paymentRoutes'

const IndexRoutes = () => {
  return (
    <div>
      <CartRoutes />

      <BuyerRoutes />
      <ProductRoutes />
      <PaymentRoutes />
      {/* <ErrorRoute /> */}
    </div>
  )
}

export default IndexRoutes
