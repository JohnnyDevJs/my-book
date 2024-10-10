import { Spinner } from '@nextui-org/react'

export function LoadingComponent({ label }: { label?: string }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <Spinner
        label={label || 'Carregando...'}
        color="secondary"
        labelColor="secondary"
      />
    </div>
  )
}
