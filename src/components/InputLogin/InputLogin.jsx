import React from 'react';
import './InputLogin.css'
import eye from '../../assets/img/Eye-Pass.png'
const InputLogin = ({name,playsholder,cimg}) => {

  return (
    <div className='inputLogin'>
      <label className='lapelInput' htmlFor="">{name}</label>
  <div className='inp-eye'>
        <input className='input' type="text" placeholder=  {playsholder} />
        <img className={`eye ${cimg}`} src={eye} alt="eye" />
  </div>
    </div>
  );
}

export default InputLogin;
