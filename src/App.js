import React from 'react'
import './App.css';
//import './Components/LogIn/LogIn.css'
import LogIn from './Components/LogIn/LogIn';
import Regist from './Components/LogIn/Register';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/pages/Home'
import NewRecipe from './Components/pages/NewRecipe/NewRecipe';
import AddRecipe from './Components/pages/AddRecipe/NewRecipe';
import Search from './Components/pages/Search';
import ShopList from './Components/pages/ShopList/ShopList';
import Edit from './Components/EditProfile/EditProfile';
//import RecipeList from './Components/pages/NewRecipe/RecipeList';
//import Profile from './Components/EditProfile/Profile';
import Calendar from './Components/pages/Calendar';

const App = () => {
  return (
    <Router>
    <NavBar/>

  <Routes>
      <Route  path = "/" element = {<NewRecipe/>} />
      <Route  path = "/newrecipe" element = {<AddRecipe/>} />
      <Route  path = "/shoplist" element = {<ShopList/>} />
      <Route  path = "/search" element = {<Search/>} />
      <Route  path = "/calendar" element = {<Calendar/>} />
     
      <Route  path = "/login" element = {<LogIn/>} />
      <Route  path = "/regist" element = {<Regist/>} />
      <Route  path = "/profile" element = {<Edit/>} />

  </Routes>
</Router> 

  


  );
}

 export default App;
