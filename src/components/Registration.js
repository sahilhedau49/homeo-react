import React from "react";
import "./Registration.css";

const Registration = () => {
  return (
    <section className="p-24">
      <div className="form w-[60%] mx-auto text-lg backdrop-blur-3xl py-24 px-32 rounded-3xl ">
        <h2 className="text-center text-2xl font-bold ">Registartion Form</h2>
        <form>
          <div className="full-name mt-4">
            <label>
              Full Name <span>*</span>
            </label>
            <br />
            <input type="text" placeholder="Full Name" required></input>
          </div>
          <div className="email-address mt-4">
            <label>
              Email Address <span>*</span>
            </label>
            <br />
            <input type="email" placeholder="Email Address" required></input>
          </div>
          <div className="password mt-4">
            <label>
              Password <span>*</span>
            </label>
            <br />
            <input type="password" placeholder="Password" required></input>
          </div>
          <div className="confirm-password mt-4">
            <label>
              Confirm Password <span>*</span>
            </label>
            <br />
            <input
              type="password"
              placeholder="Confirm Password"
              required
            ></input>
          </div>
          <div className="dob mt-4">
            <label>
              Date of Birth <span>*</span>
            </label>
            <br />
            <input type="date" placeholder="Date of Birth" required></input>
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
            <input type="number" placeholder="Phone Number" required></input>
          </div>
          <div className="address mt-4">
            <label>
              Address <span>*</span>
            </label>
            <br />
            <input type="text" placeholder="Address" required></input>
          </div>
          <div className="pin-code mt-4">
            <label>
              Pin Code <span>*</span>
            </label>
            <br />
            <input type="number" placeholder="Pin Code" required></input>
          </div>
          <button type="submit" className="btn">
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default Registration;
