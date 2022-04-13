import style from './Burbuja.module.css';
import fondo from '../../assets/recortes__burbuja.png';

const Burbuja = (props) => {
	let leftMargin, rightMargin = '0';

	if(props.alineado === 'left') {
		leftMargin = '2rem';
	} else if(props.alineado === 'right') {
		leftMargin = 'calc(100% - (37.2rem + 2rem))'
	} else if(props.alineado === 'center') {
		leftMargin = 'auto';
		rightMargin = 'auto';
	} else {
		leftMargin = 'none';
	}

	const inlineBg = {
		backgroundImage: `url(${fondo})`,
		marginLeft: leftMargin,
		marginRight: rightMargin 
	}

	return(
		<h2 style={inlineBg} className={style.burbuja}>
			<span>{props.children}</span>
		</h2>
	)
}

export default Burbuja;