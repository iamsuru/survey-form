import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [radio1, setRadio1] = useState('yes')
  const [radio2, setRadio2] = useState('yes')
  const [radio3, setRadio3] = useState('satisfied')

  function sendSurvey(e) {
    e.preventDefault();
    //server side logic
    console.log(`${name} ${email} ${message} ${radio1} ${radio2} ${radio3}`);
    alert('Survey Sent.')
  }

  return (
    <div className='flex-container'>
    <div className='mt-4 mb-3'>
          <h1 className='heading'>Customer Survey Form</h1>
        </div>
      <div className='survey-form'>
        <div className='mt-3'>
          <form onSubmit={sendSurvey}>
            <div className='row mt-3'>
              <div className='col-sm-6'>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" aria-describedby="emailHelp" onChange={(e) => setName(e.target.value)} />
                </div>
              </div>
              <div className='col-sm-6'>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>
            </div>


            <div className='mt-2 mb-2'>
              <label>Is this first time you are using our products & service?</label><br></br>
              <div className="form-check form-check-inline mt-2">
                <input className="form-check-input" type="radio" name="radio1" id="radio1-yes" value="yes" checked={radio1 === 'yes'} onChange={(e) => setRadio1(e.target.value)} />
                <label className="form-check-label" htmlFor="radio1-yes">Yes</label>
              </div>
              <div className="form-check form-check-inline mt-2">
                <input className="form-check-input" type="radio" name="radio1" id="radio1-no" value="no" checked={radio1 === 'no'} onChange={(e) => setRadio1(e.target.value)} />
                <label className="form-check-label" htmlFor="radio1-no">No</label>
              </div>
            </div>

            <div className='mt-2 mb-2'>
              <label>Would you suggest to your friends and colleague?</label><br></br>
              <div className="form-check form-check-inline mt-2">
                <input className="form-check-input" type="radio" name="radio2" id="radio2-yes" value="yes" checked={radio2 === 'yes'} onChange={(e) => setRadio2(e.target.value)} />
                <label className="form-check-label" htmlFor="radio2-yes">Yes</label>
              </div>
              <div className="form-check form-check-inline mt-2">
                <input className="form-check-input" type="radio" name="radio2" id="radio2-no" value="no" checked={radio2 === 'no'} onChange={(e) => setRadio2(e.target.value)} />
                <label className="form-check-label" htmlFor="radio2-no">No</label>
              </div>
            </div>

            <div className='mt-2 mb-2'>
              <label>How satisfied are you with our company overall?</label><br></br>
              <div className="form-check form-check-inline mt-2">
                <input className="form-check-input" type="radio" name="radio3" id="radio3-satisfied" value="satisfied" checked={radio3 === 'satisfied'} onChange={(e) => setRadio3(e.target.value)} />
                <label className="form-check-label" htmlFor="radio3-satisfied">Satisfied</label>
              </div>
              <div className="form-check form-check-inline mt-2">
                <input className="form-check-input" type="radio" name="radio3" id="radio3-undecided" value="undecided" checked={radio3 === 'undecided'} onChange={(e) => setRadio3(e.target.value)} />
                <label className="form-check-label" htmlFor="radio3-undecided">Undecided</label>
              </div>
              <div className="form-check form-check-inline mt-2">
                <input className="form-check-input" type="radio" name="radio3" id="radio3-unsatisfied" value="unsatisfied" checked={radio3 === 'unsatisfied'} onChange={(e) => setRadio3(e.target.value)} />
                <label className="form-check-label" htmlFor="radio3-unsatisfied">Unsatisfied</label>
              </div>


            </div>

            <div className="form-group mt-2 mb-2">
              <label htmlFor="message">Do you have suggestion to improve our service?</label>
              <textarea className="form-control" id="message" rows="5" onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>

            <button type="submit" className="btn mt-3">SUBMIT</button>
          </form>
        </div>
      </div>
      <div className='mt-3'>
          <span className='footer'>&copy;2023 Customer Survey Form. All Rights Reserved | Design by <a href='https://www.linkedin.com/in/iamsuru' rel='noreferrer noopener' target='_blank'>Suryansh Shrivastava</a> </span>
        </div>
    </div>
  )
}

export default App


// import React, { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import './App.css'
// function App() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [radio1, setRadio1] = useState('yes')
//   const [radio2, setRadio2] = useState('yes')
//   const [radio3, setRadio3] = useState('satisfied')

//   function sendSurvey(e) {
//     e.preventDefault();
//     //server side logic
//     console.log(`${name} ${email} ${message} ${radio1} ${radio2} ${radio3}`);
//     alert('Survey Sent.')
//   }

//   return (
//     <div>
//       <div className='container d-flex flex-column justify-content-center align-items-center'>
        
//       </div>
//     </div>
//   )
// }

// export default App