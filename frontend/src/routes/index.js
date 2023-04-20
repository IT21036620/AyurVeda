import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import BuyerRoutes from './buyerRoutes'
import ErrorRoute from './errorRoute'

const IndexRoutes = () => {
  return (
    <div>
      <BuyerRoutes />
      <ErrorRoute />
    </div>
  )
}

export default IndexRoutes
