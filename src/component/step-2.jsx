import React from 'react'
import arc_img from '../assets/images/icon-arcade.svg'
import arc_img2 from '../assets/images/icon-advanced.svg'
import arc_img3 from '../assets/images/icon-pro.svg'
function Step_2({ setStepCount }) {
  return (
    <>
      <div className='form-Container'>
        <div className='info_box'>
          <div className='heading'>
            <h1>Select your plan</h1>
            <p>You have option of monthly or yearly billing.</p>
          </div>
          <div className='formInputs Step-2'>
            <div className='Card select'>
              <img src={arc_img} alt='' />
              <div className='planinfo'>
                <p className='main'>Arcade</p>
                <p>$9/mo</p>
              </div>
            </div>
            <div className='Card'>
              <img src={arc_img2} alt='' />
              <div className='planinfo'>
                <p className='main'>Advanced</p>
                <p>$12/mo</p>
              </div>
            </div>
            <div className='Card'>
              <img src={arc_img3} alt='' />
              <div className='planinfo'>
                <p className='main'>Pro</p>
                <p>$15/mo</p>
              </div>
            </div>
          </div>
          <div className='toggle_box'>
            <div className='innerToggle'>
              <p className='cheked'>Monthly</p>
              <input type='checkbox' className='toggle' id='checkbox' />
              <label htmlFor='checkbox' className='toggel_label'></label>
              <p className=''>Yearly</p>
            </div>
          </div>
          <div className='button_box next-step-button'>
            <button className='back_button' onClick={() => setStepCount(1)}>
              Go Back
            </button>
            <button className='next_button' onClick={() => setStepCount(3)}>
              Next Step
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Step_2
