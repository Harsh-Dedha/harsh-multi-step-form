import React from 'react'
function Step_4({ setStepCount }) {
  return (
    <>
      <div className='form-Container'>
        <div className='info_box'>
          <div className='heading'>
            <h1>Fininshing up</h1>
            <p>Double check everything looks OK before conforming.</p>
          </div>
          <div className='formInputs Step-4'>
            <div className='planprice'>
              <div className='innerplanprice'>
                <h4 className='planname'>Arcade (Monthly)</h4>
                <a href='/'>change</a>
              </div>
              <p className='actualprise'>$9/mo</p>
            </div>
            <div className='addonfinalprice'>
              <div className='inneraddonfinalprice'>
                <p className='tag'>Online service</p>
                <p className='addonprices'>+$2/mo</p>
              </div>
              <div className='inneraddonfinalprice'>
                <p className='tag'>Larger Storage</p>
                <p className='addonprices'>+$2/mo</p>
              </div>
            </div>
            <div className='totalprice'>
              <p className='tag'>Total (per month)</p>
              <p className='num'>+$12/mo</p>
            </div>
          </div>
          <div className='button_box next-step-button'>
            <button className='back_button' onClick={() => setStepCount(3)}>
              Go Back
            </button>
            <button className='next_button confirm'>Confirm</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Step_4
