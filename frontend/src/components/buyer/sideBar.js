import React from 'react'

const SideBar = ({ onNavigate }) => {
  return (
    <div className="w-64 bg-green-100 text-green-700 p-4 fixed right-0 h-screen ">
      <h2 className="font-bold text-xl mb-4">My Account</h2>
      <ul>
        <li>
          <button
            onClick={() => onNavigate('dashboard')}
            className="py-1 px-2 hover:bg-green-200"
          >
            Dashboard
          </button>
        </li>
        <li>
          <button
            onClick={() => onNavigate('orders')}
            className="py-1 px-2 hover:bg-green-200"
          >
            Orders
          </button>
        </li>
        <li>
          <button
            onClick={() => onNavigate('reviews')}
            className="py-1 px-2 hover:bg-green-200"
          >
            Reviews
          </button>
        </li>
      </ul>
      <h2 className="font-bold text-xl mt-4 mb-4">Settings</h2>
      <ul>
        <li>
          <button
            onClick={() => onNavigate('account-info')}
            className="py-1 px-2 hover:bg-green-200"
          >
            Account Information
          </button>
        </li>
      </ul>
    </div>
  )
}

export default SideBar
