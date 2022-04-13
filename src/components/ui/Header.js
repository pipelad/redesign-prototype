import { useState } from 'react';
import { Link } from 'react-router-dom';

import style from './Header.module.css';
import logo from '../../assets/recortes__logo.png';
import botonInscripcion from '../../assets/recortes__btn_insc.png';

const Navigation = (props) => {
	return(
		<ul className={props.styleName}>
			<li className={style['main-link']}>
				<Link to="/" className={`card`}>Inicio</Link>
			</li>
			<li className={`${style['main-link']} ${style.submenu}`}>
				<a className={`card ${style.oferta}`}>Oferta académica</a>
				<ul>
					<Link className={style['sbumenu-link']} to="./profesionales">carreras profesionales</Link>
					<Link className={style['sbumenu-link']} to="./posgrados">Posgrados</Link>
					<Link className={style['sbumenu-link']} to="./virtuales">Posgrados Virtuales</Link>
				</ul>
			</li>
			<li className={style['main-link']}>
				<a href="" target="_blank" className={`card`}>La Santoto</a>
			</li>
			<li className={style['main-link']}>
				<Link to="./recursos" className={`card`}>Recursos</Link>
			</li>
			<li className={style['main-link']}>
				<Link to="./dependencias" className={`card`}>Dependencias</Link>
			</li>
			<li className={style['main-link']}>
				<a href="https://tomasnoticias.usta.edu.co/" target="_blank" className={`card`}>Noticias</a>
			</li>
			<li className={style['main-link']}>
				<a href="https://www.ustadistancia.edu.co/mapa/" target="_blank" className={`card`}>SIG</a>
			</li>
		</ul>
	)
}

const Header = props => {
	const [navigationOpen, setNavigationOpen] = useState(false);

	const openNavigationHandler = (e) => {
		if(e.target.textContent === 'Oferta académica') {
			return
		}
		setNavigationOpen(!navigationOpen);
	}

	return(
		<header className={`${style.header} ${props.style}`}>
			<div className={style.logo}>
				<a href="./">
					<img src={logo} alt="Universidad Santo Tomás" />
				</a>
			</div>
			<nav className={style['main-navigation']}>
				<Navigation styleName={style.desktop} />
				<a href="http://oas.usta.edu.co:8080/sgacampus/services/inscripciones/home" target="_blank" className={style.suscribir}>
					<img src={botonInscripcion} alt="Inscríbete ya" />
				</a>
			</nav>
			<div className={style['movile-navigation']} >
				{navigationOpen && <div className={style['navigation-background']} /> }
				<div onClick={openNavigationHandler} className={`${!navigationOpen ? style.hamburguesa : style['hamburguesa-close']}`} />
				{navigationOpen && <div onClick={openNavigationHandler} className={style['movile-main-navigation']}><Navigation /></div>}
			</div>
		</header>
	)
}

export default Header;