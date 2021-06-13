import React from 'react';
import Nav from '../Nav/Nav';
import { ReactComponent as CodingSVG } from '../../assets/coding.svg';
import './Home.css';

const Home = () => {
	return (
		<div className='home-container'>
			<div className='home__left'>
				<div className='header-text'>
					<h1>
						Hi There👋 <br /> I'm Ashirbad Behera
					</h1>
					<p>A Web Developer and student 👨‍💻</p>
				</div>
				<Nav />
			</div>
			<CodingSVG style={{ transform: 'scale(0.8)' }} className='home__svg' />
		</div>
	);
};

export default Home;
