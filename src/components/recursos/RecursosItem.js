import style from './RecursosItem.module.css';

const RecursosItem = (props) => {

	return(
		<a className={style.recurso} href={props.data.link} target="_blank">
			<div className={style.titulo}><i className={`${props.data.icono} ${style.icono}`}></i> {props.data.titulo}</div>
			<div className={style.descripcion}>{props.data.descripcion}</div>
			<div className={style['leer-mas']}><div className="card">Visitar</div></div>
		</a>
	)
}

export default RecursosItem;