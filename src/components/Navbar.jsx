import React from 'react';

import '../styles/navbar.css';

export default function Navbar() {
	return (
		<div className='navbar'>
			<div className='logo'></div>
			<ul className='nav-menu'>
				<li className='nav-item'>About</li>
				<li className='nav-item'>My Work</li>
				<li className='nav-item'>Contact</li>
				<li className='nav-item'>
					<button id='resume-btn'>Resume</button>
				</li>
			</ul>
		</div>
	);
}
