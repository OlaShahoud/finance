import React from 'react';
import car from '../../assets/img/car.png'
import './Goals.css'
import ellips1 from '../../assets/img/Ellipse 182.png'
import ellips2 from '../../assets/img/Ellipse 183.png'
import lineV from '../../assets/img/Line 5.png'
import Week from '../Week/Week'
import food from '../../assets/img/Food.png'
import salary from '../../assets/img/Salary.png'
import lineH from '../../assets/img/Line 6.png'
const Goals = () => {
    const ArrayWeek=[
    {img:salary,
    text:"Revenue Last Week",
    text1:"$4.000.00",
    ctextColor:""
   },   
   {img:food,
    text:"Food Last Week",
    text1:"-$100.00",
    ctextColor:"weekText2Color1"
   }]
  return (
    <div className='Goals'>
     <div className='goalsOne'>
        <div className='imgPosition'>
            <img src={ellips1} alt="ellips" />
            <img className='imgPosition2' src={ellips2} alt="ellips" />
            <div className='GoalsPosition'><img src={car} alt="car"/></div>
        </div>
     <p className='textGoals'>Savings On Goals</p>
     </div>
     <div className='lineV'><img src={lineV} alt="" /></div>
     <div>
        {ArrayWeek.map((item,index)=>{
          return(<>
           <Week img={item.img} text={item.text} text1={item.text1} ctextColor={item.ctextColor}/>
           <div className={`${index==1?"lineNone":"lineWeek"}`}>
            <img src={lineH} alt=""  />
           </div>
          </>
        )
        })}
       
     </div>
    </div>
  );
}

export default Goals;
