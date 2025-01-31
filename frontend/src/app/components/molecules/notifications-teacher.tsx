import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
//aca podemos pasar un children o una prop con la notificacion para qe se muestres en carContent
export function NotificationsTeacher() {
  return (
    <Card className="flex h-[174px] w-[332px] flex-col items-start justify-center bg-[#FCFCFC] shadow-md shadow-slate-300">
      <CardHeader className="mt-2">
        <CardTitle className="">Notifications</CardTitle>
      </CardHeader>
      <CardContent className=" ">
        <span>
          <p>juan entregó la tarea de matematicas</p>
          <p>hace 2 horas</p>
        </span>
      </CardContent>
    </Card>
  )
}
