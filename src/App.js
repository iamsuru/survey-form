import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import validator from 'validator'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [dob, setDob] = useState('');
  const [country, setCountry] = useState('');
  const [modal, setModal] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!firstName || !lastName || !email || !gender || !mobileNumber || !dob || !country) {
      alert('All fields are required');
      return;
    }
    if (!validator.isEmail(email)) {
      alert('Invalid Email')
      return;
    }

    if (!validator.isMobilePhone(mobileNumber)) {
      alert('Invalid Number')
      return
    }
    setModal(true)
  };

  function modalHandler() {
    setModal(!modal)
  }

  function handleReset() {
    resetForm();
    setModal(false)
  };

  function resetForm() {
    setFirstName('');
    setLastName('');
    setGender('');
    setEmail('');
    setMobileNumber('');
    setDob('');
    setCountry('');
  }


  return (
    <>
      <div className='container text-center mt-3'>
        <h1>Survey Form</h1>
      </div>
      <div className='container'>
        <div className='flex-container'>
          <div className='survey-form'>
            <form>
              <div className="mb-3">
                <label htmlFor="first_name" className='form-label'>First Name</label><span>*</span>
                <input type="text" className='form-control' id="first_name" placeholder='Enter your First Name' value={firstName} onChange={function (e) { setFirstName(e.target.value) }} />
              </div>

              <div className="mb-3">
                <label htmlFor="last_name" className="form-label">Last Name</label><span>*</span>
                <input type="text" className="form-control" id="last_name" placeholder='Enter your Surname' value={lastName} onChange={function (e) { setLastName(e.target.value) }} />
              </div>

              <div className='row'>
                <div className='col-sm-12'>
                  <label htmlFor=''>Gender : </label><span className='me-5'>*</span>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" id="male" name="gender" value="Male"
                      checked={gender === 'Male'} onChange={function () { setGender('Male') }}
                    />
                    <label className="form-check-label" htmlFor="male">Male</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" id="female" name="gender" value="Female"
                      checked={gender === 'Female'} onChange={function () { setGender('Female') }}
                    />
                    <label className="form-check-label" htmlFor="female">Female</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" id="other" name="gender" value="Other"
                      checked={gender === 'Other'} onChange={function () { setGender('Other') }}
                    />
                    <label className="form-check-label" htmlFor="other">Other</label>
                  </div>
                </div>
              </div>




              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label><span>*</span>
                <input type="email" className="form-control" id="email" placeholder='Enter your Email' value={email} onChange={function (e) { setEmail(e.target.value) }} />
              </div>

              <div className="mb-3">
                <label htmlFor="mobile_number" className="form-label">Mobile Number</label><span>*</span>
                <input type="text" className="form-control" id="mobile_number" placeholder='Enter your Number' value={mobileNumber} onChange={function (e) { setMobileNumber(e.target.value) }} />
              </div>


              <div className="mb-3">
                <label htmlFor="dob" className="form-label">Date Of Birth</label><span>*</span>
                <input type="date" className="form-control" id="dob" value={dob} onChange={function (e) { setDob(e.target.value) }} />
              </div>

              <div className="mb-3">
                <label htmlFor="country" className="form-label">Choose Country</label><span>*</span>
                <select className='form-select' id='country' value={country} onChange={function (e) { setCountry(e.target.value) }} >
                  <option selected>Choose Country</option>
                  <option>India</option>
                  <option>China</option>
                  <option>Japan</option>
                  <option>Indonesia</option>
                  <option>Iran</option>
                  <option>Italy</option>
                  <option>USA</option>
                  <option>Uganda</option>
                  <option>UK</option>
                  <option>Russia</option>
                </select>
              </div>
              <button type="submit" className="btn btn-outline-success float-start" onClick={handleSubmit}>Submit</button>
              <button type="reset" className="btn btn-outline-danger float-end" onClick={handleReset}>Reset</button>
            </form>
          </div>
          <Modal centered={true} isOpen={modal} toggle={modalHandler} onClosed={handleReset}>
            <ModalHeader toggle={modalHandler}>Data Sent.</ModalHeader>
            <ModalBody>
              <dl className="row">
                <dt className="col-sm-4">First Name : </dt>
                <dd className="col-sm-8">{firstName}</dd>

                <dt className="col-sm-4">Last Name : </dt>
                <dd className="col-sm-8">{lastName}</dd>

                <dt className="col-sm-4">Gender : </dt>
                <dd className="col-sm-8">{gender}</dd>

                <dt className="col-sm-4">Email : </dt>
                <dd className="col-sm-8">{email}</dd>

                <dt className="col-sm-4">Mobile Number : </dt>
                <dd className="col-sm-8">{mobileNumber}</dd>

                <dt className="col-sm-4">Date of Birth : </dt>
                <dd className="col-sm-8">{dob}</dd>

                <dt className="col-sm-4">Country : </dt>
                <dd className="col-sm-8">{country}</dd>

              </dl>
            </ModalBody>
          </Modal>
        </div>
        <footer className='text-center mt-2'>&copy;2023 Customer Survey Form. All Rights Reserved | Design by <a href='https://www.linkedin.com/in/iamsuru' rel='noreferrer noopener' target='_blank'>Suryansh Shrivastava</a> </footer>
      </div>
    </>
  )
}

export default App