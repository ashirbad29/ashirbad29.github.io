import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Nav from '../Nav/Nav';
import { skillsList } from '../../assets/skillsData';
import './Skills.css';

const Skills = () => {
	return (
		<div className='section-container'>
			<h1 className='center-text'>My Skills</h1>

			<Nav />

			<p>
				Passionate about new technologies, I keep exploring stuffs, Here's the
				tech stack i have worked with{' '}
			</p>

			<div className='skill-container'>
				{skillsList.map((skill, idx) => {
					return <img src={skill.iconUrl} alt='skill' key={idx} />;
				})}
			</div>

			<FooterLink
				phrase='Checkout my '
				link='Projects!'
				toAddress='/projects'
			/>
		</div>
	);
};

export default Skills;
