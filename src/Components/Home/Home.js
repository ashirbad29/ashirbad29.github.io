import React from 'react';
import Nav from '../Nav/Nav';
import './Home.css';

const Home = () => {
	return (
		<div className='home-container'>
			<div className='header-text'>
				<h1>Welcome to my portfolio!</h1>
				<p>This is Ashirbad, A Web Developer</p>
			</div>
			<Nav />
		</div>
	);
};

export default Home;
