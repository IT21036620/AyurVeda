import React, { useState, useEffect } from 'react' //useState is needed for functional components
import axios from 'axios'

function Test() {
  //addevent function//
  const [amount, setamount] = useState('')
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')

  function sendData(e) {
    e.preventDefault() // to execute only the function "sendData" without submitting data.

    const newPayment = {
      amount,
      name,
      email,
      phone,
    }

    //input any authentications are needed
    //(path,function needed to execute)
    axios
      .post('http://localhost:3006/api/v1/payments/initiate', newPayment)
      .then(() => {})
      .catch((err) => {})
  }

  return (
    <div>
      <div className="container">
        <br></br>
        <h3> Add payment</h3>
        <br></br>
        <form onSubmit={sendData}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputregno">amount</label>
              <input
                type="Number"
                className="form-control"
                id="amount"
                placeholder="QQxxxxxx"
                onChange={(e) => {
                  //onchange refers to saving automatically when typing

                  setamount(e.target.value) //save the target values in Question variable
                }}
              />
            </div>
          </div>

          <div className="form-row">
            <label for="inputName">Name </label>
            <input
              type="Text"
              className="form-control"
              id="Name"
              placeholder="Luna"
              onChange={(e) => {
                //onchange refers to saving automatically when typing

                setname(e.target.value) //save the target values in Question variable
              }}
            />
          </div>
          <br></br>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="text">email</label>
              <input
                style={{ marginLeft: '10px' }}
                type="text"
                id="email"
                name="email"
                onChange={(e) => {
                  setemail(e.target.value)
                }}
              />
            </div>
          </div>

          <div className="form-group">
            <label for="inputBorn_country">Phone</label>
            <input
              type="text"
              className="form-control"
              id="Phone"
              placeholder="Phone"
              onChange={(e) => {
                //onchange refers to saving automatically when typing

                setphone(e.target.value) //save the target values in Question variable
              }}
            />
          </div>

          <button onSubmit={sendData} type="submit" className="btn btn-primary">
            Pay
          </button>
        </form>
        <br></br>
        <br></br>
      </div>
    </div>
  )
}
export default Test
