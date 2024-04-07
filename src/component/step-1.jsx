import React, { useState } from 'react'

function Step_1({ setStepCount }) {
  const [name, setName] = useState('')
  return (
    <>
      <div className='form-Container'>
        <div className='info_box'>
          <div className='heading'>
            <h1>Personal info</h1>
            <p>Please provide your name, email address and phone number.</p>
          </div>
          <div className='formInputs'>
            <div className='innerBoxInput'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className='innerBoxInput'>
              <label htmlFor='Email'>Email Address</label>
              <input type='email' id='Email' required />
            </div>
            <div className='innerBoxInput'>
              <label htmlFor='phone'>Phone Number</label>
              <input type='number' id='phone' required />
            </div>
          </div>
          <div className='button_box'>
            <button className='next_button' onClick={() => setStepCount(2)}>
              Next Step
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Step_1
