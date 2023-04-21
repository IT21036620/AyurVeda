import React, { useState } from 'react'
import SideBar from '../../components/buyer/sideBar'
import Home from '../Home'

const Dashboard = () => <div>Dashboard Content</div>
const Orders = () => <div>Orders Content</div>
const Reviews = () => <div>Reviews Content</div>
const AccountInfo = () => <div>Account Information Content</div>

const AccountPage = () => {
  const [activeComponent, setActiveComponent] = useState('dashboard')

  const handleNavigation = (component) => {
    setActiveComponent(component)
  }

  const renderComponent = () => {
    switch (activeComponent) {
      case 'dashboard':
        return <Home />
      case 'orders':
        return <Orders />
      case 'reviews':
        return <Reviews />
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
