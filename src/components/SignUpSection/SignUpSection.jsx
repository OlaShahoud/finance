import React from 'react';
import InputLogin from '../InputLogin/InputLogin';
import AccountLogin from '../AccountLogin/AccountLogin';
import BtnLogIn from '../BtnLogIn/BtnLogIn';
import './SignUpSection.css'
const SignUpSection = () => {
     const ArrayInput=[{
    name:'Full name',
    playcholder:'example@example.com',
    cimg:'noneimg',
  },
  {
    name:'Email',
    playcholder:'example@example.com',
    cimg:'noneimg',
  },
  {
    name:'Mobile Number',
    playcholder:'+ 123 456 789',
    cimg:'noneimg',
  },
  {
    name:'Date of birth',
    playcholder:'DD / MM /YYY',
    cimg:'noneimg',
  },
  {
    name:'Password',
    playcholder:'.......',
    cimg:'',
  },
  {
    name:'Confirm Password',
    playcholder:'......',
    cimg:'',
  }]

  const classLog='logbtn Signbtn'
  const nameS='Sign Up'
  const text=' Already have an account?'
  const text2='Log In '
   const link='/Login'
  return (
    <div className='loginSection signSection'>
{ArrayInput.map((item,index)=>{return(<InputLogin  key={index} name={item.name} playsholder={item.playcholder} cimg={item.cimg} />)})}
<div className='center'>
    <p className='agree'>By continuing, you agree to </p> 
    <span className='terms'> Terms of Use and Privacy Policy.</span>
     <BtnLogIn name={nameS} classLog={classLog}/>
     <AccountLogin text={text} text2={text2} link={link}/>
</div>
 
    </div>
  );
}

export default SignUpSection;
