import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import BuyerRoutes from './buyerRoutes'
import ErrorRoute from './errorRoute'
import ProductRoutes from './productRoutes'

const IndexRoutes = () => {
  return (
    <div>
      <BuyerRoutes />
      <ProductRoutes />
      {/* <ErrorRoute /> */}
    </div>
  )
}

export default IndexRoutes
