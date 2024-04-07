import React from 'react'
function Step_3({ setStepCount }) {
  return (
    <>
      <div className='form-Container'>
        <div className='info_box'>
          <div className='heading'>
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
          </div>
          <div className='formInputs Step-3'>
            <div className='addonscheckcontainer'>
              <div className='inputcheckbox'>
                <input type='checkbox' id='' />
              </div>

              <div className='checkInfobox'>
                <h4 className='main'>Online service</h4>
                <p>Access to multiplayer games</p>
              </div>
              <p className='addonprice'>+$1/mo</p>
            </div>
            <div className='addonscheckcontainer'>
              <div className='inputcheckbox'>
                <input type='checkbox' id='' />
              </div>

              <div className='checkInfobox'>
                <h4 className='main'>Larger Storage</h4>
                <p>Extra 1TB of cloud save</p>
              </div>
              <p className='addonprice'>+$2/mo</p>
            </div>
            <div className='addonscheckcontainer'>
              <div className='inputcheckbox'>
                <input type='checkbox' id='' />
              </div>

              <div className='checkInfobox'>
                <h4 className='main'>Customizable Profile</h4>
                <p>Custom theme on your Profile</p>
              </div>
              <p className='addonprice'>+$2/mo</p>
            </div>
          </div>
          <div className='button_box next-step-button'>
            <button className='back_button' onClick={() => setStepCount(2)}>
              Go Back
            </button>
            <button className='next_button' onClick={() => setStepCount(4)}>
              Next Step
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Step_3
