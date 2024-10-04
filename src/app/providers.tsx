import { NextUIProvider } from '@nextui-org/react'
import { ReactNode } from 'react'
import { Toaster } from 'sonner'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <NextUIProvider>
      <Toaster richColors />
      {children}
    </NextUIProvider>
  )
}
