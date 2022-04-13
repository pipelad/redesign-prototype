import React from 'react';
import style from './SedesItem.module.css';
import { ReactComponent as SedeSvg } from '../../assets/sede.svg';

const SedesItem = (props) => {
	let target = "_blank"
	if(props.sede === 'Modalidad Distancia') {
		target = "_self";
	}
	return(
		<a href={props.url} target={target} className={style['sede-item']}>
			<SedeSvg />
			<div className={`${style.title} card`}>
				{props.sede}
			</div>
			<img src={props.foto}  />

		</a>
	)
}

export default SedesItem;