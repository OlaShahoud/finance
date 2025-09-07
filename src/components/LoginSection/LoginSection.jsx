import React, { useState } from "react";
import InputLogin from "../InputLogin/InputLogin";
import "./LoginSection.css";
//import imgPassword from '../../assets/img/Password.png'
import BtnLogIn from "../BtnLogIn/BtnLogIn";
import Google from "../../assets/img/Google.png";
import facebook from "../../assets/img/Facebook.png";

import AccountLogin from "../AccountLogin/AccountLogin";
const LoginSection = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const ArrayInput = [
    {
      name: "Username or email",
      playcholder: "example@example.com",
      cimg: "noneimg",
      value: emailOrUsername,
      onChange: (e) => setEmailOrUsername(e.target.value),
      type: "text",
    },
    {
      name: "Password",
      playcholder: "......",
      cimg: "",
      value: password,
      onChange: (e) => setPassword(e.target.value),
      type: "password",
    },
  ];

  const handleLogin = async () => {
    try {
      setError("");
      setLoading(true);
      const baseUrl = import.meta.env.VITE_API_URL;
      if (!baseUrl) {
        throw new Error("Missing API URL :)");
      }
      const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          identifier: emailOrUsername,
          password: password,
        }),
      });
      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || `Request failed: ${response.status}`);
      }
      const data = await response.json().catch(() => ({}));
      // TODO: handle successful login (store token/navigate)
      console.log("Login success", data);
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };
  const name = "Log In";
  const classLog = "logbtn";

  const nameS = "Sign Up";
  const classLogS = "logbtnS";
  const text = " Don’t have an account? ";
  const text2 = "Sign Up";
  const link = "/SignUp";
  return (
    <div className="loginSection">
      {ArrayInput.map((item, index) => {
        return (
          <InputLogin
            key={index}
            name={item.name}
            playsholder={item.playcholder}
            cimg={item.cimg}
            value={item.value}
            onChange={item.onChange}
            type={item.type}
          />
        );
      })}
      <div className="center">
        <div className="btnlogg">
          <BtnLogIn
            name={loading ? "Logging in..." : name}
            classLog={classLog}
            onClick={handleLogin}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <p className="forgot">Forgot Password?</p>
        <BtnLogIn name={nameS} classLog={classLogS} />

        <p className="finger">
          Use <span className="fingercolor">fingerprint</span> to access
        </p>
        <p className="signtext">or sign up with</p>
        <div className="gap">
          <img src={facebook} alt="facebook" />
          <img src={Google} alt="google" />
        </div>
        <AccountLogin text={text} text2={text2} link={link} />
      </div>
    </div>
  );
};

export default LoginSection;
