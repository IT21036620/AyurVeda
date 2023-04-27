import React, { useContext, useState, useEffect } from 'react'
import CartContext from './CartContext'
import axios from 'axios'

export default function OrderSummary() {
  const { cartTotal } = useContext(CartContext)
  const [commission, setCommission] = useState(0)
  const { TotalFinal, setTotalFinal, paymentsucces } = useContext(CartContext)

  const fetchCommission = async (totalPrice) => {
    try {
      const response = await axios.post(
        'http://localhost:3003/api/v1/cart/commission',
        {
          totalPrice,
        }
      )
      setCommission(response.data.commission)
    } catch (error) {
      console.error(error)
    }
  }

  // useEffect(() => {
  //   fetchCommission(cartTotal) // pass your desired total price value here
  // }, [cartTotal])

  useEffect(() => {
    fetchCommission(cartTotal) // pass your desired total price value here
    setTotalFinal(cartTotal + 540 + commission)
  }, [cartTotal])

  const handleCheckout = () => {
    paymentsucces ? alertok() : alert('Please Pay')
  }

  const alertok = async () => {
    const data = { userID: '1' }

    const response = await axios.post(
      'http://localhost:3003/api/v1/cart/cartcomplete',
      data
    )

    const custid = response
    const data2 = {
      order_id: 'testing with cust id 2',
      deliveryid: '643ab55dc99c5c2c4c78f55e',
      cartID: 'custid',
      customerid: '6442335c26c1890f7a771907',
      status: 'pending',
      totalPrice: 100,
    }

    const response2 = await axios.post(
      'http://localhost:3006/api/v1/orders',
      data2
    )
  }

  return (
    <div class=" p-4">
      <h2 class="font-bold text-lg mb-4 pb-2 pt-2">Order Summary</h2>
      <div class="flex justify-between mb-2">
        <span>Items Total</span>
        <span>Rs.{cartTotal.toFixed(2)}</span>
      </div>
      <div class="flex justify-between mb-2 pb-2">
        <span class="font-medium">Site Commission</span>
        <span class="text-green-500">Rs.{commission.toFixed(2)}</span>
      </div>

      <hr class="border border-b border-gray-200 "></hr>

      <div class="flex justify-between mb-2 pt-2">
        <span class="font-bold">Subtotal</span>
        <span>Rs.{(cartTotal + cartTotal * 0.05).toFixed(2)}</span>
      </div>
      <div class="flex justify-between mb-2 pb-2">
        <span>
          Shipping <br></br>
          <span class="text-[12px] border-gray-50">
            Duties & Taxes may be collected at delivery.
          </span>
        </span>
        <span>Rs.540.00</span>
      </div>

      <hr class="border border-b border-gray-200 "></hr>

      <div class="flex justify-between font-bold pt-2">
        <span>Total:</span>
        <span>Rs.{TotalFinal}</span>
      </div>
      <button
        onClick={handleCheckout}
        class="bg-green-600 text-white px-4 py-2 mt-4 rounded hover:bg-green-700 h-11 w-80"
      >
        Checkout
      </button>
    </div>
  )
}
