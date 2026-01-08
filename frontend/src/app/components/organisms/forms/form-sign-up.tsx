'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { SignUpFormSchema } from '@/validations/schemas'

export const FormSignUp = () => {
  const form = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      name: '',
      lastName: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = form.handleSubmit((data) => {
    // Esta función ya no se ejecutará porque el botón está deshabilitado
    console.log('Intento de registro bloqueado', data)
  })

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="w-full max-w-md space-y-2 text-gray-950">
        
        {/*  AVISO DE REGISTRO DESHABILITADO  */}
        <div className="rounded-md bg-amber-50 p-2 border border-amber-200">
          <div className="flex">
            <div className="flex-shrink-0">
              {/* Icono de Alerta SVG */}
              <svg className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-amber-800">
                Registro Deshabilitado
              </h3>
              <div className="mt-2 text-sm text-amber-700">
                <p>
                  Esta es una versión de demostración. La creación de nuevos usuarios está restringida.
                </p>
                <p className="mt-2 font-bold">
                  Por favor, inicia sesión con los usuarios de prueba.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 🚧 FIN DEL AVISO 🚧 */}

        <div className="flex gap-6 text-gray-950">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Nombres</FormLabel>
                <FormControl>
                  <Input disabled placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Apellidos</FormLabel>
                <FormControl>
                  <Input disabled placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Correo electrónico</FormLabel>
              <FormControl>
                <Input disabled placeholder="example@gmail.com" {...field} />
              </FormControl>
              <FormDescription>
                Utilice una dirección de correo electrónico válida.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input disabled type="password" placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {/* Botón deshabilitado */}
        <Button 
          type="submit" 
          disabled 
          className="w-full opacity-50 cursor-not-allowed hover:bg-primary/90" // Estilos para reforzar visualmente que no funciona
        >
          Registro Deshabilitado
        </Button>
      </form>
    </Form>
  )
}