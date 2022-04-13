import style from './RapidoLogos.module.css';
import Plazoleta from '../../assets/recortes__inscripcion_rapida.jpg';
import Logos from '../../assets/recortes__logos_acred.png';

const RapidoLogos =  (props) => {
	const inlineBg = {
		backgroundImage: `url(${Plazoleta})`,
	}
	return(
		<div className={style['rapido-logos']}>
			<div  style={inlineBg} className={style.rapido}>
				<div className={style.overlay}>
					<div className={style.content}>
						<h2 className={style['rapido-title']}>
							Inscríbete y matricúlate a un solo clic
						</h2>
						<p className={style['rapido-texto']}>
							Aquí puedes iniciar el proceso de inscripción y matrícula de forma fácil y segura
						</p>
						<a href="http://oas.usta.edu.co:8080/sgacampus/services/inscripciones/home?__hstc=52145270.67588bc98e17b05670dab2a36b5d08cd.1638549057150.1648124548416.1648643142493.40&__hssc=52145270.1.1648643142493&__hsfp=1086152785" target="_blank" className={`${style.button} card`}>Clic Aquí</a>
					</div>
				</div>
			</div>
			<div className={style.logos}>
				<img src={Logos} />
			</div>
		</div>
	)
}

export default RapidoLogos;
