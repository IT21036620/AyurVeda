import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import BuyerRoutes from './buyerRoutes'
import CartRoutes from './cartRoutes'

const IndexRoutes = () => {
  return (
    <div>
      {/* <BuyerRoutes /> */}
      <CartRoutes />
    </div>
  )
}

export default IndexRoutes
