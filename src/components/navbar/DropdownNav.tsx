'use client'

import { Button } from '@nextui-org/button'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react'
import { IoMenu } from 'react-icons/io5'

export function DropdownNav() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="bordered"
          className="min-w-0 border-teal-400 px-2 sm:hidden"
        >
          <IoMenu size={30} className="text-teal-400" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        variant="flat"
        classNames={{
          list: ['text-base', 'text-teal-900', 'font-semibold'],
        }}
      >
        <DropdownItem
          key="members"
          href="/members"
          className="hover:!bg-transparent hover:!text-teal-500"
        >
          Membros
        </DropdownItem>
        <DropdownItem
          key="lists"
          href="/lists"
          className="hover:!bg-transparent hover:!text-teal-500"
        >
          Listas
        </DropdownItem>
        <DropdownItem
          key="messages"
          href="/messages"
          className="hover:!bg-transparent hover:!text-teal-500"
        >
          Mensagens
        </DropdownItem>

        <DropdownItem
          key="login"
          href="/login"
          className="hover:!bg-transparent hover:!text-white"
        >
          <Button
            fullWidth
            size="md"
            variant="bordered"
            className="border-teal-500 font-bold text-teal-500"
          >
            Login
          </Button>
        </DropdownItem>

        <DropdownItem
          key="register"
          href="/register"
          className="hover:!bg-transparent hover:!text-white"
        >
          <Button
            fullWidth
            size="md"
            variant="flat"
            className="bg-teal-500/20 font-bold text-teal-500"
          >
            Cadastrar
          </Button>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
