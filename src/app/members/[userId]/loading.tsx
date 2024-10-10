import { Spinner } from '@nextui-org/react'

export default function Loading() {
  return (
    <div className="vertical-center flex items-center justify-center">
      <Spinner label="Carregando..." color="secondary" labelColor="secondary" />
    </div>
  )
}
