import { useState, useRef, useEffect, useMemo } from 'react';
import style from './Destacados.module.css';
import fondo from '../../assets/recortes__fondo_home.png';
import SearchBar from '../searchbar/SearchBar';
import DestacadosItems from './DestacadosItems';
import SomosBtn from './SomosBtn';

import soyAspirante from '../../assets/recortes__soy_aspirante.png';
import soyEstudiante from '../../assets/recortes__soy_estudiante.png';
import soyAdministrativo from '../../assets/recortes__soy_docente_admin.png';
import soyEgresado from '../../assets/recortes__soy_egresado.png';

const Destacados = (props) => {
	const [estadoVisible, setEstadoVisible] = useState(false);
	const [destacadoVisible, setDestacadoVisible] = useState(false);
	const [tipoVisitante, setTipoVisitante] = useState(null);
	const destacadosRef = useRef(null);
	const estadoRef = useRef(null);

	const options = useMemo(()=>{
		return {
			root: null,
			rootMargin: '0px',
			threshold: 1
		}
	}, [])

	const intersectionCallback = (entries) => {
		const [entry] = entries;
		setEstadoVisible(entry.isIntersecting);
	}

	const observer = new IntersectionObserver(intersectionCallback, options);
	

	const inlineBg = {
		backgroundImage: `url(${fondo})`,
	}

	const soyButtonHandler = (tipo) => {
		setDestacadoVisible(true);
		setTipoVisitante(tipo);
		props.video(true);
	}

	useEffect(()=> {
		if(destacadoVisible) {
			destacadosRef.current.scrollIntoView({block: "start", behavior: "smooth"});
		}
	}, [destacadoVisible, tipoVisitante])

	useEffect(()=> {
		const currentTarget = estadoRef.current;
		if(currentTarget) observer.observe(currentTarget);
		if(currentTarget && estadoVisible) observer.unobserve(currentTarget);

		return() => {
			if(currentTarget) observer.unobserve(currentTarget)
		}

	}, [estadoRef, estadoVisible, options])


	const estadoClass = estadoVisible ? `${style['menu-estado']} ${style.visible}` : `${style['menu-estado']}`;

	return(
		<div style={inlineBg} className={style['destacados-background']} ref={destacadosRef}>
			<div className={estadoClass} ref={estadoRef}>
				<SomosBtn 
					key='1'
					click={() => soyButtonHandler('aspirantes')}
					src={soyAspirante}
					text='Soy Aspirante'
				/>
				<SomosBtn 
					key='2'
					click={() => soyButtonHandler('estudiantes')}
					src={soyEstudiante}
					text='Soy Estudiante'
				/>
				<SomosBtn 
					key='3'
					click={() => soyButtonHandler('administrativos')}
					src={soyAdministrativo}
					text='Soy Docente o Administrativo'
				/>
				<SomosBtn 
					key='4'
					click={() => soyButtonHandler('egresados')}
					src={soyEgresado}
					text='Soy Egresado'
				/>
			</div>
			<div  className={style.search}><SearchBar /></div>
			<h2 className={style['destacados-title']}>¡Nuestra Institución a tu alcance!</h2>
			{destacadoVisible && <DestacadosItems tipo={tipoVisitante}  /> }
		</div>
	)
}

export default Destacados;