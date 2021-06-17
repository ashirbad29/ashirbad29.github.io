import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';
const Nav = () => {
	const { pathname } = useLocation();

	return (
		<nav>
			<ul>
				<li className={`nav-links ${pathname === '/' ? 'hide' : ''}`}>
					<Link className='link' to='/'>
						Home
					</Link>
				</li>
				<li className={`nav-links ${pathname === '/about' ? 'hide' : ''}`}>
					<Link className='link' to='/about'>
						About
					</Link>
				</li>
				<li className={`nav-links ${pathname === '/contact' ? 'hide' : ''}`}>
					<Link className='link' to='/contact'>
						Contact
					</Link>
				</li>
				<li className={`nav-links ${pathname === '/projects' ? 'hide' : ''}`}>
					<Link className='link' to='/projects'>
						Projects
					</Link>
				</li>
				<li className={`nav-links ${pathname === '/skills' ? 'hide' : ''}`}>
					<Link className='link' to='/skills'>
						Skills
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
