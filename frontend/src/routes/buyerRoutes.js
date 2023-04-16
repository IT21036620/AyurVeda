import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'

const buyerRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/buyer" element={<Home />} />
        <Route path="/buyer/home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default buyerRoutes
