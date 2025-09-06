import React from 'react';
import ContentLogin from '../ContentLogin/ContentLogin';
import SignUpSection from '../SignUpSection/SignUpSection';
const SignUp = () => {
    const text='Create Account'
  return (
    <div>
      <ContentLogin text={text}/>
      <SignUpSection/>
    </div>
  );
}

export default SignUp;
