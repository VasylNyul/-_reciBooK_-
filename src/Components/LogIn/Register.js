import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
<<<<<<< HEAD
=======
import "./LogIn.css";

>>>>>>> f9616922d1c734c649c0bc4681411512f0bd9a81
//import { useLocation } from "react-router";
//import { useNavigate } from "react-router";


 function Regist() {

  let navigate = useNavigate();


const [first_name, setFirstName] = useState('');
const [last_name, setLastName] = useState('');
const [birth, setBirth] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted,setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleFirstName = (e) => {
  setFirstName(e.target.value);
  setSubmitted(false);
};

const handleLastName = (e) => {
  setLastName(e.target.value);
  setSubmitted(false);
};

// Handling the birth change
const handleBirth = (e) => {
  setBirth(e.target.value);
  setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
  setEmail(e.target.value);
  setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
  setPassword(e.target.value);
  setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
  e.preventDefault();

  const customer = {
    first_name: first_name ,
    last_name: last_name,
    birth: birth,
    email: email,
    password: password
  };
  
  axios.post(`http://127.0.0.1:9091/reg.php`, {
    customer }, {
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
    })

  if (first_name === '' || last_name === '' || birth ==='' || email === '' || password === '') {
  setError(true);
  } else {
  setSubmitted(true);
  setError(false);
  
  navigate ("/") ;
  }  
};

// Showing success message
/* const successMessage = () => {
  return (
  <div
    className="success"
    style={{
    display: submitted ? '' : 'none',
    }}>
    <h1>Користувача {name} зареєстровано!!</h1>
  </div>
  );
};*/

// Showing error message if error is true
const errorMessage = () => {
  return (
  <div
    className="error"
    style={{
    display: error ? '' : 'none',
    }}>
    <h1>Заповніть всі поля!!</h1>
  </div>
  );
};

return (
  
  <div className='App'>
  <div>
    <h3>Реєстрація</h3>
  </div>

  {/* Calling to the methods */}
  <div className="messages">
    {errorMessage()}
    
  </div>

  <form onSubmit={handleSubmit}>
    {/* Labels and inputs for form data */}
    


    <label className="label">Ім'я</label>
    <input onChange={handleFirstName} className="input"
    name="first_name" type="text" />

    <label className="label">Прізвище</label>
    <input onChange={handleLastName} className="input"
    name="last_name" type="text" />

    <label className="label">Дата народження</label>
    <input onChange={handleBirth} className="input"
    name="birth" type="date" />

    <label className="label">Ел. пошта</label>
    <input onChange={handleEmail} className="input"
    name="email" type="email" />

    <label className="label">Пароль</label>
    <input onChange={handlePassword} className="input"
    name="password" type="password" />

    <button onClick={handleSubmit} className="btn" type="submit">
    Зареєструватись
    </button>
    
    
  </form>
  </div>
);
}
export default Regist