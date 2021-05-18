import React, { useState } from 'react';

const Login = () => {
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);

	return (
		<div className='form'>
			<h2>Login</h2>
			<form>
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
