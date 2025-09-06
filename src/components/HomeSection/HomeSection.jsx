import React from 'react';
import './HomeSection.css'
import Goals from '../Goals/Goals';
import Taps from '../Taps/Taps';
import NavBar from '../NavBar/NavBar';
const HomeSection = () => {
  return (
    <div className='homeSection'>
  <Goals/>
  <Taps/>
  <NavBar/>
    </div>
  );
}

export default HomeSection;
