import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { fireAuth } from '../firebase/config';
import UserContext from '../context/userContext';

const Navbar = () => {
	const { user, setUser } = useContext(UserContext);

	const handleLogOut = () => {
		fireAuth
			.signOut()
			.then(() => {
				setUser(null);
			})
			.catch((error) => {
				console.log(error);
				alert('Something went wrong... Please try again');
			});
	};

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
				{user && (
					<Link to='/logout' onClick={handleLogOut}>
						Log Out
					</Link>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
