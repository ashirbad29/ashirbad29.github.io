import React from 'react';
import './SkillCard.css';

const SkillCard = ({ name, url }) => {
	return (
		<div className='card-container'>
			<img src={url} alt='skill-icon' />
			<h3>{name}</h3>
		</div>
	);
};

export default SkillCard;
