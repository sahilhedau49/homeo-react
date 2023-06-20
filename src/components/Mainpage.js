import React from "react";
import "../App.css";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const Mainpage = () => {
  return (
    <div>
      <Fade bottom>
        <section>
          <div className="types">
            <div className="t-1">
              <div>
                <Link to="/registration">
                  <img src={require("../images/mdi_pets.png")} alt="image" />
                  <p>Pet Caretaker</p>
                </Link>
              </div>
              <div>
                <Link to="/registration">
                  <img
                    src={require("../images/material-symbols_cleaning-bucket-rounded.png")}
                    alt="image"
                  />
                  <p>Washing</p>
                </Link>
              </div>
              <div>
                <Link to="/registration">
                  <img
                    src={require("../images/material-symbols_cleaning-services-rounded.png")}
                    alt="image"
                  />
                  <p>Cleaning</p>
                </Link>
              </div>
            </div>
            <div className="t-2">
              <div>
                <Link to="/registration">
                  <img
                    src={require("../images/mdi_washing-machine.png")}
                    alt="image"
                  />
                  <p>Laundry</p>
                </Link>
              </div>
              <div>
                <Link to="/registration">
                  <img
                    src={require("../images/icon-park-solid_cooking.png")}
                    alt="image"
                  />
                  <p>Cooking</p>
                </Link>
              </div>
              <div>
                <Link to="/registration">
                  <img
                    src={require("../images/ic_round-elderly.png")}
                    alt="image"
                  />
                  <p>Elder Caretaking</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Fade>

      <Fade bottom>
        <section id="petcare">
          <div className="petcare">
            <div className="pc-img1">
              <img
                src={require("../images/5515846 2.png")}
                alt="Boy with dogs"
              />
            </div>
            <div className="pc-txt">
              <h3>Pet Caretaker</h3>
              <p>
                Where furry friends feel at home: Find your perfect pet
                caretaker today!
              </p>
              <div className="reg-btn book-btn">
                <Link to="/registration">
                  <button>Book Now</button>
                </Link>
              </div>
            </div>
            <div className="pc-img2">
              <img
                src={require("../images/5515846 3.png")}
                alt="Girl with dog"
              />
            </div>
          </div>
        </section>
      </Fade>
      <img
        className="box-1"
        src={require("../images/Group 17.png")}
        alt="boxes"
      />

      <Fade bottom>
        <section id="laundry">
          <div className="laundry">
            <div className="ld-txt">
              <h3>Laundry Services</h3>
              <p>
                Let us handle it all for you, so you can focus on the more
                important things in life.
              </p>
              <div className="reg-btn book-btn">
                <Link to="/registration">
                  <button>Book Now</button>
                </Link>
              </div>
            </div>
            <div className="ld-img1">
              <img
                src={require("../images/2105.i203.007.F.m004.c9 1.png")}
                alt="Washing Machine"
              />
            </div>
          </div>
        </section>
      </Fade>

      <div className="ec-img1">
        <img src={require("../images/Group 996 (1).png")} alt="Boy with dogs" />
      </div>
      <Fade bottom>
        <section id="eldercare">
          <div className="eldercare">
            <span className="Blank"></span>
            <div className="ec-txt">
              <h3 className="ec-head">Elder's Caretaking</h3>
              <p>
                Our old age care taking services provide compassionate and
                personalized support to seniors who require assistance with
                daily activities or medical needs.
              </p>
              <div className="reg-btn book-btn">
                <Link to="/registration">
                  <button>Book Now</button>
                </Link>
              </div>
            </div>
            <div className="ec-img2">
              <img
                src={require("../images/5515846 1.png")}
                alt="Girl with dog"
              />
            </div>
          </div>
        </section>
      </Fade>

      <Fade bottom>
        <section id="washing">
          <div className="washing">
            <div className="whtop">
              <div className="wh-img1">
                <img src={require("../images/Frame.png")} alt="Women Washing" />
              </div>
              <div className="wh-txt">
                <h3>Washing Dishes</h3>
                <p>
                  At Homeo Dish Washing Company, we're committed to providing
                  our customers with the highest quality dish washing service
                  available
                </p>
              </div>
            </div>
            <div className="reg-btn book-btn wh-btn">
              <Link to="/registration">
                <button>Book Now</button>
              </Link>
            </div>
          </div>
        </section>
      </Fade>
      <img
        className="box-2"
        src={require("../images/Group 17 (1).png")}
        alt="boxes"
      />

      <Fade bottom>
        <section id="cleaning">
          <div className="cleaning">
            <div className="cl-img1">
              <img
                src={require("../images/5515846 1 (1).png")}
                alt="Boy with dogs"
              />
            </div>
            <div className="cl-txt">
              <h3>Cleaning</h3>
              <p>
                "At Homeo, we provide top-quality cleaning services to meet the
                unique needs of our clients. Our professional cleaners are
                dedicated to delivering thorough and efficient cleaning
                solutions for homes, offices, and commercial spaces.
              </p>
              <div className="reg-btn book-btn">
                <Link to="/registration">
                  <button>Book Now</button>
                </Link>
              </div>
            </div>
            <div className="cl-img2">
              <img
                src={require("../images/5515846 2 (1).png")}
                alt="Girl with dog"
              />
            </div>
          </div>
        </section>
      </Fade>

      <div className="ck-img1">
        <img src={require("../images/Group 998.png")} alt="Boy with dogs" />
      </div>
      <Fade bottom>
        <section id="cooking">
          <div className="cooking">
            <span className="Blank2"></span>
            <div className="ck-txt">
              <h3>Cooking Services</h3>
              <p>
                Join the cooking revolution: Discover why thousands of people
                trust us to bring flavor to their table.
              </p>
              <div className="reg-btn book-btn">
                <Link to="/registration">
                  <button>Book Now</button>
                </Link>
              </div>
            </div>
            <div className="ck-img2">
              <img
                src={require("../images/3726716 1.png")}
                alt="Girl with dog"
              />
            </div>
          </div>
        </section>
      </Fade>

      <Fade bottom>
        <footer id="contact">
          <div className="footer">
            <div className="social">
              <div className="qr">
                <img
                  src={require("../images/clarity_qr-code-line.png")}
                  alt="qr code"
                />
                <div className="qr-txt">
                  <div className="logo-2">
                    <img src={require("../images/Group19.png")} alt="vector" />
                    <h3>Homeo</h3>
                  </div>
                  <p>Scan QR For More</p>
                </div>
              </div>
              <div className="soc-lnk">
                <i className="fa-brands fa-square-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-square-facebook"></i>
                <a
                  href="https://instagram.com/_homeo_for_you?igshid=YmMyMTA2M2Y="
                  target="_blank"
                >
                  <i className="fa-brands fa-square-instagram"></i>
                </a>
              </div>
            </div>
            <div className="services">
              <h3>Services</h3>
              <ul>
                <li>Pet Caretaking</li>
                <li>Laundry Services</li>
                <li>Cooking Services</li>
              </ul>
            </div>
            <div className="trust">
              <h3>Our Trust</h3>
              <ul>
                <li>Reliability</li>
                <li>Professionalism</li>
                <li>Commitment to excellence</li>
              </ul>
            </div>
            <div className="contact">
              <h3>Contact us</h3>
              <p>9284766748</p>
            </div>
            <div className="faq">
              <h3>Visit our FAQ page</h3>
            </div>
          </div>
        </footer>
      </Fade>
    </div>
  );
};

export default Mainpage;
