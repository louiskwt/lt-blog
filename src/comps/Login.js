import React, { useState, useContext } from 'react';
import { fireAuth } from '../firebase/config';
import { useHistory } from 'react-router-dom';
import UserContext from '../context/userContext';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { setUser } = useContext(UserContext);

	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		fireAuth
			.signInWithEmailAndPassword(email, password)
			.then((userCredential) => {
				// Signed In
				const user = userCredential.user.email;
				setEmail('');
				setPassword('');
				setUser(user);
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
			<h2>Login</h2>
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

				<button>Log in</button>
			</form>
		</div>
	);
};

export default Login;
