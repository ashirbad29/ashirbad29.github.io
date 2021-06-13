import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
const Nav = () => {
	return (
		<nav>
			<ul>
				<li className='nav-links'>
					<Link className='link' to='/'>
						Home
					</Link>
				</li>
				<li className='nav-links'>
					<Link className='link' to='/about'>
						About
					</Link>
				</li>
				<li className='nav-links'>
					<Link className='link' to='/contact'>
						Contact
					</Link>
				</li>
				<li className='nav-links'>
					<Link className='link' to='/projects'>
						Projects
					</Link>
				</li>
				<li className='nav-links'>
					<Link className='link' to='/skills'>
						Skills
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
