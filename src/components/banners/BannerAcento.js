import { Link } from 'react-router-dom';
import style from './BannerAcento.module.css';
import banner from '../../assets/recortes__banner_acento.png';

const BannerAcento = () => {
	return(
		<div className={style['banner-acento']}>
			<div className={style['acento-descripcion']}>
				<div>
					<h1>¡En la Santotomás impulsamos tu crecimiento profesional!</h1>
					<p>La Universidad Santo Tomás te acompaña con una amplia oferta académica, con acreditación multicampus, pertinente y con enfoque humanista</p>
					<div className={style['acento-menu']}>
						<Link className={`${style['nav-destacado']} card sombra`} to="./profesionales">carreras profesionales</Link>
						<Link className={`${style['nav-destacado']} card sombra`} to="./posgrados">Posgrados</Link>
						<Link className={`${style['nav-destacado']} card sombra`} to="./virtuales">Posgrados Virtuales</Link>
					</div>
				</div>
			</div>
			<div className={style['acento-imagen']}>
				<img src={banner} alt="Somos experiencia y calidad" />
			</div>
		</div>
	)
}

export default BannerAcento;