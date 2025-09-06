import React from 'react';
import {Link} from 'react-router-dom'

const AccountLogin = ({text,text2,link}) => {
  return (
    <div>
      <p className='dAccount'>
     {text}
      <Link className='signUp' to={link} > {text2}</Link>
    </p>
    </div>
  );
}

export default AccountLogin;
