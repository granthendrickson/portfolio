import React from 'react';

// Components
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ScrollLine from '../components/ScrollLine';

export default function Home() {
	return (
		<div className='home'>
			<Navbar></Navbar>
			<Header></Header>
			<ScrollLine></ScrollLine>
		</div>
	);
}
