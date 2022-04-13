import React from 'react';
import style from './SearchBar.module.css';
import {ReactComponent as Lupa} from '../../assets/lupa.svg';

const SearchBar = (porps) => {
	return(
		<div className={`${style['search-bar']} card`}>
			<input type="text" placeholder="buscar..." />
			<Lupa />
		</div>
	)
}

export default SearchBar;