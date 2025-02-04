'use client'

import { type ColumnDef } from '@tanstack/react-table'
import { Badge } from '#/src/app/components/ui/badge'
import { Button } from '#/src/app/components/ui/button'
import { Input } from '#/src/app/components/ui/input'

export type User = {
  type: 'profesor' | 'alumno'
  materia: string
  dni: number
  celular: number
  nombreApellido: string
  correo?: string
  nombreTutor?: string
  dniTutor?: number
  telefonoTutor?: number
  correoTutor?: string
}

export const columns = ({
  handleSave,
  handleDelete,
  editingIndex,
  setEditingIndex,
}: {
  handleSave: (index: number, updatedUser: User) => void
  handleDelete: (index: number) => void
  editingIndex: number | null
  setEditingIndex: (index: number | null) => void
}): ColumnDef<User>[] => [
  {
    accessorKey: 'nombreApellido',
    header: 'Nombre y Apellido',
    cell: ({ row }) => {
      const user = row.original
      const index = row.index
      const isEditing = editingIndex === index

      return isEditing ? (
        <Input
          defaultValue={user.nombreApellido}
          onChange={(e) => {
            const updatedUser = { ...user, nombreApellido: e.target.value }
            row.original = updatedUser
          }}
        />
      ) : (
        <Badge variant="default">{user.nombreApellido}</Badge>
      )
    },
  },
  {
    accessorKey: 'materia',
    header: 'Materia',
    cell: ({ row }) => {
      const user = row.original
      const index = row.index
      const isEditing = editingIndex === index

      return isEditing ? (
        <Input
          defaultValue={user.materia}
          onChange={(e) => {
            const updatedUser = { ...user, materia: e.target.value }
            row.original = updatedUser
          }}
        />
      ) : (
        user.materia
      )
    },
  },
  {
    accessorKey: 'dni',
    header: 'DNI',
    cell: ({ row }) => {
      const user = row.original
      const index = row.index
      const isEditing = editingIndex === index

      return isEditing ? (
        <Input
          defaultValue={user.dni}
          onChange={(e) => {
            const updatedUser = { ...user, dni: e.target.value }
            row.original = updatedUser
          }}
        />
      ) : (
        user.dni
      )
    },
  },
  {
    accessorKey: 'celular',
    header: 'Celular',
    cell: ({ row }) => {
      const user = row.original
      const index = row.index
      const isEditing = editingIndex === index

      return isEditing ? (
        <Input
          defaultValue={user.celular}
          onChange={(e) => {
            const updatedUser = { ...user, celular: e.target.value }
            row.original = updatedUser
          }}
        />
      ) : (
        user.celular
      )
    },
  },
  {
    accessorKey: 'correo',
    header: 'Correo',
    cell: ({ row }) => {
      const user = row.original
      const index = row.index
      const isEditing = editingIndex === index

      // Solo editable si es profesor
      return isEditing && user.type === 'profesor' ? (
        <Input
          defaultValue={user.correo || ''}
          onChange={(e) => {
            const updatedUser = { ...user, correo: e.target.value }
            row.original = updatedUser
          }}
        />
      ) : (
        user.correo || '-'
      )
    },
  },
  {
    accessorKey: 'nombreTutor',
    header: 'Nombre Tutor',
    cell: ({ row }) => {
      const user = row.original
      const index = row.index
      const isEditing = editingIndex === index

      // Solo editable si es alumno
      return isEditing && user.type === 'alumno' ? (
        <Input
          defaultValue={user.nombreTutor || ''}
          onChange={(e) => {
            const updatedUser = { ...user, nombreTutor: e.target.value }
            row.original = updatedUser
          }}
        />
      ) : (
        user.nombreTutor || '-'
      )
    },
  },
  {
    accessorKey: 'dniTutor',
    header: 'DNI Tutor',
    cell: ({ row }) => {
      const user = row.original
      const index = row.index
      const isEditing = editingIndex === index

      // Solo editable si es alumno
      return isEditing && user.type === 'alumno' ? (
        <Input
          defaultValue={user.dniTutor || ''}
          onChange={(e) => {
            const updatedUser = { ...user, dniTutor: e.target.value }
            row.original = updatedUser
          }}
        />
      ) : (
        user.dniTutor || '-'
      )
    },
  },
  {
    accessorKey: 'telefonoTutor',
    header: 'Teléfono Tutor',
    cell: ({ row }) => {
      const user = row.original
      const index = row.index
      const isEditing = editingIndex === index

      // Solo editable si es alumno
      return isEditing && user.type === 'alumno' ? (
        <Input
          defaultValue={user.telefonoTutor || ''}
          onChange={(e) => {
            const updatedUser = { ...user, telefonoTutor: e.target.value }
            row.original = updatedUser
          }}
        />
      ) : (
        user.telefonoTutor || '-'
      )
    },
  },
  {
    accessorKey: 'correoTutor',
    header: 'Correo Tutor',
    cell: ({ row }) => {
      const user = row.original
      const index = row.index
      const isEditing = editingIndex === index

      // Solo editable si es alumno
      return isEditing && user.type === 'alumno' ? (
        <Input
          defaultValue={user.correoTutor || ''}
          onChange={(e) => {
            const updatedUser = { ...user, correoTutor: e.target.value }
            row.original = updatedUser
          }}
        />
      ) : (
        user.correoTutor || '-'
      )
    },
  },
  {
    id: 'actions',
    header: 'Acciones',
    cell: ({ row }) => {
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
  },
]