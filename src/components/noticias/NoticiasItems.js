import style from './NoticiasItems.module.css';
import NoticiasItem from './NoticiasItem';

const NoticiaItem = (props) => {
	let cleanData, count = '0';

	if(props.data) {
		const noticiasRawData = Array.from(props.data.querySelectorAll('item'));

		const strip = (html) => {
		   let doc = new DOMParser().parseFromString(html, 'text/html');
		   return doc.body.textContent || "";
		}

		const formatedDate = (date) => {
			const d = new Date(date)
			let mes = `${d.getMonth() + 1}`,
				dia = `${d.getDate()}`,
				año = `${d.getFullYear()}`,
				hora = `${d.getHours()}`,
				minutos = `${d.getMinutes()}`,
				tipo = 'A.M.';

			if(mes.length < 2) { mes = `0${String(mes)}`}
			if(dia.length < 2) { dia = `0${String(dia)}`}

			if(hora >= 13) {
				hora = hora - 12;
				tipo = 'P.M.';
			}

			return `${dia}/${mes}/${año}, ${hora}:${minutos} ${tipo}`;
		}


		let id = 0;

		cleanData = noticiasRawData.map((item) => {
			const root = document.createElement('div');
			const descriptionHTML = root.innerHTML = item.querySelector('description').textContent;

			return {
				id: id++,
				title: item.querySelector('title').textContent.split(' ').length > 10 ? `${item.querySelector('title').textContent.split(' ', 10).join(' ')}...` : `${item.querySelector('title').textContent}.`,
				link: item.querySelector('link').textContent,
				description: root.querySelector('p') ? `${strip(root.querySelector('p').innerHTML).split(' ', 20).join(' ')} ...` : '',
				foto: root.querySelector('img').src,
				fecha: formatedDate(item.querySelector('pubDate').textContent),
				categoria: Array.from(item.querySelectorAll('category')).map((item) => item.innerHTML)
			}
		})
	}	

	return(
		<div className={style['noticias-items']}>
			{cleanData.map((item) => {
				//funcion adicional para filtrar por tipo, para agregar luego en modulo hubspot
				if(count === +props.limit) {
					return
				}
				count++
				return(
					<NoticiasItem 
						key={item.id}
						title={item.title}
						link={item.link}
						description={item.description}
						foto={item.foto}
						fecha={item.fecha} 
					/>
				)
			})}
		</div>

	)
}

export default NoticiaItem;