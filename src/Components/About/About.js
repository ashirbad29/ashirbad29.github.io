import React from 'react';
import Nav from '../Nav/Nav';
import FooterLink from '../FooterLink/FooterLink';
import './About.css';

const About = () => {
	return (
		<div className='section-container container'>
			<h1 className='center-text'>About</h1>
			<Nav />
			<div className='about-content'>
				<p>
					Hi, I am Ashirbad, I love writing code to build things. I love all
					things about Tech and Anime😄.
				</p>

				<p>
					I am a computer science undergrad from Trident academy of technology
					i'm currently in my pre-final year. i spent most of my time exploring
					and learning things.
				</p>

				<p>
					Nowadays I mostly work on websites and JavaScript stuff. occasionally
					i solve some problem on{' '}
					<a
						href='https://leetcode.com/ashirbad29/'
						target='_blank'
						rel='noreferrer'
					>
						Leetcode
					</a>{' '}
					too.
				</p>

				<FooterLink
					phrase='Checkout my '
					link='Projects!'
					toAddress='/projects'
				/>
			</div>
		</div>
	);
};

export default About;
