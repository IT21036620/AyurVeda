import { Routes, Route } from 'react-router-dom'
import Cart from '../components/order/CartPage'
import Pay from '../components/order/Test'

const cartRoutes = () => {
  return (
    <Routes>
      <Route path="cart" element={<Cart />} />
      <Route path="pay" element={<Pay />} />
    </Routes>
  )
}

export default cartRoutes
