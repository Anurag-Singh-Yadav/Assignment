import React, { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateForm();
  };

  const validateForm = () => {
    if (formData.name.trim() !== "" && formData.email.trim() !== "") {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="min-h-[80vh] flex justify-center py-12">
      <div className="flex flex-col gap-4">
        <div>
          <div className="text-[#2DA950] text-2xl text-center py-2 font-semibold">
            Registration Form
          </div>
          <div className="flex text-4xl flex-col justify-center items-center font-bold">
            <div>Start your success</div>
            <div>Journey here!</div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 py-4">
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="py-3 bg-[#EFEFEF] px-4 rounded-3xl border"
              value={formData.name}
              onChange={(event) => {
                handleInputChange(event);
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="py-3 bg-[#EFEFEF] px-4 rounded-3xl border"
              value={formData.email}
              onChange={(event) => {
                handleInputChange(event);
              }}
            />
            <button
              type="submit"
              className={`py-3 text-white bg-black px-4 rounded-3xl border text-sm ${
                isButtonDisabled && "bg-[#C9C9C9] cursor-not-allowed"
              }`}
              disabled={isButtonDisabled}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
