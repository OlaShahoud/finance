import React from 'react';
import InputLogin from '../InputLogin/InputLogin';
import './LoginSection.css'
import imgPassword from '../../assets/img/Password.png'
import BtnLogIn from '../BtnLogIn/BtnLogIn';
import Google from '../../assets/img/Google.png'
import facebook from '../../assets/img/Facebook.png'

import AccountLogin from '../AccountLogin/AccountLogin';
const LoginSection = () => {
  const ArrayInput=[{
    name:'Username or email',
    playcholder:'example@example.com',
    cimg:'noneimg',
  },
{
    name:'Password',
    playcholder:'......',
    cimg:'',
  }]
  const name='Log In'
  const classLog='logbtn'

  const nameS='Sign Up'
  const classLogS='logbtnS'
  const text=' Don’t have an account? '
  const text2='Sign Up'
   const link='/SignUp'
  return (
    <div className='loginSection'>
      {ArrayInput.map((item,index)=>{return(
        <InputLogin key={index} name={item.name} playsholder={item.playcholder} cimg={item.cimg} />)})}
   <div className='center'>
     <div className='btnlogg'>
          <BtnLogIn name={name} classLog={classLog}/>
    </div>
    <p className='forgot'>Forgot Password?</p>
    <BtnLogIn name={nameS} classLog={classLogS}/>
    
    <p className='finger'>Use  <span className='fingercolor'>fingerprint</span>   to access</p>
    <p className='signtext'>or sign up with</p>
    <div className='gap'>
      <img src={facebook} alt="facebook" />
      <img src={Google} alt="google" />
    </div>
<AccountLogin text={text} text2={text2} link={link}/>
   </div>
    </div>
  );
}

export default LoginSection;
