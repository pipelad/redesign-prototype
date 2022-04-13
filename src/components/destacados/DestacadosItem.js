import { Link } from 'react-router-dom';
import style from './DestacadosItem.module.css';
import NewTag from '../../assets/recortes__foto_new.png';

export const SimpleDestacado = (props) => {
	const itemClass = props.span ? `${style['simple-link']} ${style['span-2']} card` : `${style['simple-link']} card`;

	if(props.tipo === 'link') {
		<Link className={itemClass} to={props.link}>
			{props.text}
		</Link>
	}

	return(
		<a className={itemClass} href={props.link} target={props.target}>
			{props.text}
		</a>
	);
}

const DestacadoItem = (props) => {
	if(props.tipo === 'link') {
		return(
			<Link className={`${style['destacado-button']} card sombra`} to={props.link}>
				<div className={style['intro-img']}><img src={props.src} /></div>
				<div className={`${style.text} ${props.nuevo && style['text-nuevo']}`}>{props.text}</div>
				{props.nuevo && <img className={style.new} src={NewTag} />}
			</Link>
		);
	}

	return(
		<a className={`${style['destacado-button']} card sombra`} href={props.link} target={props.target}>
			<div className={style['intro-img']}><img src={props.src} /></div>
			<div className={`${style.text} ${props.nuevo && style['text-nuevo']}`}>{props.text}</div>
			{props.nuevo && <img className={style.new} src={NewTag} />}
		</a>
	);
}

export default DestacadoItem;