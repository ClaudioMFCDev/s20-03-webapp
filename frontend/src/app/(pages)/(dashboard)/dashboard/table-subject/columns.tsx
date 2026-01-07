'use client'

import { type ColumnDef } from '@tanstack/react-table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export type User = {
  type: 'profesor' | 'alumno'
  materia?: string
  dni: string
  celular: string
  nombreApellido: string
  correo?: string
  nombreTutor?: string
  dniTutor?: string
  telefonoTutor?: string
  correoTutor?: string
}

type ColumnConfig = {
  accessorKey: keyof User
  header: string
  editableFor?: ('profesor' | 'alumno')[]
  isBadge?: boolean
}

const generateColumns = ({
  handleSave,
  handleDelete,
  editingIndex,
  setEditingIndex,
}: {
  handleSave: (index: number, updatedUser: User) => void
  handleDelete: (index: number) => void
  editingIndex: number | null
  setEditingIndex: (index: number | null) => void
}): ColumnDef<User>[] => {
  const columnConfigs: ColumnConfig[] = [
    {
      accessorKey: 'nombreApellido',
      header: 'Nombre y Apellido',
      editableFor: ['profesor', 'alumno'],
      isBadge: true,
    },
    {
      accessorKey: 'materia',
      header: 'Materia',
      editableFor: ['profesor'],
    },
    {
      accessorKey: 'dni',
      header: 'DNI',
      editableFor: ['profesor', 'alumno'],
    },
    {
      accessorKey: 'celular',
      header: 'Celular',
      editableFor: ['profesor', 'alumno'],
    },
    {
      accessorKey: 'correo',
      header: 'Correo',
      editableFor: ['profesor'],
    },
    {
      accessorKey: 'nombreTutor',
      header: 'Nombre Tutor',
      editableFor: ['alumno'],
    },
    {
      accessorKey: 'dniTutor',
      header: 'DNI Tutor',
      editableFor: ['alumno'],
    },
    {
      accessorKey: 'telefonoTutor',
      header: 'Teléfono Tutor',
      editableFor: ['alumno'],
    },
    {
      accessorKey: 'correoTutor',
      header: 'Correo Tutor',
      editableFor: ['alumno'],
    },
  ]

  return columnConfigs
    .map((config) => ({
      accessorKey: config.accessorKey,
      header: config.header,
      // Aquí ya tenías el : any, lo dejamos igual
      cell: ({ row }: any) => {
        const user = row.original
        const index = row.index
        const isEditing = editingIndex === index
        const isEditable = config.editableFor?.includes(user.type)

        if (isEditing && isEditable) {
          return (
            <Input
              defaultValue={String(user[config.accessorKey] || '')}
              onChange={(e) => {
                const updatedUser = {
                  ...user,
                  [config.accessorKey]: e.target.value,
                }
                row.original = updatedUser
              }}
            />
          )
        }

        if (config.isBadge) {
          return (
            <Badge variant="default">{String(user[config.accessorKey])}</Badge>
          )
        }

        return user[config.accessorKey] || '-'
      },
    }))
    .concat([
      {
        id: 'actions',
        header: 'Acciones',
        // ARREGLO 1: Agregamos : any aquí también
        cell: ({ row }: any) => {
          const index = row.index
          const isEditing = editingIndex === index

          return (
            <div className="flex gap-2">
              {isEditing ? (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleSave(index, row.original)}
                >
                  Guardar
                </Button>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setEditingIndex(index)}
                >
                  Editar
                </Button>
              )}
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleDelete(index)}
              >
                Eliminar
              </Button>
            </div>
          )
        },
      } as any, // ARREGLO 2: Forzamos al objeto a ser 'any' para que acepte 'id'
    ]) as ColumnDef<User>[]
}

export const columns = generateColumns
