import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import "./NavBar.css";
import 'primeicons/primeicons.css';
import { FaBookOpen, FaShoppingCart,FaRegCalendarAlt } from 'react-icons/fa';
import { IoMdSearch, IoMdAdd } from 'react-icons/io'; 
import {CgProfile} from "react-icons/cg";
import {GiHamburgerMenu} from "react-icons/gi";
import {BiLogIn, BiLogOut} from "react-icons/bi";
import {handleSubmit, setSubmitted} from "../LogIn/Register";
import Regist from '../LogIn/Register';


const NavBar = () => {
    const [isMobile, setIsMobile] = useState(false); 
    const [isLogIn, setIsLogIn] = useState(false);
   
  return (
    <div>
        <nav className='navbar'>
            <h3 className='logo'>reciBooK</h3>
            <ul className='nav-links'>
               
                  
               
                <Link to='/login' className='login'>
                <li>Вхід</li>
                </Link>
                
                <Link to='/profile' className='profile'>
                  <CgProfile/>
                </Link> 
                <Link to='/logout' className='logout'>
                <BiLogOut/>
                </Link>
           

            <ul className={isMobile ? 'nav-links-mobile' : 'nav-links-web'}
            onClick={()=> setIsMobile(false)}>
                <Link to='/home' className='home'>
                <li> <FaBookOpen/>  Мої рецепти</li>
                </Link>

                <Link to='/' className='search'>
                <li> <IoMdSearch/>  Пошук</li>
                </Link>

                <Link to='/newrecipe' className='newrecipe'>
                <li> <IoMdAdd/>  Додати рецепт</li>
                </Link>

                <Link to='/shoplist' className='shoplist'>
                <li> <FaShoppingCart/>  Список покупок</li>
                </Link>

                <Link to='/calendar' className='calendar'>
                <li> <FaRegCalendarAlt/>  Календар харчування</li>
                </Link>

                </ul>
            </ul>
            <button className='mobile-menu-icon'
            onClick={() => setIsMobile(!isMobile)}
            >
                {isMobile ? (<i className='pi pi-times'></i> )
                :
                ( <GiHamburgerMenu/>)
                }
            </button>

        </nav>
    </div>
  )
}

export default NavBar;
/*
<button className='mobile-menu-icon'
onClick={() => setIsLogIn(!isLogIn)}
>
    {isLogIn ? (<BiLogOut/> )
    :
    ( <BiLogIn/>)
    }
</button> */