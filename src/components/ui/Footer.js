import style from './Footer.module.css';
import LogoBlanco from '../../assets/recortes__logo_blanco.png';
import Bienestar from '../../assets/recortes__bienestar.jpg';
import SocialMedia from '../ui/SocialMedia';

const Footer = (props) => {
	return(
		<footer className={`${style.footer}`}>
			<div className={style.legales}>
				Institución de Educación Superior, reconocida mediante Resolución 3645 del 06 de agosto de 1965 expedida por el Ministerio de Justicia.
				<br />
				Institución de Educación Superior sujeta a la inspección y vigilancia del Ministerio de Educación Nacional - SNIES 1704
				<br />
				Notificaciones Judiciales y/o Extrajudiciales. El siguiente correo es de uso exclusivo para juzgados, tribunales y altas cortes o requerimientos de autoridades administrativas: <a href="mailto:secre.juridico@usantotomas.edu.co" className={style.mailto}>secre.juridico@usantotomas.edu.co</a>
			</div>
			<div className={style['footer-content']}>
				<div>
					<div className={style['footer-contacto']}>
						<img src={LogoBlanco} alt="Universidad Santo Tomás" /><br />
						<p className={style['contacto-legal']}>
						Institución de Educación Superior sujeta a la inspección y vigilancia del Ministerio de Educación Nacional - SNIES 1704
						</p>
						<p className={style['contacto-edificios']}>
						<span>
						Línea gratuita nacional:<br />
						01 8000 111 180 <br />
						PBX: 6015878797<br />  
						contacto@usantotomas.edu.co
						</span><br />
						Sede Principal: Carrera 9 n.° 51-11<br />
						Edificio Doctor Angélico: Carrera 9 n.° 72-90<br />
						Edificio El Aquinate:  Carrera 9A n.° 63-28<br />
						Admisiones: Edificio Santo Domingo de Guzmán: Carrera 7 n.° 51A-13<br />
						Decanatura de División de Educación Abierta y a Distancia: Carrera 10 n.° 72-50<br />
						Campus San Alberto Magno: Autopista Norte calle 205, vía Arrayanes km 1.6<br /><br/>

						Bogotá D.C.
						</p>		
					</div>
					<div className={style['footer-menu']}>
						<h3 className={style.subtitulo}>Enlaces de Interés</h3>
						<a target="_blank" href="">Sistema Académico SAC</a>
						<a target="_blank" href="">Centro De Soporte Académico</a>
						<a target="_blank" href="">Red De Servicios</a>
						<a target="_blank" href="">Calendario Académico</a>
						<a target="_blank" href="">Derechos Pecuniarios</a>
						<a target="_blank" href="">(PQR) Reconocimientos, Sugerencias O Quejas</a>
						<a target="_blank" href="">Registro WEB RTE - DIAN</a>
						<a target="_blank" href="">Transparencia Y Acceso A La Información Pública</a>
						<a target="_blank" href="">Acreditación Institucional De Alta Calidad Multicampus</a>
						<a target="_blank" href="">Vive La Reacreditación Institucional</a>
						<a target="_blank" href="">Acreditación Institucional Internacional</a>
						<a target="_blank" href="">Aviso De Privacidad Y Habeas Data</a>
						<a target="_blank" href="">Contáctenos</a>
					</div>
					<div className={style['destacado-footer']}>
						<a href="" target="_blank" className={style.biestar}>
							<img src={Bienestar} alt="Bienestar Plus" />
						</a>
					</div>
					<div className={style.social}>
						©2022 Universidad Santo Tomás. Todos los derechos reservados. <SocialMedia />
					</div>
				</div>	
			</div>
		</footer>
	)
}

export default Footer;