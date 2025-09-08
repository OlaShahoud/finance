import React from "react";
import "./InputLogin.css";
import eye from "../../assets/img/Eye-Pass.png";
const InputLogin = ({
  name,
  playsholder,
  cimg,
  value,
  onChange,
  type = "text",
}) => {
  return (
    <div className="inputLogin">
      <label className="lapelInput" htmlFor="">
        {name}
      </label>
      <div className="inp-eye">
        <input
          className="input"
          type={type}
          placeholder={playsholder}
          value={value}
          onChange={onChange}
        />
        <img className={`eye ${cimg}`} src={eye} alt="eye" />
      </div>
    </div>
  );
};

export default InputLogin;
