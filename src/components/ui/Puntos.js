import React from 'react';
import style from './Puntos.module.css';
import {ReactComponent as PuntosSvg} from '../../assets/puntos.svg';

const Puntos = (props) => {

	return(
		<div className={style[`${props.color}`]}>
			<PuntosSvg />
		</div>
	)
}

export default Puntos;
