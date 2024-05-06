import React, { useState } from 'react'
import SuccessForm from './registration/SuccessForm';
import RegistrationForm from './registration/RegistrationForm';
function Register() {
    const [submitted, setSubmitted] = useState(false);
  return (
    <div>
        {
            submitted ? <SuccessForm/> : <RegistrationForm setSubmitted={setSubmitted}/>
        }
    </div>
  )
}

export default Register
