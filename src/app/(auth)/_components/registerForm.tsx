'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Card, CardBody, CardHeader, Input } from '@nextui-org/react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaUserPlus } from 'react-icons/fa'
import { FiEye, FiEyeOff } from 'react-icons/fi'

import { registerUser } from '@/app/actions/authActions'
import { ErrorMessage } from '@/components/form/ErrorMessage'
import { RegisterSchema, registerSchema } from '@/lib/schemas/registerSchema'

export function RegisterForm() {
  const [isVisible, setIsVisible] = useState(false)
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false)
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid, isSubmitting },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: 'onTouched',
  })

  async function onSubmit(data: RegisterSchema) {
    const result = await registerUser(data)

    if (result.status === 'success') {
      console.log('Usuário registrado com sucesso.')
    } else {
      if (Array.isArray(result.error)) {
        result.error.forEach((e) => {
          const fieldName = e.path.join('.') as 'email' | 'name' | 'password'
          setError(fieldName, { message: e.message })
        })
      } else {
        setError('root.serverError', { message: result.error })
      }
    }
  }

  const toggleVisibility = () => setIsVisible(!isVisible)
  const toggleConfirmPasswordVisibility = () =>
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible)

  return (
    <Card className="mx-auto w-full max-w-96">
      <CardHeader className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-2 text-teal-950">
          <FaUserPlus size={20} />
          <h1 className="text-xl font-semibold">Cadastre-se</h1>
        </div>
        <p className="text-slate-500">Obtenha acesso ao MyBook</p>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <Input
              defaultValue=""
              isRequired
              label="Nome completo"
              variant="bordered"
              size="sm"
              placeholder="Insira seu nome completo"
              onClear={() => console.log('input cleared')}
              {...register('name')}
              isInvalid={!!errors.name}
              errorMessage={<ErrorMessage message={errors.name?.message} />}
              autoFocus
            />

            <Input
              defaultValue=""
              isRequired
              label="E-mail"
              variant="bordered"
              size="sm"
              placeholder="Insira seu e-mail"
              onClear={() => console.log('input cleared')}
              {...register('email')}
              isInvalid={!!errors.email}
              errorMessage={<ErrorMessage message={errors.email?.message} />}
            />
            <Input
              isRequired
              defaultValue=""
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
                      className="eye pointer-events-none text-sm text-teal-900"
                      strokeWidth={2.5}
                    />
                  ) : (
                    <FiEye
                      className="eye pointer-events-none text-sm text-teal-900"
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
            <Input
              isRequired
              defaultValue=""
              label="Confirmar senha"
              variant="bordered"
              size="sm"
              placeholder="Confirme sua senha"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  aria-label="toggle password visibility"
                >
                  {isConfirmPasswordVisible ? (
                    <FiEyeOff
                      className="eye pointer-events-none text-sm text-teal-900"
                      strokeWidth={2.5}
                    />
                  ) : (
                    <FiEye
                      className="eye pointer-events-none text-sm text-teal-900"
                      strokeWidth={2.5}
                    />
                  )}
                </button>
              }
              type={isConfirmPasswordVisible ? 'text' : 'password'}
              {...register('confirmPassword')}
              isInvalid={!!errors.confirmPassword}
              errorMessage={
                <ErrorMessage message={errors.confirmPassword?.message} />
              }
            />
            {errors.root?.serverError && (
              <p className="text-sm text-danger">
                {errors.root.serverError.message}
              </p>
            )}
            <Button
              className="!pointer-events-auto bg-teal-500 font-bold text-white disabled:cursor-not-allowed"
              isLoading={isSubmitting}
              isDisabled={!isValid}
              fullWidth
              size="lg"
              color="default"
              type="submit"
            >
              Cadastrar
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  )
}
