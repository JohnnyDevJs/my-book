import { z } from 'zod'

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: 'Preencha seu nome completo.' })
      .regex(/\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{0,19}\b/gi, {
        message: 'O nome precisa ter um sobrenome.',
      }),
    email: z
      .string()
      .min(1, { message: 'Preencha seu e-mail.' })
      .email({ message: 'Insira um e-mail válido.' }),
    password: z
      .string()
      .min(1, { message: 'Insira sua senha.' })
      .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {
        message:
          'A senha deve ter pelo menos 8 caracteres, contendo pelo menos um caractere maiúsculo, um caractere minúsculo e um símbolo especial. Exemplo: Teste@24.',
      })
      .refine((val) => val !== 'Teste@24', {
        message: 'A senha não pode ser "Teste@24", pois é apenas um exemplo.',
      }),
    confirmPassword: z
      .string()
      .min(1, { message: 'Confirme sua nova senha' })
      .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {
        message:
          'A confirmação de senha precisa seguir os requisitos da senha.',
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'As senhas não coincidem.',
  })

export type RegisterSchema = z.infer<typeof registerSchema>
