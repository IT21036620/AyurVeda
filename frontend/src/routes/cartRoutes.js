import { Routes, Route } from 'react-router-dom'
import Cart from '../components/order/CartPage'

const cartRoutes = () => {
  return (
    <Routes>
      <Route path="cart" element={<Cart />} />
    </Routes>
  )
}

export default cartRoutes
