import React from 'react'
import { MdShoppingCart, MdAccountCircle } from 'react-icons/md'
import { FaLeaf } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white py-7 px-4 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-white font-bold text-3xl flex mr-10">
          <FaLeaf className="mr-2" />
          AyurVeda
        </a>

        <form className="w-1/2 mr-2">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 rounded-lg bg-white text-green-700"
          />
        </form>

        <div className="flex space-x-5 px-2">
          <div className="relative group inline-block">
            <button className="text-white text-xl">Categories</button>
            <div className="absolute left-0 mt-2 w-48 bg-white text-green-700 rounded-lg shadow-md hidden group-hover:block">
              <a href="#" className="block px-4 py-2">
                Category 1
              </a>
              <a href="#" className="block px-4 py-2">
                Category 2
              </a>
              <a href="#" className="block px-4 py-2">
                Category 3
              </a>
            </div>
          </div>

          <a href="/About" className="text-white text-xl">
            About Us
          </a>

          <a href="/products" className="text-white text-xl">
            Products
          </a>
        </div>
        <a
          href="/cart"
          className="text-white flex items-center px-2 py-2 text-xl"
        >
          <MdShoppingCart size="30px" className="ml-1" />
          {/* <FontAwesomeIcon icon="shopping-cart" /> */}
        </a>
        <a
          href="/signin"
          className="text-white flex items-center border-2 border-white rounded-lg px-2 py-1 ml-10 text-xl"
        >
          <span>Sign In</span>
          <MdAccountCircle size="30px" className="mr-1 ml-1" />

          {/* <FontAwesomeIcon icon="sign-in-alt" /> */}
        </a>
      </div>
    </nav>
  )
}

export default Navbar
