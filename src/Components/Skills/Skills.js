import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Nav from '../Nav/Nav';
import SkillCard from './SkillCard';
import { skillsList } from '../../assets/skillsData';
import './Skills.css';

const Skills = () => {
	return (
		<div className='section-container container'>
			<h1 className='center-text'>My Skills</h1>

			<Nav />

			<p className='align-center'>
				Passionate about new technologies, I keep exploring stuffs, Here's the
				tech stack i have worked with{' '}
			</p>

			<div className='skill-container'>
				{skillsList.map((skill, idx) => {
					return (
						<SkillCard name={skill.skillName} url={skill.iconUrl} key={idx} />
					);
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
