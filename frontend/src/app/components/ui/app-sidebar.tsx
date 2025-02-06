// components/AppSidebar.tsx
'use client'

import Image from 'next/image'
import { DropDownUser } from '@/components/molecules/dropdown-user'
import { NavGroup } from '@/components/organisms/nav-group'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from '@/components/ui/sidebar'
import { navGroups } from '@/lib/constants'
import { useUserRole } from '@/app/context/useRoleContext'

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const { open } = useSidebar()
  const { userRole } = useUserRole()

  // Filtrar navGroups y sus items según el rol del usuario
  const filteredNavGroups = navGroups
    .filter(group => {
      // Ocultar "Gestión de usuarios" si el rol no es SchoolAdmin
      if (group.title === 'Gestión de usuarios' && userRole !== 'SchoolAdmin') {
        return false
      }
      // Ocultar "Materias" si el rol no es Student
      if (group.title === 'Otros') {
        group.items = group.items.filter(item => {
          if (item.title === 'Materias' && userRole !== 'Student') {
            return false
          }
          return true
        })
      }
      return true
    })
    .map(group => ({
      ...group,
      items: group.items.filter(item => {
        // Ocultar "En curso" y "Archivadas" si el rol no es Teacher
        if (
          (item.title === 'Comisiones' || item.title === 'Archivadas') &&
          userRole !== 'Teacher'
        ) {
          return false
        }
        return true
      }),
    }))
    .filter(group => group.items.length > 0) // Elimina grupos vacíos

  return (
    <Sidebar className='' collapsible="icon" variant="floating" {...props}>
      <SidebarHeader className="flex">
        {open ? (
          <Image
            src="/logo.svg"
            alt="Logo de ClassRun"
            width={160}
            height={200}
            className="h-16 max-h-16 self-start"
          />
        ) : (
          <Image
            src="/isotype.svg"
            alt="Isotipo de ClassRun"
            width={80}
            height={80}
            className="h-6 w-6 self-center"
          />
        )}
      </SidebarHeader>
      <SidebarContent>
        {filteredNavGroups.map((items, index) => (
          <NavGroup key={index} {...items} />
        ))}
      </SidebarContent>
      <SidebarFooter>
        <DropDownUser
          user={{
            name: 'John Doe',
            email: 'email@example.com',
            avatar: '/avatar.jpg',
          }}
        />
      </SidebarFooter>
    </Sidebar>
  )
}