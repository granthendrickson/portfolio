import React from 'react';

import '../styles/scrollLine.css';

export default function ScrollLine() {
	return (
		<div className='scroll-line-container'>
			<div className='scroll-line'>
				<div className='text'>SCROLL</div>
				<div className='line-container'>
					<div className='line'></div>
				</div>
			</div>
		</div>
	);
}
