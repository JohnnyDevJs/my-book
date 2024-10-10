'use client'

import { Card, CardFooter, Image } from '@nextui-org/react'
import { Member } from '@prisma/client'
import Link from 'next/link'
import { MouseEvent } from 'react'

import { LikeButton } from '@/components/LikeButton'
import { calculateAge } from '@/lib/utils'

type MemberCardProps = {
  member: Member
  likeIds: string[]
}

export function MemberCard({ member, likeIds }: MemberCardProps) {
  const hasLiked = likeIds.includes(member.userId)

  const preventLinkAction = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <Card
      className="group bg-default/30"
      fullWidth
      as={Link}
      href={`/members/${member.userId}`}
      isPressable
    >
      <Image
        isZoomed
        alt={member.name}
        width={300}
        src={member.image || ''}
        className="aspect-square object-cover group-hover:scale-125"
      />
      <div onClick={preventLinkAction}>
        <div className="absolute right-3 top-3 z-50">
          <LikeButton targetId={member.userId} hasLiked={hasLiked} />
        </div>
      </div>
      <CardFooter className="absolute inset-y-0 z-10 flex justify-start overflow-hidden bg-gradient-to-b from-secondary/0 from-50% to-secondary/50">
        <div className="flex h-full flex-col justify-end text-white">
          <span className="font-semibold">
            {member.name}, {calculateAge(member.dateOfBirth)}
          </span>
          <span className="text-sm">{member.city}</span>
        </div>
      </CardFooter>
    </Card>
  )
}
