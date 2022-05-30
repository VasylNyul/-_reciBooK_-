import React from 'react'
import './App.css';
import './Components/LogIn/LogIn.css'
import LogIn from './Components/LogIn/LogIn';
import Regist from './Components/LogIn/Register';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/pages/Home'
import NewRecipe from './Components/pages/NewRecipe/NewRecipe';
import Search from './Components/pages/Search';
import ShopList from './Components/pages/ShopList/ShopList';
import Calendar from './Components/pages/Calendar';

const App = () => {
  return (
    <Router>
    <NavBar/>

  <Routes>
      <Route  path = "/" element = {<Home/>} />
      <Route  path = "/newrecipe" element = {<NewRecipe/>} />
      <Route  path = "/shoplist" element = {<ShopList/>} />
      <Route  path = "/search" element = {<Search/>} />
      <Route  path = "/calendar" element = {<Calendar/>} />
     
      <Route  path = "/login" element = {<LogIn/>} />
      <Route  path = "/regist" element = {<Regist/>} />

  </Routes>
</Router> 
  );
}

 export default App;


 
 