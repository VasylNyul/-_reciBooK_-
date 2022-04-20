import { useState } from 'react';

export default function LogIn() {

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
	setName(e.target.value);
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
	if (email === '' || password === '') {
	setError(true);
	} else {
	setSubmitted(true);
	setError(false);
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
	<div className="form">
		<div>
			<h1>reciBooK</h1>
		</div>
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
		value={password} type="password" />

		<button onClick={handleSubmit} className="btn" type="logIn">
		Увійти
		</button>
		<button onClick={handleSubmit} className="btn1" type="submit">
		Зареєструватись
		</button>
	</form>
	</div>
);
}