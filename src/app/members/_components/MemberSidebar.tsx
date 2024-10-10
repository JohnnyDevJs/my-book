'use client'

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Link,
} from '@nextui-org/react'
import { Member } from '@prisma/client'
import { usePathname } from 'next/navigation'

import { calculateAge, cn } from '@/lib/utils'

type MemberSidebarProps = {
  member: Member
}

export function MemberSidebar({ member }: MemberSidebarProps) {
  const pathname = usePathname()
  const basePath = `/members/${member.userId}`

  const navLinks = [
    { name: 'Perfil', href: `${basePath}` },
    { name: 'Fotos', href: `${basePath}/photos` },
    { name: 'Chat', href: `${basePath}/chat` },
  ]

  return (
    <Card className="mt-10 h-[80vh] w-full items-center bg-default/30">
      <Image
        height={200}
        width={200}
        src={member.image || ''}
        alt="User profile main image"
        className="mt-6 aspect-square rounded-full object-cover"
      />
      <CardBody>
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold text-foreground">
            {member.name}, {calculateAge(member.dateOfBirth)}
          </div>
          <div className="text-center text-sm text-foreground">
            {member.city}, {member.country}
          </div>
        </div>
        <Divider className="my-3" />
        <nav className="flex flex-col gap-4 py-4 text-center text-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                'block rounded font-medium text-foreground',
                pathname === link.href
                  ? 'font-bold text-secondary'
                  : 'hover:text-secondary-600',
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </CardBody>
      <CardFooter>
        <Button
          fullWidth
          as={Link}
          href="/members"
          variant="bordered"
          color="secondary"
          className="font-bold text-secondary-600"
        >
          Voltar
        </Button>
      </CardFooter>
    </Card>
  )
}
