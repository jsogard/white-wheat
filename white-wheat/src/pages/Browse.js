import React from 'react';
import './Browse.css';
import HobbyCard from '../components/HobbyCard'; 
import {GetAllHobbies} from '../data/hobbyService';

function Browse() {
	const hobbies = GetHobbies().map((hobby) => 
			<HobbyCard Hobby={hobby} />
		);
	return (
		<div>
			{hobbies}
		</div>
		);
}


function GetHobbies() {
	return GetAllHobbies();
}

export default Browse;