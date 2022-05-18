import React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import "./LogIn.css";


function LogIn() {

let navigate = useNavigate();

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

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
		<h1>Користувач {email} увійшов!!</h1>
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
	<div className='LogIn'>
	
	<div>
		<h3>Вхід</h3>
	</div>

	{/* Calling to the methods */}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>

	<form>
		{/* Labels and inputs for form data */}
		

		<label className="label">Ел. пошта</label>
		<input onChange={handleEmail} className="input"
		value={email} type="email" />

		<label className="label">Пароль</label>
		<input onChange={handlePassword} className="input" 
		value={password} type="password" name='пароль'/>



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