import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import "./NavBar.css";
import 'primeicons/primeicons.css';
import { FaBookOpen, FaShoppingCart,FaRegCalendarAlt } from 'react-icons/fa';
import { IoMdSearch, IoMdAdd } from 'react-icons/io'; 
import {CgProfile} from "react-icons/cg";
import {handleSubmit, setSubmitted} from "../LogIn/Register";
import Regist from '../LogIn/Register';


const NavBar = () => {
    const [isMobile, setIsMobile] = useState(false); 
   
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
           

            <ul className={isMobile ? 'nav-links-mobile' : 'nav-links-web'}
            onClick={()=> setIsMobile(false)}>
                <Link to='/' className='home'>
                <li> <FaBookOpen/>  Мої рецепти</li>
                </Link>

                <Link to='/search' className='search'>
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
                ( <i className='pi-align-right'></i>)
                }
            </button>

        </nav>
    </div>
  )
}

export default NavBar;