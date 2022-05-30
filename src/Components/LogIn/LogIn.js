import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
<<<<<<< HEAD

 function LogIn() {
	let navigate = useNavigate();
=======
import "./LogIn.css";


function LogIn() {

let navigate = useNavigate();
>>>>>>> f9616922d1c734c649c0bc4681411512f0bd9a81

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

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
		email: email,
		password: password
	  };
	  axios.post(`http://127.0.0.1:9091/auth.php`, {
		customer }, {
		  withCredentials: true,
		  headers: {
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json',
		  }
		  })

	if (email === '' || password === '') {
	setError(true);
	} else {
	setSubmitted(true);
	setError(false);
	navigate ("/") ;
	}
};

// Showing success message
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1>Користувач увійшов!!</h1>
	</div>
	);
};

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
		<h3>Вхід</h3>
	</div>

	{/* Calling to the methods */}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>

	<form onSubmit={handleSubmit}>
		{/* Labels and inputs for form data */}
		

		<label className="label">Ел. пошта</label>
<<<<<<< HEAD
    	<input onChange={handleEmail} className="input"
    	name="email" type="email" />
=======
		<input placeholder="Ел. пошта" onChange={handleEmail} className="input"
		value={email} type="email" />

		<label className="label">Пароль</label>
		<input onChange={handlePassword} className="input" 
		value={password} type="password" name='пароль'/>

>>>>>>> f9616922d1c734c649c0bc4681411512f0bd9a81

    	<label className="label">Пароль</label>
    	<input onChange={handlePassword} className="input"
    	name="password" type="password" />

		<button onClick={handleSubmit} className="btn" type="logIn">
		Увійти
		</button>

		<button onClick={() => {
            navigate ("/regist") ;
        }} className="btn1">
		Зареєструватись
		</button>
		
		
	</form>
	</div>
);
}

export default LogIn