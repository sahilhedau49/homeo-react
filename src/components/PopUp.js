import React from "react";
import { useNavigate } from "react-router-dom";
import "./Registration.css";

const PopUp = () => {
  const navigate = useNavigate();
  const gotohome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="popup-wrapper fixed left-0 right-0 top-0 bottom-0"></div>
      <div className="pop-sec fixed w-[40vw] bg-pink-100 py-8 px-12 rounded-lg top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h2 className="font-semibold text-2xl mb-4">
          Sorry, it looks like our service is not available in your area.
        </h2>
        <p>
          We apologize for inconvenience. We're constantly expanding our
          coverage area, so please check back with us in the future. In the
          meantime, feel free to browse our website and learn more about our
          services.
        </p>
        <button className="btn" onClick={() => gotohome()}>
          Go to Home Page
        </button>
      </div>
    </>
  );
};

export default PopUp;
