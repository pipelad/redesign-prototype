import React from 'react';
import style from './Recursos.module.css';
import RecursosItem from './RecursosItem';
import RecursosData from './RecursosData';
import Burbuja from '../ui/Burbuja';

const Recursos = () => {
	return(
		<React.Fragment>
			<Burbuja alineado='center'>Recursos Académicos</Burbuja>
			<div className={style['rows-recursos']}>
				{RecursosData.map(item => {
					if(item.categ === 'Académico') {
						return <RecursosItem data={item} key={item.id}/>
					}
				})}
			</div>
			<Burbuja alineado='center'>Comunidad Tomasina</Burbuja>
			<div className={style['rows-recursos']}>
				{RecursosData.map(item => {
					if(item.categ === 'Comunidad Tomasina') {
						return <RecursosItem data={item} key={item.id}/>
					}
				})}
			</div>
			<Burbuja alineado='center'>Recursos Administrativos / Docentes</Burbuja>
			<div className={style['rows-recursos']}>
				{RecursosData.map(item => {
						if(item.categ === 'Administrativos & Docentes') {
							return <RecursosItem data={item} key={item.id}/>
						}
				})}
			</div>
		</React.Fragment>
	)
}

export default Recursos;