import { useEffect, useState } from 'react'
import './App.css'
import Step_1 from './component/step-1'
import Step_2 from './component/step-2'
import Step_3 from './component/step-3'
import Step_4 from './component/step-4'
function App() {
  const [stepCount, setStepCount] = useState(1)
  useEffect(() => {
    alert(`Alert: Welcome to my project demonstration!

Dear aeonaxy Team,

Thank you for visiting my project! Before you explore further, I'd like to provide some context. This project is a demonstration of a multi-step form built using React JS. Unlike traditional forms, this project focuses on design innovation and user experience, incorporating unique design elements and data inputs tailored to specific requirements beyond typical examples.

It's important to note that this form is purely a visual representation and does not store any data. It serves as a showcase of my skills in frontend development and design thinking. Feel free to navigate through the form to experience its functionality and design aesthetics.

If you have any questions or would like further clarification, please don't hesitate to reach out to me. Thank you once again for your time and consideration!

Best regards,
Harsh choudhary
whatsApp- 8527970982
`)
  }, [])
  return (
    <>
      <div className='outerContainer'>
        <div className='innerContainer'>
          <div className='imgbox'>
            <div className='stepname'>
              <div
                className={'circlenum' + (stepCount === 1 ? ' current' : '')}
              >
                1
              </div>
              <div className='stepinfo'>
                <div className='stepcount'>STEP 1</div>
                <div className='stepdetail '>YOUR INFO</div>
              </div>
            </div>
            <div className='stepname'>
              <div
                className={'circlenum' + (stepCount === 2 ? ' current' : '')}
              >
                2
              </div>
              <div className='stepinfo'>
                <div className='stepcount'>STEP 2</div>
                <div className='stepdetail'>SELECT PLAN</div>
              </div>
            </div>
            <div className='stepname'>
              <div
                className={'circlenum' + (stepCount === 3 ? ' current' : '')}
              >
                3
              </div>
              <div className='stepinfo'>
                <div className='stepcount'>STEP 3</div>
                <div className='stepdetail'>ADD-ONS</div>
              </div>
            </div>
            <div className='stepname'>
              <div
                className={'circlenum' + (stepCount === 4 ? ' current' : '')}
              >
                4
              </div>
              <div className='stepinfo'>
                <div className='stepcount'>STEP 4</div>
                <div className='stepdetail'>SUMMARY</div>
              </div>
            </div>
          </div>
          {stepCount === 1 && <Step_1 setStepCount={setStepCount} />}
          {stepCount === 2 && <Step_2 setStepCount={setStepCount} />}
          {stepCount === 3 && <Step_3 setStepCount={setStepCount} />}
          {stepCount === 4 && <Step_4 setStepCount={setStepCount} />}
        </div>
      </div>
    </>
  )
}

export default App
