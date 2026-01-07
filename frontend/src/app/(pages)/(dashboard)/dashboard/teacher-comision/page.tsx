'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import { columns } from '#/src/app/(pages)/(dashboard)/dashboard/TablePresentism/colums'
import { DataTable } from '#/src/app/(pages)/(dashboard)/dashboard/TablePresentism/data-table'
import { payments } from '@/data/payments.data'
import { Section } from '#/src/app/components/atoms/section'
import CreateTask from '#/src/app/components/molecules/cards/create-Task'
import { Button } from '#/src/app/components/ui/button'
import { Card, CardContent, CardHeader } from '#/src/app/components/ui/card'
import { Input } from '#/src/app/components/ui/input'
import { Textarea } from '#/src/app/components/ui/textarea'

export default function TeacherPage() {
  const [isTaskOpen, setIsTaskOpen] = useState(true)
  const [isMessageOpen, setIsMessageOpen] = useState(false)
  const [studentsData, setStudentsData] = useState(payments)

  const handleTaskToggle = () => {
    setIsTaskOpen(!isTaskOpen)
    if (isMessageOpen) setIsMessageOpen(false)
  }

  const handleMessageToggle = () => {
    setIsMessageOpen(!isMessageOpen)
    if (isTaskOpen) setIsTaskOpen(false)
  }

  const handleUpdateGrades = (data: typeof payments) => {
    setStudentsData(data)
    console.log('Notas actualizadas:', data)
    alert('Notas actualizadas correctamente')
  }

  return (
    <Section className="flex flex-col" component={'section'}>
      <h1 className="mb-5 text-2xl sm:text-3xl">Curso 5A - Matematica</h1>
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="h-full w-full shadow-xl scroll-container md:w-[400px]">
          <DataTable columns={columns} data={studentsData} />
        </div>

        <div className="flex w-full flex-col gap-5 md:w-[85%]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="border-none"
          >
            <Card className="w-full cursor-pointer border-none shadow-xl">
              <CardHeader>
                <Button
                  className="w-full text-lg font-bold"
                  variant="outline"
                  onClick={handleTaskToggle}
                >
                  {isTaskOpen ? 'Cerrar' : 'Crear Tarea'}
                </Button>
              </CardHeader>
              <AnimatePresence>
                {isTaskOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardContent>
                      <CreateTask />
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="border-none"
          >
            <Card className="w-full cursor-pointer border-none shadow-xl">
              <CardHeader>
                <Button
                  className="w-full text-lg font-bold"
                  variant="outline"
                  onClick={handleMessageToggle}
                >
                  {isMessageOpen ? 'Cerrar' : 'Enviar Mensaje'}
                </Button>
              </CardHeader>
              <AnimatePresence>
                {isMessageOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardContent className="space-y-4">
                      <Input
                        type="email"
                        placeholder="Correo electrónico de Tutor/a - Alumno-a"
                        className="w-full shadow-[inset_2px_2px_7px_rgba(0,0,0,0.5)]"
                      />

                      <Textarea
                        placeholder="Escribe tu mensaje aquí..."
                        className="w-full shadow-[inset_2px_2px_7px_rgba(0,0,0,0.5)]"
                      />

                      <Button className="w-full">Enviar Mensaje</Button>
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        </div>

        <Card className="flex h-[765px] flex-col items-center gap-7 overflow-y-auto p-5 py-10 shadow-xl scroll-container">
          <h2>Recordatorios de Comision</h2>
          <Card className="w-[90%] p-5 shadow-[inset_2px_2px_7px_rgba(0,0,0,0.5)]">
            <CardHeader>Tarea: Trabajo Practico 2 </CardHeader>
            <CardContent className="flex flex-col gap-5">
              <p className="text-sm">
                El Alumno Jose Martinez entrego la tarea de Matematica hace 2
                horas
              </p>
              <p>Fecha de entrega: 21/5/2025</p>
            </CardContent>
            <Button className="mb-5 ml-5">Borrar</Button>
          </Card>
          <Card className="w-[90%] p-5 shadow-[inset_2px_2px_7px_rgba(0,0,0,0.5)]">
            <CardHeader>Tarea: Trabajo Practico 2 </CardHeader>
            <CardContent className="flex flex-col gap-5">
              <p className="text-sm">
                El Alumno Jose Martinez entrego la tarea de Matematica hace 2
                minutos
              </p>
              <p>Fecha de entrega: 21/5/2025</p>
            </CardContent>
            <Button className="mb-5 ml-5">Borrar</Button>
          </Card>
          <Card className="w-[90%] p-5 shadow-[inset_2px_2px_7px_rgba(0,0,0,0.5)]">
            <CardHeader>Tarea: Trabajo Practico 2 </CardHeader>
            <CardContent className="flex flex-col gap-5">
              <p className="text-sm">
                El Alumno Jose Martinez entrego la tarea de Matematica hace 1
                día
              </p>
              <p>Fecha de entrega: 21/5/2025</p>
            </CardContent>
            <Button className="mb-5 ml-5">Borrar</Button>
          </Card>
        </Card>
      </section>
    </Section>
  )
}
