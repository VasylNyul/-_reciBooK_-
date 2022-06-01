import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

import "./EditProfile.css";

function Profile() {
  const [UserList, setUserList] = useState([]);
    
  let navigate = useNavigate();
    
const getUser = () => {
  axios.get(`http://127.0.0.1:9091/profile.php`, { withCredentials: true, headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json', } })
  .then((response) => {
   setUserList(response.data);
  });
};
    
  return (
   <div className="UserInform">
   
   {UserList.map((val, key) => {
          
      <div className="User">
      <div>
      <h2>Дані користувача</h2>
      <h3>Прізвище: {val.first_name}</h3>
      <h3>Ім'я: {val.last_name}</h3>
      <h3>Дата народження: {val.birth}</h3>
      <h3>Email: {val.email}</h3>
      <h3>Password: {val.password}</h3>
      <h3>Short Bio: {val.shortbio}</h3>
      <h3>Улюблені страви: {val.favoriteFood}</h3>
      </div>
               
      </div>
    
   })}
   <button  onClick={() => {
            navigate ("/edit") ;
        }} className="btn1">
    Редагувати
    </button>
    </div>
    );
  }
 export default Profile;

