import RecortesUrl from '../../assets/RecortesUrl';
// tipo, link, target, text, imagen, nuevo, grupo

const destacados = [
	{
		tipo: 'link',
		link: '/cau',
		target: null,
		text: 'Centros de Atención Universitaria',
		imagen: RecortesUrl.FotoCau,
		nuevo: false,
		grupo: ['aspirantes', 'estudiantes', 'administrativos', 'egresados']
	},
	{
		tipo: 'anchor',
		link: 'https://admisiones.usta.edu.co/',
		target: '_blank',
		text: 'Admisiones',
		imagen: RecortesUrl.FotoAdmisiones,
		nuevo: false,
		grupo: ['aspirantes', 'estudiantes']
	},
	{
		tipo: 'link',
		link: '/tarifas',
		target: null,
		text: 'Tarifas',
		imagen: RecortesUrl.FotoTarifas,
		nuevo: false,
		grupo: ['aspirantes', 'estudiantes']
	},
	{
		tipo: 'link',
		link: '/profesionales',
		target: null,
		text: 'Carreras profesionales',
		imagen: RecortesUrl.FotoProfesional,
		nuevo: false,
		grupo: ['aspirantes', 'estudiantes', 'egresados', 'administrativos']
	},
	{
		tipo: 'link',
		link: '/posgrados',
		target: null,
		text: 'Posgrados',
		imagen: RecortesUrl.FotoPosgrados,
		nuevo: false,
		grupo: ['aspirantes', 'estudiantes', 'egresados', 'administrativos']
	},
	{
		tipo: 'link',
		link: '/virtuales',
		target: null,
		text: 'Posgrados Virtuales',
		imagen: RecortesUrl.FotoVirtuales,
		nuevo: true,
		grupo: ['aspirantes', 'estudiantes', 'egresados', 'administrativos']
	},
	{
		tipo: 'anchor',
		link: 'https://educacioncontinua.usta.edu.co/',
		target: '_blank',
		text: 'Educación Continua',
		imagen: RecortesUrl.FotoContinua,
		nuevo: false,
		grupo: ['aspirantes', 'estudiantes', 'egresados']
	},
	{
		tipo: 'anchor',
		link: 'https://admisiones.usta.edu.co/index.php/pregrado/convenios-auxilios-y-descuentos',
		target: '_blank',
		text: 'Convenios Pregrado',
		imagen: RecortesUrl.FotoConvenios,
		nuevo: false,
		grupo: ['aspirantes', 'estudiantes', 'egresados']
	},
	{
		tipo: 'anchor',
		link: 'https://admisiones.usta.edu.co/index.php/posgrado/convenios-auxilios-y-descuentos-posgrados',
		target: '_blank',
		text: 'Convenios Posgrado',
		imagen: RecortesUrl.FotoConvenios,
		nuevo: false,
		grupo: ['aspirantes', 'estudiantes', 'egresados']
	},
	{
		tipo: 'link',
		link: '/calendario',
		target: null,
		text: 'Calendario académico',
		imagen: RecortesUrl.FotoCalendario,
		nuevo: false,
		grupo: ['aspirantes', 'estudiantes', 'administrativos']
	},
	{
		tipo: 'link',
		link: '/grados',
		target: null,
		text: 'Grados',
		imagen: RecortesUrl.FotoGrados,
		nuevo: false,
		grupo: []
	}
]

export default destacados;