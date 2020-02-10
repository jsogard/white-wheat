import React from 'react';
import './Browse.css';
import {GetAllHobbies} from '../data/hobbyService';

function Browse() {
	const hobbies = GetHobbies().map((hobby) => 
			<li>{hobby.title}</li>
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