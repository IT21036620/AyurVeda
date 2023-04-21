import React from 'react'

export default function Cart() {
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

    <div class="bg-gray-100 px-4 py-8">
      <div class="flex">
        <div class=" w-3/4 max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div class="px-4 py-2">
            <h2 class="text-gray-800 text-2xl font-bold">Shopping Cart</h2>
          </div>
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
                          Quantity
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Price
                        </th>
                        <th scope="col" class="relative px-6 py-3">
                          <span class="sr-only">Remove</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10">
                              <img
                                class="h-10 w-10 rounded-full"
                                src="https://via.placeholder.com/150"
                                alt=""
                              ></img>
                            </div>
                            <div class="ml-4">
                              <div class="text-sm font-medium text-gray-900">
                                Siddhalepa Balm 50g
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <button class="text-gray-500 focus:outline-none focus:text-gray-600">
                              <svg
                                class="h-5 w-5 fill-current"
                                viewBox="0 0 24 24"
                              >
                                <path d="M19 13H5v-2h14v2z" />
                              </svg>
                            </button>
                            <span class="mx-2 text-gray-700">2</span>
                            <button class="text-gray-500 focus:outline-none focus:text-gray-600">
                              <svg
                                class="h-5 w-5 fill-current"
                                viewBox="0 0 24 24"
                              >
                                <path d="M19 13H5v-2h14v2z" />
                              </svg>
                            </button>
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <span class="text-gray-900 font-medium">$9.99</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class=" w-1/4 max-w-ml mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div class=" p-4">
            <h2 class="font-bold text-lg mb-4">Order Summary</h2>
            <div class="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>$99.99</span>
            </div>
            <div class="flex justify-between mb-2">
              <span>Tax:</span>
              <span>$9.99</span>
            </div>
            <div class="flex justify-between mb-2">
              <span>Shipping:</span>
              <span>$5.99</span>
            </div>
            <div class="flex justify-between font-bold">
              <span>Total:</span>
              <span>$115.97</span>
            </div>
            <button class="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
