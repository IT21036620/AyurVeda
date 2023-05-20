import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import BuyerRoutes from './buyerRoutes'
import AdminRoutes from './adminRoutes'
import DeliveryRoutes from './deliveryRoutes'
import LoginRoutes from './loginRoutes'
import CartRoutes from './cartRoutes'
import ErrorRoute from './errorRoute'
import ProductRoutes from './productRoutes'
import SellerRoutes from './sellerRoutes'
import PaymentRoutes from './paymentRoutes'
import Navbar from '../components/navbar'
import navLayout from '../pages/navLayout'

const IndexRoutes = () => {
  return (
    <div>
      <AdminRoutes />
      <LoginRoutes />

      <DeliveryRoutes />
      <CartRoutes />
      <BuyerRoutes />
      <ProductRoutes />
      <PaymentRoutes />
      <SellerRoutes />

      {/* <ErrorRoute /> */}
    </div>
  )
}

export default IndexRoutes
