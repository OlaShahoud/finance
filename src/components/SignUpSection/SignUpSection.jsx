import React, { useState } from "react";
import InputLogin from "../InputLogin/InputLogin";
import AccountLogin from "../AccountLogin/AccountLogin";
import BtnLogIn from "../BtnLogIn/BtnLogIn";
import "./SignUpSection.css";
import { useNavigate } from "react-router-dom";
const SignUpSection = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const ArrayInput = [
    {
      name: "Full name",
      playcholder: "example@example.com",
      cimg: "noneimg",
      value: fullName,
      onChange: (e) => setFullName(e.target.value),
      type: "text",
    },
    {
      name: "Email",
      playcholder: "example@example.com",
      cimg: "noneimg",
      value: email,
      onChange: (e) => setEmail(e.target.value),
    },
    {
      name: "Mobile Number",
      playcholder: "+ 123 456 789",
      cimg: "noneimg",
      value: mobileNumber,
      onChange: (e) => setMobileNumber(e.target.value),
    },
    {
      name: "Date of birth",
      playcholder: "DD / MM /YYY",
      cimg: "noneimg",
      value: dateOfBirth,
      onChange: (e) => setDateOfBirth(e.target.value),
    },
    {
      name: "Password",
      playcholder: ".......",
      cimg: "",
      value: password,
      onChange: (e) => setPassword(e.target.value),
    },
    {
      name: "Confirm Password",
      playcholder: "......",
      cimg: "",
      value: confirmPassword,
      onChange: (e) => setConfirmPassword(e.target.value),
    },
  ];
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      setError("");
      setLoading(true);
      const baseUrl = import.meta.env.VITE_API_URL;
      if (!baseUrl) {
        throw new Error("Missing API URL :)");
      }
      const DTO = {
        full_name: fullName,
        email,
        mobile_number: mobileNumber,
        date_of_birth: dateOfBirth,
        password,
      };
      if (password == confirmPassword) {
        const response = await fetch(`/webhook/sign-up`, {
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
        console.log("Sign Up success", data);
        navigate("/");
      } else {
        setError("Passwords do not match");
      }
    } catch (error) {
      setError(error.message || "Sign Up failed");
    } finally {
      setLoading(false);
    }
  };
  const classLog = "logbtn Signbtn";
  const nameS = "Sign Up";
  const text = " Already have an account?";
  const text2 = "Log In ";
  const link = "/Login";
  return (
    <div className="loginSection signSection">
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
        <p className="agree">By continuing, you agree to </p>
        <span className="terms"> Terms of Use and Privacy Policy.</span>
        <BtnLogIn
          name={loading ? "Signing up..." : nameS}
          classLog={classLog}
          onClick={handleSignUp}
        />
        {error && <p className="error">{error}</p>}
        <AccountLogin text={text} text2={text2} link={link} />
      </div>
    </div>
  );
};

export default SignUpSection;
