import React from 'react';
import Nav from '../Nav/Nav';
import FooterLink from '../FooterLink/FooterLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTwitterSquare,
	faGithubSquare,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import './Contact.css';

const Contact = () => {
	return (
		<div className='section-container container'>
			<h1 className='center-text'>Get in Touch</h1>
			<Nav />

			<p className='text-content'>
				Drop me an email if there is anything you would like to talk about.
				Could be a hello, a potention work oppertunity - anything. <br />
			</p>
			<p className='mail-link'>
				<a href='mailto:ashirbadbehera29@gmail.com'>
					ashirbadbehera29@gmail.com
				</a>
			</p>
			<p>
				And if you'd like to <strike>stalk</strike> follow me on socila media
				and other websites on the internet, here are some buttons that leads to
				my profiles.
			</p>

			<div className='social-icons-container'>
				<a
					className='social-icon'
					href='https://twitter.com/ashirbad_29'
					style={{ color: '#00acee' }}
					target='_blank'
					rel='noreferrer'
				>
					<FontAwesomeIcon icon={faTwitterSquare} size='2x' />
				</a>

				<a
					className='social-icon'
					href='https://github.com/ashirbad29'
					style={{ color: '#000' }}
					target='_blank'
					rel='noreferrer'
				>
					<FontAwesomeIcon icon={faGithubSquare} size='2x' />
				</a>

				<a
					className='social-icon'
					href='https://linkedin.com/in/ashirbad29'
					style={{ color: '#0077b5' }}
					target='_blank'
					rel='noreferrer'
				>
					<FontAwesomeIcon icon={faLinkedin} size='2x' />
				</a>
			</div>

			<FooterLink phrase='Know more ' link='about me' toAddress='/about' />
		</div>
	);
};

export default Contact;
