import React from 'react';
import './Projects.css';

const ProjectCard = ({
	projectName,
	description,
	imageUrl,
	githubUrl,
	projectUrl,
}) => {
	return (
		<div className='project-card'>
			<div className='image-container'>
				<a href={projectUrl} className='project-external-link'>
					<img src={imageUrl} alt='project-demo' className='project-image' />
				</a>
			</div>

			<div className='project-details-container'>
				<h2 className='project-heading'>{projectName}</h2>
				<p className='project-details'>{description}</p>
				<a href={githubUrl} className='project-github-link'>
					Github Repo
				</a>
			</div>
		</div>
	);
};

export default ProjectCard;
