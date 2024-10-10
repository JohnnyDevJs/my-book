import { CardBody, CardHeader, Divider } from '@nextui-org/react'
import { notFound } from 'next/navigation'

import { getMemberByUserId } from '@/app/actions/memberActions'

export default async function MemberDetailedPage({
  params,
}: {
  params: { userId: string }
}) {
  const member = await getMemberByUserId(params.userId)

  if (!member) return notFound()
  return (
    <>
      <CardHeader className="text-2xl font-semibold text-secondary">
        Perfil
      </CardHeader>
      <Divider />
      <CardBody className="text-foreground">{member.description}</CardBody>
    </>
  )
}
