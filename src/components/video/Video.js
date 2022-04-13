import style from './Video.module.css';

const Video = (props) => {
	const url = `https://www.youtube.com/embed/${props.video}`;
	return(
		<div className={style['video-wraper']}>
			{props.video ? <iframe src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : 'no video found'}
		</div>
	)
}

export default Video;