import React, { useState } from "react";
import SuccessForm from "./registration/SuccessForm";
import RegistrationForm from "./registration/RegistrationForm";
import { Link, useNavigate } from "react-router-dom";
import { RxCrossCircled } from "react-icons/rx";
function Register() {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between items-center py-3 px-6 mx-8 my-3">
        <Link to="/">
          <img src="./Vector.svg" alt="logo"></img>
        </Link>
        <div>
          {
            !submitted && <RxCrossCircled size={40} className=" cursor-pointer" onClick={()=> navigate('/')}  />
          }
        </div>
      </div>
      {submitted ? (
        <SuccessForm />
      ) : (
        <RegistrationForm setSubmitted={setSubmitted} />
      )}
    </div>
  );
}

export default Register;
