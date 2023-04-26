// import React from 'react'

// const SideBar = ({ onNavigate }) => {
//   return (
//     <div className="w-64 bg-green-100 text-green-700  ">
//       <h2 className="font-bold text-xl mb-4">My Account</h2>
//       <ul>
//         <li>
//           <button
//             onClick={() => onNavigate('dashboard')}
//             className="py-1 px-2 hover:bg-green-200"
//           >
//             Dashboard
//           </button>
//         </li>
//         <li>
//           <button
//             onClick={() => onNavigate('orders')}
//             className="py-1 px-2 hover:bg-green-200"
//           >
//             Orders
//           </button>
//         </li>
//         <li>
//           <button
//             onClick={() => onNavigate('reviews')}
//             className="py-1 px-2 hover:bg-green-200"
//           >
//             Reviews
//           </button>
//         </li>
//       </ul>
//       <h2 className="font-bold text-xl mt-4 mb-4">Settings</h2>
//       <ul>
//         <li>
//           <button
//             onClick={() => onNavigate('account-info')}
//             className="py-1 px-2 hover:bg-green-200"
//           >
//             Account Information
//           </button>
//         </li>
//       </ul>
//     </div>
//   )
// }

// export default SideBar

import React from 'react'
import { Outlet, Route, Link, BrowserRouter, Routes } from 'react-router-dom'
import {
  FaTachometerAlt,
  FaShoppingCart,
  FaComment,
  FaUser,
} from 'react-icons/fa'
import { RxDashboard } from 'react-icons/rx'

const Dashboard = () => <div>Dashboard Content</div>
const Orders = () => <div>Orders Content</div>
const Reviews = () => <div>Reviews Content</div>
const AccountInfo = () => <div>Account Information Content</div>

const Sidebar = ({ onNavigate }) => {
  return (
    <div className="flex">
      <div className="bg-white w-64 h-screen border">
        <ul className="divide-y divide-gray-200">
          <li>
            {/* <Link
              to="/dashboard"
              className="block p-4 w-full hover:bg-gray-100 text-gray-600 font-medium flex items-center"
            >
              <FaHome className="mr-2" />
              Dashboard
            </Link> */}
            <button
              onClick={() => onNavigate('dashboard')}
              className="block p-4 w-full hover:bg-gray-100 text-gray-600 font-medium flex items-center"
            >
              <RxDashboard className="mr-2" />
              Overview
            </button>
          </li>
          <li>
            {/* <Link
              to="/account-info"
              className="block p-4 w-full hover:bg-gray-100 text-gray-600 font-medium flex items-center"
            >
              <FaCog className="mr-2" />
              Account Information
            </Link> */}
            <button
              onClick={() => onNavigate('account-info')}
              className="block p-4 w-full hover:bg-gray-100 text-gray-600 font-medium flex items-center"
            >
              <FaUser className="mr-2" />
              My Profile
            </button>
          </li>
          <li>
            {/* <Link
              to="/orders"
              className="block p-4 w-full hover:bg-gray-100 text-gray-600 font-medium flex items-center"
            >
              <FaShoppingCart className="mr-2" />
              Orders
            </Link> */}
            <button
              onClick={() => onNavigate('orders')}
              className="block p-4 w-full hover:bg-gray-100 text-gray-600 font-medium flex items-center"
            >
              <FaShoppingCart className="mr-2" />
              My Orders
            </button>
          </li>
          <li>
            {/* <Link
              to="/reviews"
              className="block p-4 w-full hover:bg-gray-100 text-gray-600 font-medium flex items-center"
            >
              <FaComment className="mr-2" />
              Reviews
            </Link> */}
            <button
              onClick={() => onNavigate('reviews')}
              className="block p-4 w-full hover:bg-gray-100 text-gray-600 font-medium flex items-center"
            >
              <FaComment className="mr-2" />
              Reviews
            </button>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        {/* <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/account-info" element={<AccountInfo />} />
        </Routes> */}
      </div>
    </div>
  )
}

export default Sidebar

// import React from 'react'
// import { Outlet, Route, Link, BrowserRouter, Routes } from 'react-router-dom'
// import Dashboard from '../../pages/buyer/Dashboard'
// // import Orders from './Orders';
// // import Reviews from './Reviews';
// // import AccountInfo from './AccountInfo';
// import { FaHome, FaShoppingCart, FaComment, FaCog } from 'react-icons/fa'

// const Orders = () => <div>Orders Content</div>
// const Reviews = () => <div>Reviews Content</div>
// const AccountInfo = () => <div>Account Information Content</div>

// const Sidebar = () => {
//   return (
//     <div className="flex">
//       <div className="bg-white w-64 h-screen border">
//         <ul className="divide-y divide-gray-200">
//           <li>
//             <Link
//               to="/dashboard"
//               className="block p-4 w-full hover:bg-gray-100 text-gray-600 font-medium flex items-center"
//             >
//               <FaHome className="mr-2" />
//               Dashboard
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/orders"
//               className="block p-4 w-full hover:bg-gray-100 text-gray-600 font-medium flex items-center"
//             >
//               <FaShoppingCart className="mr-2" />
//               Orders
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/reviews"
//               className="block p-4 w-full hover:bg-gray-100 text-gray-600 font-medium flex items-center"
//             >
//               <FaComment className="mr-2" />
//               Reviews
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/account-info"
//               className="block p-4 w-full hover:bg-gray-100 text-gray-600 font-medium flex items-center"
//             >
//               <FaCog className="mr-2" />
//               Account Information
//             </Link>
//           </li>
//         </ul>
//       </div>
//       <div className="flex-1">
//         <Routes>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/orders" element={<Orders />} />
//           <Route path="/reviews" element={<Reviews />} />
//           <Route path="/account-info" element={<AccountInfo />} />
//         </Routes>
//       </div>
//     </div>
//   )
// }

// export default Sidebar
