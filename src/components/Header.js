import React from "react";
import "../App.css";

const Header = () => {
  return (
    <div>
      <nav>
        <div className="navbar">
          <div className="logo">
            <a href="#">
              <img src={require("../images/Group19.png")} alt="vector" />
              <h3>Homeo</h3>
            </a>
          </div>
          <div className="links">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Help</a>
              </li>
              <li>
                <a href="#contact">About</a>
              </li>
            </ul>
          </div>
          <div className="reg-btn">
            <a href="#">
              <button>Registration</button>
            </a>
          </div>
        </div>
      </nav>

      <Fade bottom>
        <section className="home">
          <div className="home-txt">
            <div className="heading">
              <h3>Compassionate Care and Home Services</h3>
            </div>
            <div className="search">
              <input
                className="pin"
                type="text"
                placeholder="PIN CODE"
                name="pincode"
              />
              <span>
                <i className="fa-solid fa-magnifying-glass src-icon"></i>
              </span>
              <input
                className="src-txt"
                type="text"
                placeholder="Search for Service ..."
                name="search"
              />
              <i className="bars fa-solid fa-bars"></i>
            </div>
          </div>
        </section>
      </Fade>
    </div>
  );
};

export default Header;
