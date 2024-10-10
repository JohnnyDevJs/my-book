'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Card, CardBody, CardHeader, Input } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaLock } from 'react-icons/fa6'
import { FiEye, FiEyeOff, FiX } from 'react-icons/fi'
import { LuShieldAlert } from 'react-icons/lu'
import { toast } from 'sonner'
import colors from 'tailwindcss/colors'

import { signInUser } from '@/app/actions/authActions'
import { ErrorMessage } from '@/components/form/ErrorMessage'
import { LoginSchema, loginSchema } from '@/lib/schemas/loginSchema'

export function LoginForm() {
  const [isVisible, setIsVisible] = useState(false)
  const router = useRouter()

  const toggleVisibility = () => setIsVisible(!isVisible)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: 'onTouched',
  })

  async function onSubmit(data: LoginSchema) {
    const result = await signInUser(data)
    if (result.status === 'success') {
      router.push('/members')
      router.refresh()
    } else {
      toast.error(result.error as string, {
        icon: <LuShieldAlert size={18} />,
        action: (
          <FiX
            className="ml-auto cursor-pointer text-red-300"
            size={20}
            onClick={() => toast.dismiss()}
          />
        ),
        style: {
          backgroundColor: colors.rose[500],
          border: colors.rose[500],
          color: colors.white,
        },
      })
    }
  }

  return (
    <Card className="mx-auto w-full max-w-96 bg-default/30">
      <CardHeader className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-2">
          <FaLock size={20} className="text-secondary" />
          <h1 className="text-xl font-semibold text-foreground">Login</h1>
        </div>
        <p className="text-foreground">Seja bem-vindo ao MyBook</p>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <Input
              defaultValue=""
              color="secondary"
              isRequired
              label="E-mail"
              variant="bordered"
              size="sm"
              placeholder="Insira seu e-mail"
              onClear={() => console.log('input cleared')}
              {...register('email')}
              isInvalid={!!errors.email}
              errorMessage={<ErrorMessage message={errors.email?.message} />}
              autoFocus
            />
            <Input
              isRequired
              defaultValue=""
              color="secondary"
              label="Senha"
              variant="bordered"
              size="sm"
              placeholder="Insira sua senha"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                  aria-label="toggle password visibility"
                >
                  {isVisible ? (
                    <FiEyeOff
                      className="eye pointer-events-none text-sm text-secondary"
                      strokeWidth={2.5}
                    />
                  ) : (
                    <FiEye
                      className="eye pointer-events-none text-sm text-secondary"
                      strokeWidth={2.5}
                    />
                  )}
                </button>
              }
              type={isVisible ? 'text' : 'password'}
              {...register('password')}
              isInvalid={!!errors.password}
              errorMessage={<ErrorMessage message={errors.password?.message} />}
            />
            <Button
              color="secondary"
              className="!pointer-events-auto font-bold text-secondary-600 disabled:cursor-not-allowed"
              isLoading={isSubmitting}
              isDisabled={!isValid}
              fullWidth
              size="lg"
              type="submit"
            >
              Acessar
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  )
}
