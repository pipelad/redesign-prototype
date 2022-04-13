import style from './DestacadosItems.module.css';
import DestacadosItem, { SimpleDestacado } from './DestacadosItem';
import Puntos from '../ui/Puntos';
import Burbuja from '../ui/Burbuja';

import Infromate from '../../assets/recortes__banner_informacion.png';
import Interes from '../../assets/recortes__enlaces_interes.png';

//array info botones
import interes from './InteresData';
import destacados from './DestacadoData';

const DestacadosItems = (props) => {
	// cambiar el estado
	const interesArr = interes;
	const destacadoArr = destacados;

	// tipo

	return(
		<div className={style['zona-destacados']}>
			<div className={style['menu-destacados-wrap']}>
				<div className={style['menu-destacados']}>
					{destacadoArr.map((item) => {
						if(item.grupo.includes(props.tipo)) {
							return(
								<DestacadosItem 
									key={item.text}
									tipo={item.tipo}
									link={item.link}
									target={item.target}
									src={item.imagen}
									text={item.text}
									nuevo={item.nuevo}
								/>
							)
						}
					})}
				</div>
			</div>
			<div className={style.informate}>
				<div className={style['informate-puntos']}><Puntos color="azul" /></div>
				<img src={Infromate} alt="Infromate sobre la Santo Tomás" />
			</div>
			<div className={style.interes}>
				<img src={Interes} alt="Esto puede ser de tu interés" />
			</div>
			<div className={style['menu-interes-wrap']}>
				<Burbuja alineado={'center'}>¡Enlaces de interés!</Burbuja>
				<div className={style['menu-interes']}>
					{interesArr.map((item)=> {
						if(item.grupo.includes(props.tipo)) {
							return(
								<SimpleDestacado
									key={item.text} 
									tipo={item.tipo}
									target={item.target}
									link={item.link}
									text={item.text}
									span={item.span}
								/>
							)
						}
					})}
				</div>
			</div>
		</div>
		
	);
}

export default DestacadosItems;