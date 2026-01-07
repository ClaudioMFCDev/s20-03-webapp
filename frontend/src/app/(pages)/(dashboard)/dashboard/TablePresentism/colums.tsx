'use client'

import { type ColumnDef } from '@tanstack/react-table'
import { useState } from 'react'

import { Badge } from '@/components/ui/badge' // Asegúrate que esta ruta sea la correcta en tu proyecto
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
// import { Payment } from '#/src/data/payments.data' // Ya no lo usamos porque pusimos 'any'

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: 'alumnName',
    header: 'Alumno',
    cell: ({ row }) => {
      const status = row.original.status

      // CORRECCIÓN AQUÍ:
      // Usamos ( ... as any) para que nos deje buscar cualquier string dentro del objeto
      const variant =
        (
          {
            success: 'success',
            failed: 'destructive',
          } as any
        )[status] ?? 'default'

      return <Badge variant={variant as any}>{row.original.alumnName}</Badge>
    },
  },

  {
    accessorKey: 'status',
    header: () => <div className="pr-4 text-right">Presentismo</div>,
    cell: ({ row }) => {
      // Validamos que sea success para marcar el check
      const [isChecked, setIsChecked] = useState(
        row.original.status === 'success'
      )

      const handleCheckboxChange = (checked: boolean) => {
        setIsChecked(checked)
        // Como es 'any', podemos asignar sin miedo
        row.original.status = checked ? 'success' : 'failed'
        row.toggleSelected(checked)
      }

      return (
        <div className="ml-9 flex w-5 items-center justify-start">
          <Checkbox
            checked={isChecked}
            onCheckedChange={(checked) =>
              handleCheckboxChange(checked as boolean)
            }
          />
        </div>
      )
    },
  },

  // Nueva columna para ingresar la nota
  {
    accessorKey: 'grade',
    header: () => <div className="text-right">Nota</div>,
    cell: ({ row }) => {
      // Como row.original es any, accedemos a grade con seguridad (o string vacío si no existe)
      const [grade, setGrade] = useState(row.original.grade || '')

      const handleGradeChange = (value: string) => {
        setGrade(value)
        row.original.grade = value // Actualizar el valor en los datos originales
      }

      return (
        <div className="flex justify-end">
          <Input
            value={grade}
            onChange={(e) => handleGradeChange(e.target.value)}
            className="w-11 shadow-[inset_2px_2px_7px_rgba(0,0,0,0.5)]"
            min={0}
            max={10}
            step={0.1}
          />
        </div>
      )
    },
  },
]
