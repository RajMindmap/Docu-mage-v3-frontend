// import React from 'react'
import "./Home.css";
import polygon from "./assets/polygon-logo.png";
import CarouselIndicator from "./assets/indicator.png";
import BoyLogo from "./assets/boy-image.png";
import Login from "./Login";

function Home() {
  return (
    <div className="main">
      <div className="logo"></div>
      <div className="polygon__logo">
        <img src={polygon} alt="logo" />
      </div>

      <div className="main__heding__instruction">
        <h2>Sign Up and Lets begin</h2>
        <div className="main__sub_cont">
          <p>Start your 30 day free trial. Cancel any time</p>
        </div>
      </div>

      <div
        className="login__container"
      >
        

        <div className="proccess__key_panel">
          <div className="search__boy_logo">
            <img src={BoyLogo} alt="image found" />
          </div>
          <div className="simplekey__heading">
            <h3>Simple is key</h3>
            <p>
              <span>Process Documents with no</span> <br />
              <span>hustle and headache</span>
            </p>
           
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
