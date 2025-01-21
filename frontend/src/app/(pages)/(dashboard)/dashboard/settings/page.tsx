import { Separator } from '@/components/ui/separator'
import { Section } from '@/components/atoms/section'
import { Metadata } from 'next'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '#/src/app/components/ui/card'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Configuración',
}

export default function ProfilePage() {
  return (
    <Section component="section" className="w-full">
      <h2 className="text-lg font-semibold">Perfil</h2>
      <p className="text-sm text-muted-foreground">
        Así es como te verán los demás en el sitio.
      </p>
      <Separator className="my-4" />
      {/* --------------------------- */}
      {/* --------BORRAR------------- */}
      <Card className="w-fit border-2 border-red-500">
        <CardHeader>
          <CardTitle>Formulario para actualizar</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            <li>Nombre</li>
            <li>Apellido</li>
            <li>Correo</li>
          </ul>
        </CardContent>

        <CardFooter>
          <Link
            href="https://shadcn-admin.netlify.app/settings"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://shadcn-admin.netlify.app/settings
          </Link>
        </CardFooter>
      </Card>
      {/* --------------------------- */}
    </Section>
  )
}
