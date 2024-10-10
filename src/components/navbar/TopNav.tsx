import { Button } from '@nextui-org/button'
import { Navbar, NavbarBrand, NavbarContent } from '@nextui-org/navbar'
import Link from 'next/link'
import { SiGitbook } from 'react-icons/si'

import { auth } from '@/auth'
import { NavLink } from '@/components/navbar/NavLink'

import { DropdownNav } from './DropdownNav'
import { ThemeSwitcher } from './ThemeSwitcher'
import { UserMenu } from './UserMenu'

export async function TopNav() {
  const session = await auth()

  return (
    <Navbar
      isBordered
      maxWidth="xl"
      className="bg-background"
      classNames={{
        item: [
          'text-base',
          'text-white',
          'font-semibold',
          'data-[active=true]:text-secondary',
        ],
      }}
    >
      <NavbarBrand as={Link} href="/">
        <SiGitbook size={30} className="text-secondary" />
        <span className="ml-2 text-2xl font-bold text-foreground">MyBook</span>
      </NavbarBrand>
      <NavbarContent justify="center" className="max-sm:hidden">
        <NavLink href="/members" label="Membros" />
        <NavLink href="/lists" label="Listas" />
        <NavLink href="/messages" label="Mensagens" />
      </NavbarContent>
      <NavbarContent justify="end">
        <DropdownNav session={session} />
        <ThemeSwitcher />
        {session?.user ? (
          <UserMenu user={session.user} />
        ) : (
          <>
            <Button
              as={Link}
              href="/login"
              variant="bordered"
              className="border-foreground font-bold text-foreground max-sm:hidden"
            >
              Login
            </Button>
            <Button
              as={Link}
              href="/register"
              color="secondary"
              className="font-bold text-secondary-600 max-sm:hidden"
            >
              Cadastre-se
            </Button>
          </>
        )}
      </NavbarContent>
    </Navbar>
  )
}
