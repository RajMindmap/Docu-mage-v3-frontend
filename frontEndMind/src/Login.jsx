import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import GoogleLogo from "./assets/Google.png";
import FacebookLogo from "./assets/Facebook.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    setValues((prev)=>({
      ...prev,
      [event.target.name] : [event.target.value]

    }));
  }

  axios.defaults.withCredentials = true;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:5000/login", values)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/docu-mage-v3");
        } else {
          alert(res.data.Message);
        }
      })
      .catch((err) => console.log(err));
  };


  return (
    <div className="align-items-center">
      <div
        className="bg-white p-3 login_main_content" 
      >
        <div className="google__signup_btn">
          <img  
            src={GoogleLogo}
            alt=""
            className="google_image"
            style={{ marginLeft: "18px" }}
          />
          <p>Sign up with Google</p>
        </div>
        <div className="facebook__signup_btn">
          <img src={FacebookLogo} alt="" className="facebook_image" style={{ marginLeft: "18px" }} />
          <p>Sign up with Facebook</p>
        </div>
        <div className="divider__or">
            <span>-----------------------------OR-----------------------------</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="email__label">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              className="form-control email__input__text"
                onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="password__label">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control password__input_text"
                onChange={handleInput}
            />
          </div>
          <button type="submit" className="btn  w-100 login__button">
            Login
          </button>
          <p style={{textAlign:"center",lineHeight:"3"}}>Already have an account? <a href="#"><span style={{color:"#B998FF"}}>Log in</span></a></p>

          <Link to="/signup">
            <button className="btn btn-default border w-100  text-decoration-none" style={{background: "linear-gradient(91.56deg, #B998FF 0%, #A2CFFF 104.01%)",height:"48px"}}>
              Create Account
            </button>{" "}
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
