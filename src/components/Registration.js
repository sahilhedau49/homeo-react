import React, { useState } from "react";
import "./Registration.css";
import PopUp from "./PopUp";

const Registration = () => {
  const [popup, setPopup] = useState(false);
  const initialValues = {
    fullname: "",
    email: "",
    password: "",
    phonenumber: "",
    address: "",
    pincode: "",
    dob: "",
    gender: "",
  };

  // const [finalValues, setFinalValues] = useState(initialValues);

  const [formValues, setFormValues] = useState(initialValues);

  const handleSubmit = (event) => {
    // setFinalValues({ ...formValues });
    // console.log(finalValues);
    event.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(e);
  };

  const senddata = async (e) => {
    e.preventDefault();
    const {
      fullname,
      email,
      password,
      phonenumber,
      address,
      pincode,
      dob,
      gender,
    } = formValues;
    const res = await fetch(
      "https://homeo-4633d-default-rtdb.firebaseio.com/userdata.json",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          email,
          password,
          phonenumber,
          address,
          pincode,
          dob,
          gender,
        }),
      }
    );
    if (
      formValues.fullname === "" ||
      formValues.email === "" ||
      formValues.password === "" ||
      formValues.phonenumber === "" ||
      formValues.address === "" ||
      formValues.pincode === ""
    ) {
      window.alert("plzz fill out the form");
      return;
    }
    if (res) {
      setPopup(true);
    }
  };

  return (
    <section className="reg-sec p-24 mb-36">
      <div className="form w-[60%] mx-auto text-lg bg-pink-50 py-16 px-32 rounded-3xl ">
        <h2 className="text-center text-3xl font-extrabold mb-12">Sign Up</h2>
        <form
          id="mainform"
          action=""
          onSubmit={handleSubmit}
          name="mainform"
          method="POST"
        >
          <div className="full-name mt-4">
            <label>
              Full Name <span>*</span>
            </label>
            <br />
            <input
              id="input-1"
              type="text"
              placeholder="Full Name"
              name="fullname"
              value={formValues.fullname}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="email-address mt-4">
            <label>
              Email Address <span>*</span>
            </label>
            <br />
            <input
              id="input-2"
              type="email"
              placeholder="Email Address"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="password mt-4">
            <label>
              Password <span>*</span>
            </label>
            <br />
            <input
              id="input-3"
              type="password"
              placeholder="Create Password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="dob mt-4">
            <label>Date of Birth</label>
            <br />
            <input
              id="input-5"
              type="date"
              placeholder="Date of Birth"
              value={formValues.dob}
              onChange={handleChange}
              name="dob"
            ></input>
          </div>
          <div className="gender mt-4">
            <label>Gender</label>
            <br />
            <select name="gender" id="gender" placeholder="Gender">
              <option>Select</option>
              <option value={formValues.gender} onChange={handleChange}>Male</option>
              <option value={formValues.gender}  onChange={handleChange}>Female</option>
              <option value={formValues.gender} onChange={handleChange}>Prefer not to say</option>
            </select>
          </div>
          <div className="phone-no mt-4">
            <label>
              Phone Number <span>*</span>
            </label>
            <br />
            <input
              id="input-6"
              type="number"
              placeholder="Phone Number"
              name="phonenumber"
              value={formValues.phonenumber}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="address mt-4">
            <label>
              Address <span>*</span>
            </label>
            <br />
            <input
              id="input-7"
              type="text"
              placeholder="Address"
              name="address"
              value={formValues.address}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="pin-code mt-4">
            <label>
              Pin Code <span>*</span>
            </label>
            <br />
            <input
              id="input-8"
              type="number"
              placeholder="Pin Code"
              name="pincode"
              value={formValues.pincode}
              onChange={handleChange}
              required
            ></input>
          </div>
          <button type="submit" id="submit" className="btn" onClick={senddata}>
            Register
          </button>
          <h4 id="errorMessage" className="text-center pt-2 text-red-800">
            Fill all above data.
          </h4>
          {popup && <PopUp />}
        </form>
      </div>
    </section>
  );
};

export default Registration;
