'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Card, CardBody, CardHeader, Input } from '@nextui-org/react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaUserPlus } from 'react-icons/fa'
import { FiEye, FiEyeOff } from 'react-icons/fi'

import { ErrorMessage } from '@/components/form/ErrorMessage'
import { RegisterSchema, registerSchema } from '@/lib/schemas/registerSchema'

export function RegisterForm() {
  const [isVisible, setIsVisible] = useState(false)
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: 'onTouched',
  })

  const onSubmit = (data: RegisterSchema) => {
    console.log(data)
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
              {...register('fullName')}
              isInvalid={!!errors.fullName}
              errorMessage={<ErrorMessage message={errors.fullName?.message} />}
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
              placeholder="Confira sua senha"
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
            <Button
              className="!pointer-events-auto bg-teal-500 font-bold text-white disabled:cursor-not-allowed"
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
