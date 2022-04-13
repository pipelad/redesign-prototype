import style from './SomosBtn.module.css';

const SomosBtn = (props) => {
	return(
		<button className={`${style.button} card`} onClick={props.click}>
			<div className={`${style.text} card`}>
				<span>{props.text}</span>
			</div>
			<div className={style.image}>
				<img src={props.src} />
			</div>
		</button>
	);
}

export default SomosBtn;
