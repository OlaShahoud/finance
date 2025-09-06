import React, { useState } from 'react';
import ContantTap from '../ContentTap/ContantTap';
import './Taps.css'
import line from '../../assets/img/Line 11.png'
import IconRent from '../../assets/img/Icon Rent.png'
import IconSalary from '../../assets/img/Icon Salary.png'
import IconGroceries from '../../assets/img/Icon Groceries.png'
const Taps = () => {
    const itemTaps=['Daily','Weekly','Monthly']
        const ArrayTapContent=[{
            img:IconSalary,
            text1:"Salary",
            text2:'18:27 - April 30',
            text3:'Monthly',
            text4:'$4.000,00',
            colorText:''
        },
         {
            img:IconGroceries,
            text1:"Groceries",
            text2:'17:00 - April 24',
            text3:'Pantry',
            text4:'-$100,00',
            colorText:'CoText'
        },
        {
            img:IconRent,
            text1:"Rent",
            text2:'8:30 - April 15',
            text3:'Rent',
            text4:'-$674,40',
            colorText:'CoText'
        }
    ]
    const [toggle,setToggle]=useState(0)
    function updateToggle(id){
        setToggle(id)
    }
  return (
    <div>
      <ul className='Taps'>
        {itemTaps.map((item,index)=>{return(
            <li className={`itemContent ${toggle==index?'active':''}`} onClick={()=>updateToggle(index)}>{item}</li>)})}
      </ul>
      <div className={`tapContent ${toggle==2?'show-content':'none-content'}`}>
        {ArrayTapContent.map((item,index)=>{return(<ContantTap key={index} img={item.img} text1={item.text1} text2={item.text2}text3={item.text3}text4={item.text4}colorText={item.colorText} index={index} />)})}
      
      </div>
    </div>
  );
}

export default Taps;
