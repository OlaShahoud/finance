import React, { useState } from "react";
import InputLogin from "../InputLogin/InputLogin";
import "./LoginSection.css";
//import imgPassword from '../../assets/img/Password.png'
import BtnLogIn from "../BtnLogIn/BtnLogIn";
import Google from "../../assets/img/Google.png";
import facebook from "../../assets/img/Facebook.png";

import AccountLogin from "../AccountLogin/AccountLogin";
import { useNavigate } from "react-router-dom";
const LoginSection = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
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
  // This is a template just for checking Email Validity
  const isEmail = (str) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);

  const handleLogin = async () => {
    try {
      setError("");
      setLoading(true);
      const baseUrl = import.meta.env.VITE_API_URL;
      if (!baseUrl) {
        throw new Error("Missing API URL :)");
      }

      const isEmailInput = isEmail(emailOrUsername);
      const DTO = isEmailInput
        ? { email: emailOrUsername, password }
        : { username: emailOrUsername, password };

      const response = await fetch(`/webhook/login`, {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          secret: "admin@123.123",
        },
        body: JSON.stringify(DTO),
      });
      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || `Request failed: ${response.status}`);
      }
      const data = await response.json().catch(() => ({}));

      // Save JWT token to localStorage
      const token = data.jwt;
      const userId = data.user_id;
      const email = data.email;
      const mobileNumber = data.mobile_number;
      const dateOfBirth = data.date_of_birth;
      const fullName = data.full_name;
      const fingerprint_enabled = data.fingerprint_enabled;
      localStorage.setItem("jwt", token);
      localStorage.setItem("user_id", userId);
      localStorage.setItem("email", email);
      localStorage.setItem("mobile_number", mobileNumber);
      localStorage.setItem("date_of_birth", dateOfBirth);
      localStorage.setItem("full_name", fullName);
      localStorage.setItem("fingerprint_enabled", fingerprint_enabled);
      console.log("saved to localStorage");

      console.log("Login success", data);
      navigate("/");
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
        <BtnLogIn
          name={nameS}
          classLog={classLogS}
          onClick={() => navigate("/SignUp")}
        />

        <p className="finger">
          Use <span className="fingercolor">fingerprint</span> to access
        </p>
        <p className="signtext">or sign up with</p>
        <div className="gap">
          <img src={facebook} alt="facebook" />
          <img src={Google} alt="google" />
        </div>
        <AccountLogin
          text={text}
          text2={text2}
          link={link}
          navigate={navigate}
        />
      </div>
    </div>
  );
};

export default LoginSection;
