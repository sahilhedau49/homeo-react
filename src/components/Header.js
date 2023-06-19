import React, { useState, useEffect } from "react";
import "../App.css";
import Fade from "react-reveal/Fade";
import { CgMenu, CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import Registration from "./Registration";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div>
      <nav>
        <div className="navbar">
          <div className="logo">
            <a href="/">
              <img src={require("../images/Group19.png")} alt="vector" />
              <h3>Homeo</h3>
            </a>
          </div>
          <div className="links ">
            <ul className={openMenu ? "active" : ""}>
              {/* Active */}
              <li>
                <a href="/" onClick={() => setOpenMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#petcare" onClick={() => setOpenMenu(false)}>
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setOpenMenu(false)}>
                  Help
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setOpenMenu(false)}>
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="reg-btn">
            <Link to="/registration">
              <button>Registration</button>
            </Link>
          </div>
          <div
            className={openMenu ? "mobile-menu-btn active" : "mobile-menu-btn"}
          >
            <CgMenu
              name="menu-outline"
              className="mobile-nav-icons"
              onClick={() => setOpenMenu(true)}
            />
            <CgClose
              name="close-outline"
              className="close-outline mobile-nav-icons"
              onClick={() => setOpenMenu(false)}
            />
          </div>
        </div>
      </nav>

      <section className="home">
        <Fade bottom>
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
              <Link to="/registration">
                <i className="bars fa-solid fa-bars"></i>
              </Link>
            </div>
          </div>
        </Fade>
      </section>
    </div>
  );
};

export default Header;
