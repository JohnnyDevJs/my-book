import { Card } from '@nextui-org/react'
import { notFound } from 'next/navigation'
import { ReactNode } from 'react'

import { getMemberByUserId } from '@/app/actions/memberActions'
import { MemberSidebar } from '@/app/members/_components/MemberSidebar'

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode
  params: { userId: string }
}) {
  const member = await getMemberByUserId(params.userId)

  if (!member) return notFound()
  return (
    <section className="container grid h-[80vh] grid-cols-12 gap-5">
      <div className="col-span-3">
        <MemberSidebar member={member} />
      </div>
      <div className="col-span-9">
        <Card className="mt-10 h-[80vh] w-full bg-default/30">{children}</Card>
      </div>
    </section>
  )
}
