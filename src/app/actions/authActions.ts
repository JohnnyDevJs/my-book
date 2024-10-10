'use server'

import { User } from '@prisma/client'
import bcrypt from 'bcryptjs'
import { AuthError } from 'next-auth'

import { ActionResult } from '@/actions'
import { auth, signIn, signOut } from '@/auth'
import { prisma } from '@/lib/prisma'
import { LoginSchema } from '@/lib/schemas/loginSchema'
import { RegisterSchema, registerSchema } from '@/lib/schemas/registerSchema'

export async function signInUser(
  data: LoginSchema,
): Promise<ActionResult<string>> {
  try {
    const result = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    })

    console.log(result)

    return { status: 'success', data: 'Logged In' }
  } catch (error) {
    console.log(error)

    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { status: 'error', error: 'Credenciais inválidas.' }
          break

        default:
          return { status: 'error', error: 'Algo deu errado.' }
          break
      }
    } else {
      return { status: 'error', error: 'Ocorreu um outro erro.' }
    }
  }
}

export async function signOutUser() {
  await signOut({ redirectTo: '/' })
}
export async function registerUser(
  data: RegisterSchema,
): Promise<ActionResult<User>> {
  try {
    const validated = registerSchema.safeParse(data)

    if (!validated.success) {
      return { status: 'error', error: validated.error.errors }
    }

    const { name, email, password } = validated.data

    const hashedPassword = await bcrypt.hash(password, 10)

    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser)
      return { status: 'error', error: 'Este usuário já está registrado.' }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash: hashedPassword,
      },
    })

    return { status: 'success', data: user }
  } catch (error) {
    console.log(error)
    return { status: 'error', error: 'Algo deu errado.' }
  }
}

export async function getUserByEmail(email: string) {
  return prisma.user.findUnique({ where: { email } })
}

export async function getUserById(id: string) {
  return prisma.user.findUnique({ where: { id } })
}

export async function getAuthUserId() {
  const session = await auth()
  const userId = session?.user?.id

  if (!userId) throw new Error('Unauthorized')

  return userId
}
