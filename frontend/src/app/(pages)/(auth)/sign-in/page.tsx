import { Metadata } from 'next'
import { SignInClient } from './sign-in-client'

export const metadata: Metadata = {
  title: 'Iniciar Sesión',
  // description: ""
}

export default function SignInPage() {
  return <SignInClient />
}