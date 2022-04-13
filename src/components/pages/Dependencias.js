import style from './Dependencias.module.css';
import RecursosItem from '../recursos/RecursosItem';
import DependenciasData from '../recursos/DependenciasData';
import Burbuja from '../ui/Burbuja';

const Dependencias = (props) => {
	return(
		<section className={style.dependencias}>
			<Burbuja alineado='center'>Dependencias, Unidades y Departamentos</Burbuja>
			<div className={style['row-dependencias']}>
				{DependenciasData.map(item => {
					return <RecursosItem data={item} key={item.id}/>
				})}
			</div>
		</section >
	)
}

export default Dependencias;