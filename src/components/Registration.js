import React from "react";

const Registration = () => {
  return (
    <section>
      <div className="form">
        <h2>Registartion Form</h2>
        <form>
          <div className="full-name">
            <label>Full Name</label>
            <input type="text" placeholder="Full Name" required></input>
          </div>
          <div className="email-address">
            <label>Email Address</label>
            <input type="email" placeholder="Email Address" required></input>
          </div>
          <div className="password">
            <label>Password</label>
            <input type="password" placeholder="Password" required></input>
          </div>
          <div className="confirm-password">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              required
            ></input>
          </div>
          <div className="dob">
            <label>Date of Birth</label>
            <input type="date" placeholder="Date of Birth" required></input>
          </div>
          <div className="gender">
            <label>Gender</label>
            <select id="gender" placeholder="Gender">
              <option>Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>
          <div className="phone-no">
            <label>Phone Number</label>
            <input type="number" placeholder="Phone Number" required></input>
          </div>
          <div className="address">
            <label>Address</label>
            <input type="text" placeholder="Address" required></input>
          </div>
          <div className="pin-code">
            <label>Pin Code</label>
            <input type="number" placeholder="Pin Code" required></input>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </section>
  );
};

export default Registration;
