import { Button } from '@nextui-org/button'
import { Navbar, NavbarBrand, NavbarContent } from '@nextui-org/navbar'
import Link from 'next/link'
import { SiGitbook } from 'react-icons/si'

import { NavLink } from '@/components/navbar/NavLink'

export function TopNav() {
  return (
    <Navbar
      maxWidth="xl"
      className="bg-gradient-to-r from-teal-800 to-teal-500"
      classNames={{
        item: [
          'text-base',
          'text-white',
          'font-semibold',
          'data-[active=true]:text-teal-900',
        ],
      }}
    >
      <NavbarBrand as={Link} href="/">
        <SiGitbook size={30} className="text-teal-950" />
        <span className="ml-2 text-2xl font-bold text-white">MyBook</span>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavLink href="/members" label="Membros" />
        <NavLink href="/lists" label="Listas" />
        <NavLink href="/messages" label="Mensagens" />
      </NavbarContent>
      <NavbarContent justify="end">
        <Button
          as={Link}
          href="/login"
          variant="bordered"
          className="font-bold text-white"
        >
          Login
        </Button>
        <Button
          as={Link}
          href="/register"
          variant="flat"
          className="font-bold text-white"
        >
          Cadastrar
        </Button>
      </NavbarContent>
    </Navbar>
  )
}
