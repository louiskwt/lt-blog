import React, { useState } from 'react';

const Login = () => {
	const [user, setUser] = useState(null);
	const [password, setPassword] = useState(null);

	return (
		<div className='create'>
			<h2>Login</h2>
			<form>
				<label>Blog Title:</label>
				<input
					type='text'
					value={user}
					onChange={(e) => setUser(e.target.value)}
					required
				/>
				<label>Blog Content:</label>
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
