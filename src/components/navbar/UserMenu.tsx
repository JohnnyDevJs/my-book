'use client'

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/dropdown'
import { Avatar } from '@nextui-org/react'
import Link from 'next/link'
import { Session } from 'next-auth'

import { signOutUser } from '@/app/actions/authActions'
import { getInitials } from '@/lib/utils'

type UserMenuProps = {
  user: Session['user']
}

export function UserMenu({ user }: UserMenuProps) {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="bg-teal-400 uppercase text-white ring-teal-500 transition-transform [&>span]:font-bold"
          color="default"
          name={getInitials(user?.name as string)}
          size="sm"
          src={user?.image as string}
        />
      </DropdownTrigger>
      <DropdownMenu variant="flat" aria-label="user actions menu">
        {/* <DropdownSection showDivider>
          <DropdownItem
            isReadOnly
            as="span"
            className="flex flex-row"
            aria-label="username"
          >
            Logado como {user?.name}
          </DropdownItem>
        </DropdownSection> */}
        <DropdownItem
          as={Link}
          href="/members/edit"
          className="text-slate-500 hover:!bg-teal-400 hover:!text-white [&>span]:font-semibold"
        >
          Perfil
        </DropdownItem>
        <DropdownItem
          color="danger"
          onClick={async () => signOutUser()}
          className="text-slate-500 [&>span]:font-semibold"
        >
          Sair
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
