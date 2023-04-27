import React, { useState } from 'react'

function ShippingDetails() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [country, setCountry] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="state">State:</label>
        <input
          type="text"
          id="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="zipCode">Zip Code:</label>
        <input
          type="text"
          id="zipCode"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default ShippingDetails
