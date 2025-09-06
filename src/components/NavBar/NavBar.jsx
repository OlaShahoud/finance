import React from 'react';
import './NavBar.css'
import Analysis from '../../assets/img/Analysis.png'
import Category from '../../assets/img/Category.png'
import Home from '../../assets/img/Home.png'
import Profile from '../../assets/img/Profile.png'
import Transactions from '../../assets/img/Transactions.png'
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    const itemNav=[
    {img:Home,
    link:'/'
    },
    {img:Analysis,
    link:'/Analysis'
    },
    {img:Transactions,
    link:'/Transactions'
    },
    {img:Category,
    link:'/Category'
    },
    {img:Profile,
    link:"/Profile"
    }]
  return (
    <div className='NavBar'>
{itemNav.map((item,index)=>{return(<>
<NavLink to={`${item.link}`}  className={({isActive})=>isActive?'btn-nav btn-navactive':'btn-nav'} key={index}>
    <img src={item.img} alt={item.link} />
   
</NavLink>
</>)
})}
    </div>
  );
}

export default NavBar;
