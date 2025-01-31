'use client'

import { Calculator, Users } from 'lucide-react'
import { Section } from '#/src/app/components/atoms/section'
import { UpdateGrades } from '#/src/app/components/molecules/card-grades'
import { CardTeacher } from '#/src/app/components/molecules/card-teacher'
import { ComboboxDemo } from '#/src/app/components/molecules/combobox'
import { NotificationsTeacher } from '#/src/app/components/molecules/notifications-teacher'
import { DataTable } from '@/app/(pages)/(dashboard)/dashboard/dataTable/data-table' // Importa el componente DataTable
import { payments } from '@/data/payments.data' // Importa los datos de pagos (o alumnos)
import { columns } from '@/app/(pages)/(dashboard)/dashboard/dataTable//colums' // Importa las columnas

export default function TeacherPage() {
    return (
        <Section className="w-full flex flex-col">
            <aside className="mb-8 flex  w-[69%] items-center justify-between">
                <div className="mr-56">
                    <ComboboxDemo />
                </div>
            </aside>
            <section className="  justify-center items-center grid gap-10">
                <div className="lg:grid lg:grid-cols-3 lg:gap-7 flex flex-col justify-center items-center">
                    <CardTeacher
                        title={'Total de estudiantes en la comisión'}
                        info={13}
                        icon={<Users className="h-4 w-4" />}
                    />
                    <CardTeacher
                        title={'Promedio de la comisión'}
                        info={8.6}
                        icon={<Calculator className="h-4 w-4" />}
                    />
                    <CardTeacher
                        title={'Tareas hechas'}
                        info={
                            <span>
                                {10} / {13}
                            </span>
                        }
                        icon={<Users className="h-4 w-4" />}
                    />
                </div>
                <div className="lg:grid flex flex-col lg:grid-cols-2  lg:justify-end  lg:w-[95%] lg:pr-52 xl:pr-[26.5%]">
                    <div className="grid gap-10 justify-center lg:justify-start">
                        <UpdateGrades />
                        <NotificationsTeacher />
                    </div>
                    
                    <div className=' w-[337px]  mt-10 lg:mt-0  xl:w-[670px]  2xl:w-[755px] shadow-md shadow-slate-300'>
                        <DataTable columns={columns} data={payments} />
                    </div>
                </div>
            </section>
        </Section>
    )
}