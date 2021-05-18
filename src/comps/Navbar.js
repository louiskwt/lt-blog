import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../context/userContext';

const Navbar = () => {
	const { user } = useContext(UserContext);

	return (
		<nav className='navbar'>
			<h1>Reactor</h1>
			<div className='links'>
				{user ? (
					<Link to='/'>Home </Link>
				) : (
					<Link to='/signup'>Sign Up </Link>
				)}
				{user ? (
					<Link to='/create'>New Blog </Link>
				) : (
					<Link to='/login'>Log In </Link>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
