import React from 'react'
import { useLocation } from 'react-router-dom'

export default function ViewOrder() {
  const location = useLocation()
  const state = location.state
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
              <input value={state.customer_name} readOnly={true} disabled />
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Application for
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Backend Developer
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Email address
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              margotfoster@example.com
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Salary expectation
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              $120,000
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
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
            </dd>
          </div>
        </dl>
      </div>
      <div className="p-4  col-span-full flex flex-row-reverse">
        <button class="bg-green-900 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-700 rounded justify-items-end">
          Confirm
        </button>
      </div>
    </div>
  )
}
