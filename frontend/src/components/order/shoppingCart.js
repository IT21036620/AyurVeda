import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function ShoppingCart() {
  const [quantity, setQuantity] = useState(1)
  const [totalPrice, setTotalPrice] = useState(9.99)

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value)
    setQuantity(newQuantity)
    setTotalPrice(newQuantity * 9.99)
  }

  //view all quizzes function//
  const [carts, setCart] = useState([]) //taking all the datas from mongoDB input into this array
  // const params = useParams();
  useEffect(() => {
    function getCart() {
      axios
        .get('http://localhost:3000/api/v1/cart')
        .then((res) => {
          console.log('your data has been received')
          console.log(res.data)

          setCart(res.data) //using setQuizs function to retrieve data and display on website
        })
        .catch((err) => {
          alert(err.message)
        })
    }
    getCart()
  }, [carts]) //[animals] to update the array instantly when changed rather than refresh page.

  return (
    //         <div className="cart-container" class="pt-10 px-20">
    //         <h1 class="text-center pb-5">Shopping Cart</h1>

    // <table class="table-auto">
    //   <thead>
    //     <tr>
    //       <th class="pr-40 ">PRODUCT</th>
    //       <th class="pr-60">PRODUCT NAME</th>
    //       <th class="pr-40">UNIT PRICE</th>
    //       <th class="pr-20">QUANTITY</th>
    //       <th class="pr-20">TOTAL</th>
    //       <th>ACTION</th>
    //     </tr>

    // <tr>
    //     <td></td>
    //     <td class="pt-5 ">Siddhalepa Balm 50g</td>
    //     <td class="pt-5"> Rs 150.00</td>
    //     <td class="pt-5">1</td>
    //     <td class="pt-5">Rs 150.00</td>
    // </tr>
    //     </thead>
    // </table>
    //         </div>

    <div>
      <div>
        <tr>
          <div class="px-4 py-2">
            <h2 class="text-gray-800 text-2xl font-bold">Shopping Cart</h2>
            <button class=" bg-red text-[14px]">Remove all items</button>
          </div>
        </tr>
      </div>

      {/* Cat headings */}
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Total
                    </th>
                  </tr>
                </thead>
                {/* Cart Containt  */}
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-20 w-20">
                          <img
                            class="h-20 w-20 "
                            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fsiddhalepa.com%2Findex.php%2Fsiddhalepa-balm-50g&psig=AOvVaw1JRg4EDALzCQl6XLvV7olK&ust=1682160612179000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKi7_t_muv4CFQAAAAAdAAAAABAE"
                            alt=""
                          ></img>
                        </div>

                        <div class="ml-4">
                          <div class="text-[6] font-medium text-gray-900">
                            Siddhalepa Balm 50g
                          </div>
                          <div class="text-[12px]">
                            Product ID: PID-00001
                            <br></br>Weight:0.11 g
                          </div>
                          {/* Reomve btn for cart item remove */}
                          <button class="pt-5 bg-red text-[14px]">
                            Remove
                          </button>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="text-gray-900 font-medium">$9.99</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="inline-block relative">
                        <select
                          onChange={handleQuantityChange}
                          class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg
                            class="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M14.95 7.95a1 1 0 01-1.41 0L10 4.91l-3.54 3.54a1 1 0 01-1.41-1.41l4-4a1 1 0 011.41 0l4 4a1 1 0 010 1.41z" />
                          </svg>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="text-gray-900 font-medium">
                        ${totalPrice.toFixed(2)}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
