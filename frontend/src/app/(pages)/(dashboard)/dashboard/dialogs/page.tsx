import { Button } from '@/components/ui/button'
import { Section } from '@/components/atoms/section'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { FormCreateSubject } from '#/src/app/components/organisms/forms/form-create-subject'

export default function DialogsPage() {
  return (
    <Section
      component="section"
      className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      <Card>
        <CardHeader>
          <CardTitle>Usuarios</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Button variant="destructive">Eliminar usuario</Button>
        </CardContent>
        <CardFooter>
          <span className="text-sm italic text-gray-700">
            Accedido únicamente desde <strong>(Coordinador)</strong>
          </span>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Estudiantes</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Button>Editar estudiante</Button>
        </CardContent>
        <CardFooter>
          <span className="text-sm italic text-gray-700">
            Accedido únicamente desde <strong>(Profesor)</strong>
          </span>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Matrículas/Cursos</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Button>Crear course</Button>
          {/* Crear subject */}
          <Dialog>
            <DialogTrigger asChild>
              <Button>Crear subject</Button>
            </DialogTrigger>
            <DialogContent className="max-h-[95vh] w-full overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Crear subject</DialogTitle>
                <DialogDescription>
                  Recuerda darle clic en <strong>Guardar</strong> cuando haya
                  terminado.
                </DialogDescription>
              </DialogHeader>
              <FormCreateSubject />
              {/* <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter> */}
            </DialogContent>
          </Dialog>
        </CardContent>
        <CardFooter>
          <span className="text-sm italic text-gray-700">
            Accedido únicamente desde <strong>(Coordinador)</strong>
          </span>
        </CardFooter>
      </Card>
    </Section>
  )
}
