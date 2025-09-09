import React from 'react';
import './TransactionSection.css'
import ContantTap from '../ContentTap/ContantTap';
import IconRent from '../../assets/img/Icon Rent.png'
import IconSalary from '../../assets/img/Icon Salary.png'
import IconGroceries from '../../assets/img/Icon Groceries.png'
import IconTransport from '../../assets/img/Icon transport.png'
import IconFood from '../../assets/img/Icon Food.png'
import NavBar from '../NavBar/NavBar';

const TransactionSection = ({expenses, salary}) => {
           const ArrayTapContent=  expenses?.length > 0 ?[{
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
            ,
            {
                img:IconTransport,
                text1:"Transport",
           text2:expenses[2]?.created_at,
            text3:expenses[2]?.title,
            text4:expenses[2]?.amount,
                colorText:'CoText'
            }
        ]:[]
        const ArrayTapContent1= expenses?.length > 0 ?[{
                img: IconFood,
                text1:"Food",
           text2:expenses[0]?.created_at,
            text3:expenses[0]?.title,
            text4:expenses[0]?.amount,
                colorText:'CoText'
            },
        ]:[]
  return (
    <div className='transactionSection'>
        <p className='textTrans'>April</p>
        <div className='tapContent'>
        { expenses?.length>0 && ArrayTapContent.map((item,index)=>{return(
        <ContantTap key={index} img={item.img} text1={item.text1} text2={item.text2}text3={item.text3}text4={item.text4}colorText={item.colorText} index={index} />)})}
      </div>
        <p className='textTrans'>March</p>
        <div className='tapContent'>
        {expenses?.length>0 && ArrayTapContent1.map((item,index)=>{return(
        <ContantTap key={index} img={item.img} text1={item.text1} text2={item.text2}text3={item.text3}text4={item.text4}colorText={item.colorText} index={index} />)})}
      </div>
      <NavBar/>
    </div>
  );
}

export default TransactionSection;
