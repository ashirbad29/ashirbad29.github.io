import React from 'react';
import Nav from '../Nav/Nav';
import FooterLink from '../FooterLink/FooterLink';
import { ProjectData } from '../../assets/projectsData';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
	return (
		<div
			className='section-container projects-container'
			id='projects-container'
		>
			<h1 className='center-text'>My Projects</h1>
			<Nav />

			<div className='projects-cards-container'>
				{ProjectData.map(
					(
						{ projectName, description, imageUrl, githubUrl, projectUrl },
						idx
					) => {
						return (
							<ProjectCard
								key={idx}
								projectName={projectName}
								description={description}
								imageUrl={imageUrl}
								githubUrl={githubUrl}
								projectUrl={projectUrl}
							/>
						);
					}
				)}
			</div>

			<FooterLink phrase='Contact ' toAddress='/contact' link='Me' />
		</div>
	);
};

export default Projects;
