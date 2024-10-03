import './globals.css'

import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

import Providers from '@/app/providers'
import { TopNav } from '@/components/navbar/TopNav'
import { cn } from '@/lib/utils'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
})

export const metadata: Metadata = {
  title: 'Página Inicial | MyBook',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={cn(openSans.variable, 'font-open-sans antialiased')}>
        <Providers>
          <TopNav />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
