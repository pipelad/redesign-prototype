import style from './NoticiasItem.module.css';

const NoticiasItem = (props) => {

	return(
		<div className={`${style['noticia-item']} card sombra`}>
			<div className={style.imagen}>
				<img src={props.foto} />
			</div>
			<div className={style.title}>
				<a href={props.link} target="_blank">{props.title}</a>
			</div>
			<div className={style.content}>
				<div className={style.publicacion}>
					Publicado: {props.fecha}
				</div>
				<div className={style.descripcion}>
					{props.description}
				</div>
				<div className={style['leer-mas']}>
					<a className="card" href={props.link} target="_blank">Leer más</a>
				</div>
			</div>
		</div>
	)
}

export default NoticiasItem;