'use client'

import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useEffect } from 'react'

export default function SignInPage() {
  const ICON_COUNT = 10

  const generateRandomPosition = () => ({
    x: Math.random() * window.innerWidth - window.innerWidth / 4,
    y: Math.random() * window.innerHeight - window.innerHeight / 4,
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })
  useEffect(() => {
    console.log('App component mounted or updated')
  })

  return (
    <section className="relative z-10 flex h-screen w-full items-center justify-start overflow-hidden bg-[#4169E1]">
      {Array.from({ length: ICON_COUNT }).map((_, index) => {
        const initialPosition = generateRandomPosition()

        return (
          <motion.div
            key={index}
            initial={initialPosition}
            animate={{
              x: [initialPosition.x, -initialPosition.x],
              y: [initialPosition.y, -initialPosition.y],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
            }}
            className="absolute"
          >
            <div className="h-20 w-20 rounded-full bg-gradient-to-b via-gray-200 to-gray-400 shadow-2xl shadow-black" />
          </motion.div>
        )
      })}

      <section className="flex h-full w-full justify-end">
        <form
          onSubmit={onSubmit}
          className="z-50 flex h-full flex-col items-center justify-center border border-white bg-[#fcfcfcb4] shadow-2xl shadow-black backdrop-blur-md lg:w-[50%]"
        >
          <h1 className="text-2xl font-bold">Sing In</h1>

          <div className="mb-3 mt-5">
            <label htmlFor="email">Correo</label>
            <Input
              type="email"
              className="relative mt-2 w-96"
              {...register('email', {
                required: { value: true, message: 'correo es requerido' },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Correo inválido',
                },
              })}
            />
            {errors.email && (
              <span className="mt-2 text-xs text-red-800">
                {errors.email.message as string}
              </span>
            )}
          </div>

          <div className="mb-3 mt-5">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              className="mt-2 w-96"
              {...register('password', {
                required: { value: true, message: 'Password es requerido' },
              })}
            />
            {errors.password && (
              <span className="text-xs text-red-800">
                {errors.password.message as string}
              </span>
            )}
          </div>
          <Button
            type="submit"
            className="mt-10 w-96 rounded-sm bg-slate-950 py-[3px] text-white"
          >
            Login
          </Button>
        </form>
      </section>
    </section>
  )
}
