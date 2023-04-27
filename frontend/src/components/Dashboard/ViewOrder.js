import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import Select from 'react-select'

const options = [
  { value: 'pending', label: 'pending' },
  { value: 'confirmed', label: 'confirmed' },
  { value: 'dispatched', label: 'dispatched' },
  { value: 'delivered', label: 'delivered' },
]

const optionsPlain = ['pending', 'confirmed', 'dispatched', 'delivered']

export default function ViewOrder() {
  const location = useLocation()
  const id = location.state

  const [order, setOrder] = useState({})
  const [statusIndex, setStatusIndex] = useState({})
  const [statusVal, setStatusVal] = useState()

  useEffect(() => {
    function getOrder() {
      axios
        .get(`http://localhost:3000/api/v1/orders/${id}`)
        .then((res) => {
          console.log(res.data.order)
          setOrder(res.data.order)
        })
        .catch((err) => {
          alert(err.message)
        })
    }

    getOrder()
  }, [order])

  useEffect(() => {
    setStatusIndex({
      value: options[getStatusIndex(order.status)],
      label: options[getStatusIndex(order.status)],
    })
  }, [statusIndex])

  function sendData(e) {
    e.preventDefault() // to execute only the function "sendData" without submitting data.

    const updateOrder = {
      status: statusVal,
    }
    // console.log(updateEvent)
    //input any authentications are needed
    //(path,function needed to execute)
    axios
      .patch(`http://localhost:3000/api/v1/orders/${id}`, updateOrder)
      .then(() => {
        alert('Event Edited')
      })
      .catch((err) => {
        alert(err)
      })
  }

  const handleSubmit = () => {
    alert(statusVal)
  }

  return (
    // <div className="flex flex-col">
    //   <div style={{ backgroundColor: getRandom() }}>Order</div>
    //   <h1>{state.customer_name}</h1>
    //   <h3>{state.order_total}</h3>
    // </div>

    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Orders
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Dashboard/ Orders / Update Order
        </p>
      </div>
      <div className="mt-6 border-2 border-gray-600 px-2 rounded-md">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Full name
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <input value={id} readOnly={true} disabled />
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Application for
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {/* {statusIndex.value} */}
              {statusVal}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Email address
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {order.status}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Salary expectation
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {order.totalPrice}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid  sm:gap-4 sm:px-0 flex-1 col-span-full">
            <details className="bg-slate-100 shadow rounded group p-1">
              <summary className="text-sm font-medium leading-6 text-gray-900  list-none flex flex-wrap items-center cursor-pointer">
                <span className="flex-1">Items</span>
                <div className="border-8 border-transparent ml-2 border-l-gray-600 group-open:rotate-90 transition-transform origin-left"></div>
              </summary>
              <div className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-3 sm:mt-0 w-full">
                <ul>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                </ul>
              </div>
            </details>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Status
            </dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {/* {setStatusIndex(optionsPlain.indexOf(order.status))} */}
              <select
                // key={`${Math.floor(Math.random() * 1000)}-min`}
                key={order.status}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                defaultValue={String(order.status)}
                value={statusVal}
                onChange={(e) => setStatusVal(e.target.value)}
              >
                <option value="pending">pending</option>
                <option value="confirmed">confirmed</option>
                <option value="dispatched">dispatched</option>
                <option value="delivered">delivered</option>
              </select>
            </dd>
          </div>
        </dl>
      </div>
      <div className="p-4  col-span-full flex flex-row-reverse">
        <button
          class="bg-green-900 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-700 rounded justify-items-end"
          onClick={sendData}
        >
          Confirm
        </button>
      </div>
    </div>
  )
}

function getStatusIndex(status) {
  return parseInt(optionsPlain.indexOf(status))
}
