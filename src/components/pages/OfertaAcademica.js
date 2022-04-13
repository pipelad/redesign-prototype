import style from './OfertaAcademica.module.css';
import ProgramasItems from '../programas/ProgramasItems';
import ProgramasData from '../programas/ProgramasData';
import Burbuja from '../ui/Burbuja';
import Puntos from '../ui/Puntos';

const OfertaAcademica = (props) => {
	const data = ProgramasData;
	let titulo;
	if(props.tipo === 'profesionales') { titulo='Programas Profesionales' } 
	if(props.tipo === 'Virtual') { titulo='Posgrados Virtuales' } 
	if(props.tipo === 'posgrado') { titulo='Posgrados'};

	return(
		<section className={style['oferta-academica']}>
			<Burbuja alineado='center'>{titulo}</Burbuja>
			<div className={style['puntos-start']}><Puntos /></div>
			<div className={style['puntos-end']}><Puntos /></div>
			<div className={style.programas}>
				{data.map((item) => {
					if(item.modalidad === 'Virtual') {
						return <ProgramasItems tipo={props.tipo} value={item} key={item.id} />
					}
					if((item.modalidad === props.tipo || item.nivel === props.tipo) && item.modalidad !== 'Virtual') {
						return <ProgramasItems tipo={props.tipo} value={item} key={item.id} />
					}
				})}
			</div>
			{props.tipo === 'profesionales' ? <p className={style.note}>* mínimo 3 materías por semestre</p> : ''}
		</section>
	)
}

export default OfertaAcademica;