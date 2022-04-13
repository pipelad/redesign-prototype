import style from './Sedes.module.css';
import SedesItem from './SedesItem';
import Bog from '../../assets/recortes_sede_bog.png';
import Duad from '../../assets/recortes_sede_duad.png';
import Buca from '../../assets/recortes_sede_buca.png';
import Tunja from '../../assets/recortes_sede_tunja.png';
import Medallo from '../../assets/recortes_sede_medellin.png';
import Villavo from '../../assets/recortes_sede_villavo.png';

const sedesData = [
	{
		sede: 'Bogotá',
		url: 'https://usantotomas.edu.co/',
		foto: Bog
	},
	{
		sede: 'Modalidad Distancia',
		url: './',
		foto: Duad
	},
	{
		sede: 'Bucaramanga',
		url: 'http://www.ustabuca.edu.co/',
		foto: Buca
	},
	{
		sede: 'Tunja',
		url: 'http://www.ustatunja.edu.co/',
		foto: Tunja
	},
	{
		sede: 'Medellín',
		url: 'https://ustamed.edu.co/',
		foto: Medallo
	},
	{
		sede: 'Villavicencio',
		url: 'https://www.ustavillavicencio.edu.co/',
		foto: Villavo
	}
]

const Sedes = (props) => {
	return(
		<div className={style['sedes-seccion']}>
			<h2>Sedes y Seccionales</h2>
			<div className={style.sedes}>
				{sedesData.map((item)=> {
					return(
						<SedesItem 
							key={item.sede}
							sede={item.sede}
							url={item.url}
							foto={item.foto}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default Sedes;