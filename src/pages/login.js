import React from "react";
import "./css/loginRegister.css";
import Navbar from "../components/shared/Navbar";
import {Link} from "react-router-dom";

function LoginPage() {

  return (
    <>
      <Navbar />
      <div class="login-page">
        <div class="form">
          <form class="login-form">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>login</button>
            <p class="message">
              Not registered? <Link to="/accounts/emailsignup"><p className="linkForSwitch">Sign In</p></Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
