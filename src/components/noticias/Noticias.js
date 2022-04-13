import { useEffect, useState } from 'react';
import axios from 'axios';

import style from './Noticias.module.css';
import NoticiaItems from './NoticiasItems';
import Burbuja from '../ui/Burbuja';

const Noticias = (props) => {
	const [noticiasData, setNoticiasData] = useState(null);
	const [errorNoticias, setErrorNoticias] = useState(null);
	const [eventosData, setEventosData] = useState(null);
	const [errorAgenda, setErrorAgenda] = useState(null);
	const parser = new DOMParser();

	useEffect(() => {
		axios.get('https://tomasnoticias.usta.edu.co/rss.xml',{responseType: 'text'})
			 .then(response => setNoticiasData(parser.parseFromString(response.data, "text/xml")))
			 .catch(err => setErrorNoticias(err.message));

		axios.get('https://tomasnoticias.usta.edu.co/tag/ag%C3%A9ndate/rss.xml',{response: 'text'})
			 .then(response => setEventosData(parser.parseFromString(response.data, "text/xml")))
			 .catch(err => setErrorAgenda(err.message)); 
	}, [])

	
	return(
		<section className={style.noticias}>
			<Burbuja alineado='left'>Últimas Noticias</Burbuja>
			{errorNoticias !== null ? <p className={style.error}>Se presentó un error con las noticias: {errorNoticias}</p> : ''}
			{noticiasData !== null ? <NoticiaItems data={noticiasData} type='noticia' limit='4' /> : <p className={style.centered}><i className="fa-solid fa-spinner fa-spin-pulse"></i></p>}
			<Burbuja alineado='left'>Agéndate</Burbuja>
			{errorAgenda !== null ? <p className={style.error}>Se presentó un error con la agenda: {errorAgenda}</p> : ''}
			{eventosData !== null ? <NoticiaItems data={eventosData} type='eventos' limit='4' /> : <p className={style.centered}><i className="fa-solid fa-spinner fa-spin-pulse"></i></p>}
		</section>
		
	);
}

export default Noticias;