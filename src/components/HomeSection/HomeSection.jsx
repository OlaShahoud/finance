import React from 'react';
import './HomeSection.css'
import Goals from '../Goals/Goals';
import Taps from '../Taps/Taps';
import NavBar from '../NavBar/NavBar';
const HomeSection = ({revenuelastweek,foodlastweek,expenses,salary,possible_savings}) => {

 return (
    <div className='homeSection'>
  <Goals revenuelastweek1={revenuelastweek} foodlastweek={foodlastweek} possible_savings={possible_savings}/>
  <Taps expenses={expenses} salary={salary}/>
  <NavBar/>
    </div>
  );
}

export default HomeSection;
