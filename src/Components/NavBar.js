import React from 'react'
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div>
        <nav className='item'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/search'>Search</Link>
            </li>
            <li>
                <Link to='/shoplist'>ShopList</Link>
            </li>
            <li>
                <Link to='/calendar'>Calendar</Link>
            </li>
            <li>
                <Link to='/recipes'>Recipes</Link>
            </li>

        </nav>
    </div>
  )
}

export default NavBar;