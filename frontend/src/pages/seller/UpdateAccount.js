import React from 'react'
import './form.css'

const UpdateAccount = () => {
  return (
    <div className="main-form">
      <div className="form-title">
        <h2
          className="form-h2"
          class="ml-2 font-mono text-3xl font-semibold text-gray-500 dark:text-gray-400"
        >
          Update Account Details
        </h2>
        <div className="form-underline"></div>
      </div>

      <div className="form-body">
        <div className="form-container">
          <form action="#">
            <div className="form first">
              <div className="details-personal">
                <div className="fields">
                  <div className="input-field">
                    <label>User Name</label>
                    <input
                      type="text"
                      placeholder="Update User Name"
                      required
                    ></input>
                  </div>

                  <div className="input-field">
                    <label>Manufacturer</label>
                    <input
                      type="email"
                      placeholder="Update User Email"
                      required
                    ></input>
                  </div>

                  <div className="input-field">
                    <label>Company Name</label>
                    <input
                      type="text"
                      placeholder="Update Company Name"
                      required
                    ></input>
                  </div>

                  <div className="input-field">
                    <label>Contact Number</label>
                    <input
                      type="tel"
                      placeholder="Update Contact Number"
                      min={9}
                      max={12}
                      required
                    ></input>
                  </div>

                  <div className="input-field">
                    <label>Website</label>
                    <input
                      type="url"
                      placeholder="Update Website"
                      required
                    ></input>
                  </div>

                  <div className="input-field">
                    <label>Profile Picture</label>
                    <input
                      type="file"
                      accept="image/png, image/jpg, image/jpeg"
                      placeholder="Upload New Profile Picture"
                      required
                    ></input>
                  </div>

                  <div className="input-field-desc">
                    <label>Reason</label>
                    <div></div>
                    <textarea
                      type="text"
                      placeholder="Update Reason to Join"
                      required
                    ></textarea>
                  </div>

                  <button class="m-auto bg-green-500 mt-[20px] hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateAccount
