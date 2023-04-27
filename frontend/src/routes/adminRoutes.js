import { Routes, Route } from 'react-router-dom'
import Layout from '../pages/Layout'
import Dashboard from '../components/Dashboard/Dashboard'
import Sellers from '../components/Dashboard/Sellers'
import ViewOrder from '../components/Dashboard/ViewOrder'

export default function adminRoutes() {
  return (
    <Routes>
      <Route path="/admin" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="sellers" element={<Sellers />} />
        <Route path="order" element={<ViewOrder />} />
      </Route>
    </Routes>
  )
}
