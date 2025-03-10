import React from "react";
import Login from "../../components/login/Login";
import "./login.css";
import { Link } from "react-router-dom";
const LoginPage = ({setAuthentication}) => {
  return (
    <div className="loginpage">
      <div>
        <Link to="/">
          <img
            className="Aclabsolute"
            src="Images/ACEyellow.png"
            alt="acelogo"
          />
        </Link>
        <Login setAuthentication={setAuthentication}/>
      </div>
    </div>
  );
};

export default LoginPage;
