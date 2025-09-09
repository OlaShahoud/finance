import React, { useState } from 'react';
import ContantTap from '../ContentTap/ContantTap';
import './Taps.css'
import line from '../../assets/img/Line 11.png'
import IconRent from '../../assets/img/Icon Rent.png'
import IconSalary from '../../assets/img/Icon Salary.png'
import IconGroceries from '../../assets/img/Icon Groceries.png'
const Taps = ({expenses,salary}) => {
    const itemTaps=['Daily','Weekly','Monthly']
    const ArrayTapContent= expenses?.length > 0 ? [{
            img:IconSalary,
            text1:"Salary",
            text2:expenses[0]?.created_at,
            text3:expenses[0]?.title,
            text4:salary+'$',
            colorText:''
        },
         {
            img:IconGroceries,
            text1:"Groceries",
            text2:expenses[1]?.created_at,
            text3:expenses[1]?.title,
            text4:expenses[1]?.amount,
            colorText:'CoText'
        },
        {
            img:IconRent,
            text1:"Rent",
            text2:expenses[2]?.created_at,
            text3:expenses[2]?.title,
            text4:expenses[2]?.amount,
            colorText:'CoText'
        }
    ]:[]

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
        {expenses?.length>0 && ArrayTapContent.map((item,index)=>{return(<ContantTap key={index} img={item.img} text1={item.text1} text2={item.text2}text3={item.text3}text4={item.text4}colorText={item.colorText} index={index}  />)})}
      
      </div>
    </div>
  );
}

export default Taps;
