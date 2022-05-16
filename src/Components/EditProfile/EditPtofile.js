import React from 'react';
import { useState } from 'react';
import "./EditProfile.css";
 function Edit() {


const [shortbio, setshortbio] = useState('');
const [favoriteFood, setfavoriteFood] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);

// Handling the shortbio change
const handleshortbio = (e) => {
	setshortbio(e.target.value);
	setSubmitted(false);
};

// Handling the favoriteFood change
const handlefavoriteFood = (e) => {
	setfavoriteFood(e.target.value);
	setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
	e.preventDefault();
	setSubmitted(true);

	
};

// Showing success message
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1>Зміни збережено!</h1>
	</div>
	);
};

return (
	<div className='App'>
	
	<div>
		<h3>Редагування</h3>
	</div>

	{/* Calling to the methods */}
	<div className="messages">
		{successMessage()}
	</div>

	<form>
		{/* Labels and inputs for form data */}
		

		<label className="labelEdit">Short Bio</label>
		<input onChange={handleshortbio} className="input1"
		value={shortbio} type="shortbio" />

		<label className="labelEdit">Улюблені страви</label>
		<input onChange={handlefavoriteFood} className="input1"
		value={favoriteFood} type="favoriteFood" name='пароль'/>

		<button onClick={handleSubmit} className="button" type="logIn">
		Змінити
		</button>		
	</form>
	</div>
);
}

export default Edit