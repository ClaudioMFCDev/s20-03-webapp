import { Metadata } from 'next'

import { Section } from '@/components/atoms/section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import ASIGNATURAS_JSON from '@/data/asignaturas.json'
import { MoveUpRight, Pyramid } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Panel de control',
}

export default function DashboardPage() {
  return (
    <Section className="flex w-full flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Resumen de asignaturas</CardTitle>
        </CardHeader>
        <CardContent className="grid-rows-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ASIGNATURAS_JSON.map(asignatura => (
            <Card key={asignatura.id}>
              <CardHeader className="pb-2">
                <CardTitle className="text-md">
                  <Link
                    href={`/dashboard/asignaturas/${asignatura.id}`}
                    className="group flex items-center justify-between gap-4 hover:underline"
                  >
                    <div className="flex items-center gap-2">
                      <Pyramid />
                      {asignatura.title}
                    </div>
                    <MoveUpRight
                      className="transition-transform group-hover:scale-125"
                      size={14}
                    />
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex gap-2">
                {/* {asignatura.profesor_responsable_id} */}
                <span className="text-sm">Augusta Ada Byron</span>
              </CardContent>
            </Card>
          ))}
        </CardContent>
        {/* <CardFooter>AVG: 19.5</CardFooter> */}
      </Card>
    </Section>
  )
}
