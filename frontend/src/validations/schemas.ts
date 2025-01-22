import { z } from 'zod'

export const ProfileFormSchema = z
  .object({
    name: z
      .string()
      .min(3, {
        message: 'El nombre debe tener al menos 3 caracteres',
      })
      .max(20, {
        message: 'El nombre debe tener como máximo 32 caracteres',
      }),
    lastName: z
      .string()
      .min(3, {
        message: 'El apellido debe tener al menos 3 caracteres',
      })
      .max(20, {
        message: 'El apellido debe tener como máximo 32 caracteres',
      }),
    email: z.string().email({
      message: 'El correo debe ser válido',
    }),
    security_emails: z.boolean().default(false),
  })
  .refine(data => data.security_emails === true, {
    message: 'Debes aceptar los términos y condiciones',
    path: ['security_emails'],
  })
