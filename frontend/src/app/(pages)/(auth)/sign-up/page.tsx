import { Metadata } from 'next'
import { SignUpClient } from './sign-up-client' // Importamos el componente que creamos

export const metadata: Metadata = {
  title: 'Registrarse',
  // description: ""
}

export default function SignUpPage() {
  return <SignUpClient />
}