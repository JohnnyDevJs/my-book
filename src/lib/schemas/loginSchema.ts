import { z } from 'zod'

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Preencha seu e-mail' })
    .email({ message: 'Insira um e-mail válido' }),
  password: z.string().min(1, { message: 'Preencha sua senha' }),
})

export type LoginSchema = z.infer<typeof loginSchema>
