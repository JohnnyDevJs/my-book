'use client'

import { Button } from '@nextui-org/button'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Session } from 'next-auth'
import { RiMenu3Line } from 'react-icons/ri'

import { cn } from '@/lib/utils'
type DropdownNavProps = {
  session: Session | null
}

type MenuItemProps = {
  key: string
  label: string
  href: string
}

export function DropdownNav({ session }: DropdownNavProps) {
  const pathname = usePathname()

  const items: MenuItemProps[] = [
    {
      key: 'members',
      label: 'Membros',
      href: '/members',
    },
    {
      key: 'lists',
      label: 'Listas',
      href: '/lists',
    },
    {
      key: 'messages',
      label: 'Mensagens',
      href: '/messages',
    },
  ]
  return (
    <Dropdown className="bg-background" placement="bottom-end">
      <DropdownTrigger>
        <Button
          variant="bordered"
          className="h-10 w-10 min-w-0 border-secondary px-2 sm:hidden"
        >
          <RiMenu3Line size={30} className="text-secondary" />
        </Button>
      </DropdownTrigger>

      <DropdownMenu aria-label="Dynamic Actions" variant="flat">
        <>
          {items.map((item) => (
            <DropdownItem key={item.key} className="group hover:!bg-secondary">
              <Link
                href={item.href}
                className={cn(
                  'w-full text-sm font-semibold text-foreground group-hover:!text-secondary-600',
                  pathname === item.href && 'text-secondary',
                )}
              >
                {item.label}
              </Link>
            </DropdownItem>
          ))}

          {!session && (
            <>
              <DropdownItem key="login">
                <Link href="/login">
                  <Button
                    fullWidth
                    size="md"
                    variant="bordered"
                    className="border-foreground font-bold text-foreground"
                  >
                    Login
                  </Button>
                </Link>
              </DropdownItem>

              <DropdownItem key="register">
                <Link href="/register">
                  <Button
                    fullWidth
                    size="md"
                    color="secondary"
                    className="font-bold text-secondary-600"
                  >
                    Cadastrar
                  </Button>
                </Link>
              </DropdownItem>
            </>
          )}
        </>
      </DropdownMenu>
    </Dropdown>
  )
}
