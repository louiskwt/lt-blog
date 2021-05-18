import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../context/userContext';

const Create = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('mario');
	const [isLoading, setIsLoading] = useState(false);
	const { user } = useContext(UserContext);

	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = { title, body, author };
		setIsLoading(true);
		fetch('http://localhost:8000/blogs', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(blog)
		}).then(() => {
			console.log('new blog added');
			setIsLoading(false);
			history.push('/');
		});
	};
	return (
		<div className='form'>
			<h2>Add a new Blog</h2>
			<form onSubmit={handleSubmit}>
				<label>Blog Title:</label>
				<input
					type='text'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					required
				/>
				<label>Blog Content:</label>
				<textarea
					required
					value={body}
					onChange={(e) => setBody(e.target.value)}
				></textarea>
				<label>Blog Author: </label>
				<select
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
				>
					<option value='mario'>{user.name}</option>
					<option value='yoshi'>Anonymous Guest</option>
				</select>
				{!isLoading && <button>Add Blog</button>}
				{isLoading && <button disabled>Adding blog...</button>}
			</form>
		</div>
	);
};

export default Create;
