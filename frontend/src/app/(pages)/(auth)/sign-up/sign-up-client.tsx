'use client' 

import dynamic from 'next/dynamic'
import Link from 'next/link'

// Aquí SÍ podemos usar ssr: false porque estamos en un componente de cliente
const Background = dynamic(
  () => import('@/components/molecules/background').then((mod) => mod.Background),
  { ssr: false }
)

const FormSignUp = dynamic(
  () => import('@/components/organisms/forms/form-sign-up').then((mod) => mod.FormSignUp),
  { ssr: false }
)

export function SignUpClient() {
  return (
    <Background>
      <div className="flex h-full w-full flex-col items-center justify-center gap-8 bg-white p-8 backdrop-blur-md lg:w-1/2">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-3xl font-bold">Registrarse</h1>
          <h2 className="text-md text-muted-foreground">
            Ingresa tus datos para registrarte
          </h2>
        </div>
        <FormSignUp />
        <div className="flex gap-2 text-center text-sm">
          <span className="text-muted-foreground">¿Ya tienes una cuenta?</span>
          <Link href="/sign-in" className="hover:underline">
            ¡Inicia sesión!
          </Link>
        </div>
      </div>
    </Background>
  )
}