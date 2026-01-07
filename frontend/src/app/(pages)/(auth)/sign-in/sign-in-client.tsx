'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'

// Importamos dinámicamente desactivando SSR
const Background = dynamic(
  () => import('@/components/molecules/background').then((mod) => mod.Background),
  { ssr: false }
)

const FormSignIn = dynamic(
  // OJO: Asegúrate de que esta ruta sea correcta. Asumo que es 'form-sign-in'
  () => import('@/components/organisms/forms/form-sign-in').then((mod) => mod.FormSignIn),
  { ssr: false }
)

export function SignInClient() {
  return (
    <Background>
      <div className="flex h-full w-full flex-col items-center justify-center gap-8 bg-white p-8 backdrop-blur-md lg:w-1/2">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-3xl font-bold">Iniciar sesión</h1>
          <h2 className="text-md text-muted-foreground">
            Ingresa tus credenciales para acceder
          </h2>
        </div>
        
        {/* Aquí renderizamos el formulario de Login */}
        <FormSignIn />

        <div className="flex gap-2 text-center text-sm">
          <span className="text-muted-foreground">¿No tienes una cuenta?</span>
          <Link href="/sign-up" className="hover:underline">
            ¡Regístrate!
          </Link>
        </div>
      </div>
    </Background>
  )
}