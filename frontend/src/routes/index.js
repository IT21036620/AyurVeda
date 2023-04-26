import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import BuyerRoutes from './buyerRoutes'
import CartRoutes from './cartRoutes'
import ErrorRoute from './errorRoute'
import ProductRoutes from './productRoutes'


const IndexRoutes = () => {
  return (
    <div>

     
      <CartRoutes />

      <BuyerRoutes />
      <ProductRoutes />
      {/* <ErrorRoute /> */}

    </div>
  )
}

export default IndexRoutes
