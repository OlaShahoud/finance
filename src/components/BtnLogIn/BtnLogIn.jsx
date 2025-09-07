import React from "react";

const BtnLogIn = ({ name, classLog, onClick }) => {
  return (
    <button className={classLog} onClick={onClick}>
      {name}
    </button>
  );
};

export default BtnLogIn;
