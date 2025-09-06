import React from 'react';

const BtnLogIn = ({name,classLog}) => {
  return (
   <button className={classLog}>{name}</button>
  );
}

export default BtnLogIn;
