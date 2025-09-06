import React from 'react';
import './TransactionSection.css'
import ContantTap from '../ContentTap/ContantTap';
import IconRent from '../../assets/img/Icon Rent.png'
import IconSalary from '../../assets/img/Icon Salary.png'
import IconGroceries from '../../assets/img/Icon Groceries.png'
import IconTransport from '../../assets/img/Icon transport.png'
import IconFood from '../../assets/img/Icon Food.png'
import NavBar from '../NavBar/NavBar';

const TransactionSection = () => {
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
            ,
            {
                img:IconTransport,
                text1:"Transport",
                text2:'9:30 - April 08',
                text3:'Fuel',
                text4:'-$4,13',
                colorText:'CoText'
            }
        ]
        const ArrayTapContent1=[{
                img: IconFood,
                text1:"Food",
                text2:'19:30 - March 31',
                text3:'Dinner',
                text4:'-$70,40',
                colorText:'CoText'
            },
        ]
  return (
    <div className='transactionSection'>
        <p className='textTrans'>April</p>
        <div className='tapContent'>
        {ArrayTapContent.map((item,index)=>{return(
        <ContantTap key={index} img={item.img} text1={item.text1} text2={item.text2}text3={item.text3}text4={item.text4}colorText={item.colorText} index={index} />)})}
      </div>
        <p className='textTrans'>March</p>
        <div className='tapContent'>
        {ArrayTapContent1.map((item,index)=>{return(
        <ContantTap key={index} img={item.img} text1={item.text1} text2={item.text2}text3={item.text3}text4={item.text4}colorText={item.colorText} index={index} />)})}
      </div>
      <NavBar/>
    </div>
  );
}

export default TransactionSection;
