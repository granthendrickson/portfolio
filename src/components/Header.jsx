import React from 'react';

import '../styles/header.css';

export default function Header() {
	return (
		<div className='header'>
			<div className='text-container'>
				<div className='hello-world'>Hello world! My name is</div>
				<div className='my-name'>Grant Hendrickson.</div>
				<div className='about'>
					I design and build things for the web.
				</div>
			</div>
		</div>
	);
}
