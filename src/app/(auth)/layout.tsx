import React, { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <section className="vertical-center flex items-center justify-center p-4 align-middle">
      {children}
    </section>
  )
}
