import style from './RecursosUniversitarios.module.css';
import Recursos from '../recursos/Recursos';

const RecursosUniversitarios = () => {
	return(
		<section className={style.recursos}>
			<Recursos />
		</section>
	)
}

export default RecursosUniversitarios;