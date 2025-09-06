import React from 'react';
import ContentLogin from '../ContentLogin/ContentLogin';
import LoginSection from '../LoginSection/LoginSection';

const Login = () => {
    const text='Welcome'
  return (
    <div>
      <ContentLogin text={text}/>
      <LoginSection/>
    </div>
  );
}

export default Login;
