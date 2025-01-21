// types.ts

import { ReactNode, ForwardRefExoticComponent, RefAttributes } from 'react'
import { LucideProps } from 'lucide-react'

export interface NavItem {
  title: string
  icon?: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >
  url: string // Esta propiedad es obligatoria
  badge?: string // Opcional
  items?: NavItem[] // Opcional, para subelementos
}

export interface NavGroupProps {
  title: string
  items: NavItem[] // Debe ser un array de NavItem
}
