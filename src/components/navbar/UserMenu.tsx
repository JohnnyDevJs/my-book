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
    <Dropdown placement="bottom-end" className="bg-background">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="uppercase text-secondary-600 transition-transform [&>span]:font-bold"
          color="secondary"
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
          className="text-foreground hover:!bg-secondary hover:!text-secondary-600 [&>span]:font-semibold"
        >
          Perfil
        </DropdownItem>
        <DropdownItem
          color="danger"
          onClick={async () => signOutUser()}
          className="text-foreground [&>span]:font-semibold"
        >
          Sair
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
