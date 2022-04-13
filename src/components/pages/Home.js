import { useEffect, useState } from 'react';
import style from './Home.module.css';
import BannerAcento from '../banners/BannerAcento';
import BannerHome from '../banners/BannerHome';
import Destacados from '../destacados/Destacados';
import Puntos from '../ui/Puntos';
import Video from '../video/Video';
import Noticias from '../noticias/Noticias';
import Sedes from '../sedes/Sedes';
import RapidoLogos from '../ui/RapidoLogos';

const Home = (props) => {
	const [videoMargin, setVideoMargin] = useState(false);

	const margin = videoMargin ? `${style['minus-margin']}` : '';

	useEffect(() => {
		document.title = 'Universidad Santo Tomás';
	}, []);

	return(
		<main>
			<BannerAcento />
			<BannerHome />
			<Destacados video={setVideoMargin} />
			<div className={`${style['home-video']} ${margin}`}>
				<div className={style['grid-puntos-start']}><Puntos color="gris" /></div>
				<div className={style['grid-video']}><Video video="LIgC5lGavi0" /></div>
				<div className={style['grid-puntos-end']}><Puntos color="gris" /></div>
			</div>
			<Noticias />
			<Sedes />
			<RapidoLogos />
		</main>
	)
}

export default Home;