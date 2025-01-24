"use client"

import { CardTeacher } from "#/src/app/components/molecules/card-teacher"
import { Users, Calculator } from 'lucide-react';


export default function TeacherPage(){
    return (
        <div>

            <section className="flex gap-7">
                <CardTeacher title={"Total de estudiantes en la comision"} info={13} icon={<Users className=" w-4 h-4"/>}/>
                <CardTeacher title={"Promedio de la comision"} info={8.6} icon={<Calculator className=" w-4 h-4"/>}/>
                <CardTeacher title={"Tareas hechas"} info={<span>{10} / {13}</span> } icon={<Users className=" w-4 h-4"/>}/>
            </section>
        </div>
        
    )
}
