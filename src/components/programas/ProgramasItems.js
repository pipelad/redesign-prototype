import style from './ProgramasItems.module.css';

const ProgramasItems = (props) => {

	return(
		<div className={`${style.programa} card sombra`}>
			<div className={style.titulo}><a href={props.value.link} target={props.value.target}>{props.value.nombre}</a></div>
			<div className={`${style.imagen}`}><img src={props.value.foto} alt={props.value.nombre} /></div>
			<div className={style.info}>
				<div className={style.facultad}>Facultad: {props.value.facultad}</div>
				<div className={style.snies}><b>SNIES:</b> {props.value.SNIES}</div>
				<div className={style.valor}>
					<b>{props.tipo === 'profesionales' ? 'Invesrión por Materia:' : 'Invesrión por Semestre:'}</b> $
					{props.value.valor}
				</div>
			</div>
			<div className={style['leer-mas']}>
				<a className='card' href={props.value.link} target={props.value.target}>Conocer más</a>
			</div>
		</div>
	)
}

export default ProgramasItems;