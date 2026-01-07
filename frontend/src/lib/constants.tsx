import {
  Archive,
  BookOpen,
  BookOpenCheck,
  CircleHelp,
  LayoutDashboard,
  Settings,
  Users,
} from 'lucide-react'

export const navGroups = [
  {
    title: 'General',
    items: [
      {
        title: 'Panel de control',
        icon: LayoutDashboard,
        url: '/dashboard/',
      },
    ],
  },
  {
    title: 'Gestión de usuarios',
    items: [
      {
        title: 'Crear Comision',
        icon: Users,
        url: '/dashboard/table-subject',
      },
    ],
  },
  {
    title: 'Aulas',
    items: [
      {
        title: 'Comisiones',
        icon: BookOpenCheck,
        url: '#',
        items: [
          {
            title: '5to A - 2024',
            url: '/dashboard/teacher-comision',
          },
          {
            title: '6to A - 2024',
            url: '/dashboard/teacher-comision',
          },
          {
            title: '7mo A - 2024',
            url: '/dashboard/teacher-comision',
          },
          {
            title: '8vo A - 2024',
            url: '/dashboard/teacher-comision',
          },
        ],
      },
      {
        title: 'Archivadas',
        icon: Archive,
        url: '#',
        items: [
          {
            title: '5to A - 2023',
            url: '/dashboard/subject/86',
          },
          {
            title: '6to A - 2023',
            url: '/dashboard/subject/87',
          },
          {
            title: '7mo A - 2023',
            url: '/dashboard/subject/88',
          },
          {
            title: '8vo A - 2023',
            url: '/dashboard/subject/89',
          },
        ],
      },
    ],
  },
  {
    title: 'Otros',
    items: [
      {
        title: 'Configuraciones',
        icon: Settings,
        url: '#',
        items: [
          {
            title: 'Perfil',
            url: '/dashboard/settings',
          },
          {
            title: 'Autenticación',
            url: '/dashboard/settings/authentication',
          },
          {
            title: 'Apariencia',
            url: '/dashboard/settings/appearance',
          },
        ],
      },
      {
        title: 'Soporte',
        icon: CircleHelp,
        url: '#',
        items: [
          {
            title: 'Manual de usuario',
            url: '/dashboard/user-manual',
          },
          {
            title: 'Contacto',
            url: '/dashboard/contact',
          },
        ],
      },
      {
        title: 'Materias',
        icon: BookOpen, // Ícono agregado aquí
        url: '',
        items: [
          {
            title: 'Matematicas III',
            url: '/dashboard/subject/id',
          },
          {
            title: 'Ciensias Sociales III',
            url: '#',
          },
          {
            title: 'Programacion III',
            url: '#',
          },
          {
            title: 'Lengua III',
            url: '#',
          },
          {
            title: 'Fisica III',
            url: '#',
          },
          {
            title: 'Educacion Fisica III',
            url: '#',
          },
        ],
      },
    ],
  },
]

export const STUDY_TIPS = [
  'Organiza tu tiempo: Usa un calendario o una agenda para planificar tus tareas y actividades diarias.',
  'Estudia en un ambiente adecuado: Encuentra un lugar tranquilo y libre de distracciones para concentrarte mejor.',
  'Haz pausas regulares: Estudia en intervalos de 25-30 minutos y toma breves descansos para mantener la concentración.',
  'Participa en clase: No dudes en hacer preguntas y contribuir a las discusiones; esto te ayudará a entender mejor los temas.',
  'Forma grupos de estudio: Colaborar con compañeros puede facilitar el aprendizaje y hacer que el estudio sea más divertido.',
  'Establece metas realistas: Define objetivos específicos y alcanzables para cada materia, lo que te ayudará a mantenerte motivado.',
  'Utiliza recursos en línea: Aprovecha videos educativos, tutoriales y aplicaciones que pueden complementar tu aprendizaje.',
  'Mantén una buena alimentación: Comer bien y mantenerse hidratado puede mejorar tu concentración y rendimiento académico.',
  'Duerme lo suficiente: Asegúrate de descansar adecuadamente; el sueño es crucial para el aprendizaje y la memoria.',
  'Sé amable contigo mismo: No te castigues por los errores; aprende de ellos y sigue adelante con una actitud positiva.',
]

export const textRoles = {
  schoolAdmin: 'Coordinador',
  teacher: 'Profesor',
  student: 'Estudiante',
  parent: 'Tutor',
} as const
