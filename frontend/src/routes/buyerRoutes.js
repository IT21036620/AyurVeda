import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import AccountPage from '../pages/buyer/AccountPage'

const buyerRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buyer/account" element={<AccountPage />} />
      </Routes>
    </div>
  )
}

export default buyerRoutes
