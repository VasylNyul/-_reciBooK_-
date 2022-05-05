import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import "./NavBar.css";
import 'primeicons/primeicons.css';
 
const NavBar = () => {
    const [isMobile, setIsMobile] = useState(false); 
  return (
    <div>
        <nav className='navbar'>
            <h3 className='logo'>reciBooK</h3>
            <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}
            onClick={()=> setIsMobile(false)}>
                <Link to='/' className='home'>
                <li>Home</li>
                </Link>

                <Link to='/newrecipe' className='newrecipe'>
                <li>NewRecipe</li>
                </Link>

                <Link to='/shoplist' className='shoplist'>
                <li>ShopList</li>
                </Link>

                <Link to='/search' className='search'>
                <li>Search</li>
                </Link>

                <Link to='/calendar' className='calendar'>
                <li>Calendar</li>
                </Link>

                <Link to='/login' className='login'>
                <li>Вхід</li>
                </Link>

                

            </ul>
            <button className='mobile-menu-icon'
            onClick={() => setIsMobile(!isMobile)}
            >
                {isMobile ? (
                <i className='pi pi-times'></i> 
                ):( 
                <i className='pi-align-right'></i>
                )}
            </button>

        </nav>
    </div>
  )
}

export default NavBar;