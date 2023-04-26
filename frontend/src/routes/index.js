import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import BuyerRoutes from './buyerRoutes'
<<<<<<< HEAD
import AdminRoutes from './adminRoutes'
import DeliveryRoutes from './deliveryRoutes'
import LoginRoutes from './loginRoutes'
=======
import CartRoutes from './cartRoutes'
import ErrorRoute from './errorRoute'
import ProductRoutes from './productRoutes'
import PaymentRoutes from './paymentRoutes'
>>>>>>> origin/dev

const IndexRoutes = () => {
  return (
    <div>
<<<<<<< HEAD
      {/* <BuyerRoutes /> */}
      <AdminRoutes />
      <DeliveryRoutes />
      <LoginRoutes />
=======
      <CartRoutes />

      <BuyerRoutes />
      <ProductRoutes />
      <PaymentRoutes />
      {/* <ErrorRoute /> */}
>>>>>>> origin/dev
    </div>
  )
}

export default IndexRoutes
