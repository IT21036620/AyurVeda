import React, { useState } from 'react'
import SideBar from '../../components/buyer/sideBar'
import Home from '../Home'
import Dashboard from './Dashboard'
import AccountInfo from '../../components/buyer/accountInfo.js'
import Reviews from '../../components/buyer/reviewList'
import OrderList from '../../components/buyer/orderList'

// const Dashboard = () => <div>Dashboard Content</div>
const Orders = () => <div>Orders Content</div>
// const Reviews = () => <div>Reviews Content</div>

const AccountPage = () => {
  const [activeComponent, setActiveComponent] = useState('dashboard')

  const handleNavigation = (component) => {
    setActiveComponent(component)
  }

  const renderComponent = () => {
    switch (activeComponent) {
      case 'dashboard':
        return <Dashboard />
      case 'orders':
        return <OrderList />
      case 'reviews':
        return <Reviews buyerId={'123456789012345678901630'} />
      case 'account-info':
        return <AccountInfo />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex">
      <div className="w-3/4 p-4">{renderComponent()}</div>
      <div className="w-1/4">
        <SideBar onNavigate={handleNavigation} />
      </div>
    </div>
  )
}

export default AccountPage
