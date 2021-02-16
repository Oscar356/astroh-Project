import React from "react";
import "./css/loginRegister.css";
import Navbar from "../components/shared/Navbar";
import { Link } from "react-router-dom";

function SignUpPage() {
  return (
    <>
    <Navbar />
    <div class="register-page">
      <div class="form">
        <form class="register-form">
          <input type="text" placeholder="name" />
          <input type="password" placeholder="password" />
          <input type="text" placeholder="email address" />
          <button>create</button>
          <p class="message">
            Already registered? <Link to="/accounts/login"><p className="linkForSwitch">Sign In</p></Link>
          </p>
        </form>
        {/* <form class="login-form">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button>login</button>
          <p class="message">
            Not registered? <p className="linkForSwitch">Sign In</p>
          </p>
        </form> */}
      </div>
    </div>
  </>
  );
}

export default SignUpPage;
