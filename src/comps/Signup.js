import React, { useState, useContext } from 'react';
import { fireAuth } from '../firebase/config';
import { useHistory } from 'react-router-dom';
import UserContext from '../context/userContext';

const Signup = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { setUser } = useContext(UserContext);

	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		fireAuth
			.createUserWithEmailAndPassword(email, password)
			.then((userCredential) => {
				// Signed In
				const user = userCredential.user.email;
				// Clear input
				setEmail('');
				setPassword('');
				// Generate a user name based on that login email
				let username = '';
				for (let i in user) {
					if (user[i] === '@') {
						username = user.slice(0, i);
					}
				}
				// Set user
				setUser({
					id: user,
					name: username
				});
				// redirect to home page
				history.push('/');
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode + ':' + errorMessage);
				alert(errorMessage);
			});
	};

	return (
		<div className='form'>
			<h2>Sign Up</h2>
			<form onSubmit={handleSubmit}>
				<label>Email:</label>
				<input
					type='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<label>Password:</label>
				<input
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>

				<button>Sing Up</button>
			</form>
		</div>
	);
};

export default Signup;
