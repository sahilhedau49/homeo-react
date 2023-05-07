import React from "react";
import "../App.css";

const Mainpage = () => {
  return (
    <div>
      <section>
        <div className="types">
          <div className="t-1">
            <div>
              <img src={require("../images/mdi_pets.png")} alt="image" />
              <p>Pet Caretaker</p>
            </div>
            <div>
              <img
                src={require("../images/material-symbols_cleaning-bucket-rounded.png")}
                alt="image"
              />
              <p>Washing</p>
            </div>
            <div>
              <img
                src={require("../images/material-symbols_cleaning-services-rounded.png")}
                alt="image"
              />
              <p>Cleaning</p>
            </div>
          </div>
          <div className="t-2">
            <div>
              <img
                src={require("../images/mdi_washing-machine.png")}
                alt="image"
              />
              <p>Laundry</p>
            </div>
            <div>
              <img
                src={require("../images/icon-park-solid_cooking.png")}
                alt="image"
              />
              <p>Cooking</p>
            </div>
            <div>
              <img
                src={require("../images/ic_round-elderly.png")}
                alt="image"
              />
              <p>Elder Caretaking</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="petcare">
          <div className="pc-img1">
            <img src={require("../images/5515846 2.png")} alt="Boy with dogs" />
          </div>
          <div className="pc-txt">
            <h3>Pet Caretaker</h3>
            <p>
              Where furry friends feel at home: Find your perfect pet caretaker
              today!
            </p>
            <div className="reg-btn book-btn">
              <a href="#">
                <button>Book Now</button>
              </a>
            </div>
          </div>
          <div className="pc-img2">
            <img src={require("../images/5515846 3.png")} alt="Girl with dog" />
          </div>
        </div>
        <img
          className="box-1"
          src={require("../images/Group 17.png")}
          alt="boxes"
        />
      </section>

      <section>
        <div className="laundry">
          <div className="ld-txt">
            <h3>Laundry Services</h3>
            <p>
              Let us handle it all for you, so you can focus on the more
              important things in life.
            </p>
            <div className="reg-btn book-btn">
              <a href="#">
                <button>Book Now</button>
              </a>
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

      <section>
        <div className="eldercare">
          <div className="ec-img1">
            <img
              src={require("../images/Group 996 (1).png")}
              alt="Boy with dogs"
            />
          </div>
          <div className="ec-txt">
            <h3>Elder’s Caretaking</h3>
            <p>
              Our old age care taking services provide compassionate and
              personalized support to seniors who require assistance with daily
              activities or medical needs.
            </p>
            <div className="reg-btn book-btn">
              <a href="#">
                <button>Book Now</button>
              </a>
            </div>
          </div>
          <div className="ec-img2">
            <img src={require("../images/5515846 1.png")} alt="Girl with dog" />
          </div>
        </div>
      </section>

      <section>
        <div className="washing">
          <div className="whtop">
            <div className="wh-img1">
              <img src={require("../images/Frame.png")} alt="Women Washing" />
            </div>
            <div className="wh-txt">
              <h3>Washing Dishes</h3>
              <p>
                At Homeo Dish Washing Company, we're committed to providing our
                customers with the highest quality dish washing service
                available
              </p>
            </div>
          </div>
          <div className="reg-btn book-btn wh-btn">
            <a href="#">
              <button>Book Now</button>
            </a>
          </div>
          <img
            className="box-2"
            src={require("../images/Group 17 (1).png")}
            alt="boxes"
          />
        </div>
      </section>

      <section>
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
              dedicated to delivering thorough and efficient cleaning solutions
              for homes, offices, and commercial spaces.
            </p>
            <div className="reg-btn book-btn">
              <a href="#">
                <button>Book Now</button>
              </a>
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

      <section>
        <div className="cooking">
          <div className="ck-img1">
            <img src={require("../images/Group 998.png")} alt="Boy with dogs" />
          </div>
          <div className="ck-txt">
            <h3>Cooking Services</h3>
            <p>
              Join the cooking revolution: Discover why thousands of people
              trust us to bring flavor to their table.
            </p>
            <div className="reg-btn book-btn">
              <a href="#">
                <button>Book Now</button>
              </a>
            </div>
          </div>
          <div className="ck-img2">
            <img src={require("../images/3726716 1.png")} alt="Girl with dog" />
          </div>
        </div>
      </section>

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
              <i className="fa-brands fa-square-instagram"></i>
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
    </div>
  );
};

export default Mainpage;
