import { useRef, useEffect }  from 'react';

import style from './BannerHome.module.css';
import BannerUno from '../../assets/recortes__banner_home_1.png';
import BannerDos from '../../assets/recortes__banner_home_2.png';
import BannerTres from '../../assets/recortes__banner_home_3.png';

const BannerHome = () => {
	const bannerWrap = useRef(null);
	const margins = ['0', '-100%', '-200%'];
	let i = 0;

	useEffect(() => {
		window.setInterval(() => {
			bannerWrap.current.style.marginLeft = margins[i];
			i++
			if(i === 3) {
				i = 0;
			}
		}, 4000)
	}, [bannerWrap])

	return(
		<div className={`${style['banner-home']} card sombra`}>
			<div className={style['banner-wrap']}>
				<div ref={bannerWrap}>
					<img src={BannerUno} alt="Inscripciones abiertas" />
					<img src={BannerDos} alt="Inscripciones abiertas" />
					<img src={BannerTres} alt="Inscripciones abiertas" />
				</div>
			</div>
			
		</div>
	)
}

export default BannerHome;