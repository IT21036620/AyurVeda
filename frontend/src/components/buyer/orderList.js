import React, { useEffect, useState } from 'react'
import axios from 'axios'

const OrderList = ({ buyerId }) => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/orders/buyer/${buyerId}`
        )
        setOrders(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchOrders()
  }, [buyerId])

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-200 text-yellow-800'
      case 'Processing':
        return 'bg-blue-200 text-blue-800'
      case 'Shipped':
        return 'bg-green-200 text-green-800'
      case 'Delivered':
        return 'bg-gray-200 text-gray-800'
      default:
        return 'bg-gray-200 text-gray-800'
    }
  }

  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Orders</h2>
      {orders.length > 0 ? (
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="text-sm font-semibold text-gray-700 p-2">
                Order ID
              </th>
              <th className="text-sm font-semibold text-gray-700 p-2">
                Total Price
              </th>
              <th className="text-sm font-semibold text-gray-700 p-2">Date</th>
              <th className="text-sm font-semibold text-gray-700 p-2">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="hover:bg-gray-100">
                <td className="p-2 border-t border-gray-300">{order._id}</td>
                <td className="p-2 border-t border-gray-300">
                  ${order.totalPrice}
                </td>
                <td className="p-2 border-t border-gray-300">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
                <td
                  className={`p-2 border-t border-gray-300 ${getStatusColor(
                    order.status
                  )}`}
                >
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-600">No orders yet.</p>
      )}
    </div>
  )
}

export default OrderList
