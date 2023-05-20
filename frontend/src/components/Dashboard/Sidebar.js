import React, { useState } from 'react'
import { FaLeaf } from 'react-icons/fa'
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from './libs/helpers/navigation'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { HiOutlineLogout } from 'react-icons/hi'

const linkClass =
  'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar() {
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleLogout = () => {
    // Perform logout action here (e.g., clearing user session)
    // Redirect to the login page
    window.location.href = '/login'
  }

  return (
    <div className="bg-neutral-900 w-60 p-3 flex flex-col text-white">
      <div className="flex items-center gap-2 px-1 py-3">
        <FaLeaf fontSize={24} color="#016a00" />
        <span className="text-neutral-100 text-lg">AyurVeda</span>
      </div>
      <div className="flex-1 py-2 flex flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
        <div>
          <div
            className={classNames('text-red-500 cursor-pointer', linkClass)}
            onClick={() => setShowConfirmation(true)}
          >
            <span className="text-xl">
              <HiOutlineLogout />
            </span>
            <button>Log Out</button>
          </div>
          {showConfirmation && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
              <div className="bg-white p-8 rounded-lg">
                <p>Are you sure you want to log out?</p>
                <div className="flex justify-end mt-4">
                  <button
                    className="text-red-500 px-4 py-2 rounded-md border border-red-500 mr-2"
                    onClick={() => setShowConfirmation(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="text-white bg-red-500 px-4 py-2 rounded-md"
                    onClick={handleLogout}
                  >
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function SidebarLink({ item }) {
  const { pathname } = useLocation()

  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path
          ? 'bg-neutral-700 text-white'
          : 'text-neutral-400',
        linkClass
      )}
    >
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  )
}
