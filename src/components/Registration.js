import React, { useState } from "react";
import "./Registration.css";
import { useNavigate } from "react-router-dom";
import PopUp from "./PopUp";

// const submitBtn = document.getElementById("submit");
// const input1 = document.getElementById("input-1").value;
// const input2 = document.getElementById("input-2");
// const input3 = document.getElementById("input-3");
// const input4 = document.getElementById("input-4");
// const input5 = document.getElementById("input-5");
// const input6 = document.getElementById("input-6");
// const input7 = document.getElementById("input-7");
// const input8 = document.getElementById("input-8");

// console.log(input1);

const Registration = () => {
  const [popup, setPopup] = useState(false);

  // function checkform() {
  //   var f = document.forms["mainform"].input;
  //   var feildsMustBeFilled = true;

  //   for (let i = 0; i < f.length; i++) {
  //     if (f[i].value.length == 0) feildsMustBeFilled = false;
  //   }

  //   if (feildsMustBeFilled) {
  //     document.getElementById("submit").disabled = false;
  //   } else {
  //     document.getElementById("submit").disabled = true;
  //   }
  // }

  return (
    <section className="reg-sec p-24 mb-36">
      <div className="form w-[60%] mx-auto text-lg bg-pink-50 py-16 px-32 rounded-3xl ">
        <h2 className="text-center text-3xl font-extrabold mb-12">Sign Up</h2>
        <form action="" name="mainform">
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
              // onKeyUp={checkform()}
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
              // onKeyUp={checkform()}
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
              placeholder="Set Password"
              name="password"
              // onKeyUp={checkform()}
              required
            ></input>
          </div>
          {/* <div className="confirm-password mt-4">
            <label>
              Confirm Password <span>*</span>
            </label>
            <br />
            <input
              id="input-4"
              type="password"
              placeholder="Confirm Password"
              name="confirm-password"
              // onKeyUp={checkform()}
              required
            ></input>
          </div> */}
          <div className="dob mt-4">
            <label>
              Date of Birth <span>*</span>
            </label>
            <br />
            <input
              id="input-5"
              type="date"
              placeholder="Date of Birth"
              name="dob"
              // onKeyUp={checkform()}
              required
            ></input>
          </div>
          <div className="gender mt-4">
            <label>
              Gender <span>*</span>
            </label>
            <br />
            <select id="gender" placeholder="Gender">
              <option>Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
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
              // onKeyUp={checkform()}
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
              // onKeyUp={checkform()}
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
              // onKeyUp={checkform()}
              required
            ></input>
          </div>
          <button
            type="submit"
            id="submit"
            className="btn"
            // disabled
            onClick={() => setPopup(true)}
          >
            Register
          </button>
          {popup && <PopUp />}
        </form>
      </div>
    </section>
  );
};

export default Registration;
