'use client'

import { Tab, Tabs } from '@nextui-org/react'
import { Member } from '@prisma/client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Key, useTransition } from 'react'

import { MemberCard } from '@/app/members/_components/MemberCard'
import { LoadingComponent } from '@/components/LoadingComponent'

type ListsTabProps = {
  members: Member[]
  likeIds: string[]
}

export function ListsTab({ members, likeIds }: ListsTabProps) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const tabs = [
    { id: 'source', label: 'Membros que eu curti' },
    { id: 'target', label: 'Membros que me curtiram' },
    { id: 'mutual', label: 'Curtidas simultâneas' },
  ]

  function handleTabChange(key: Key) {
    startTransition(() => {
      const params = new URLSearchParams(searchParams)
      params.set('type', key.toString())
      router.replace(`${pathname}?${params.toString()}`)
    })
  }

  return (
    <div className="flex w-full flex-col gap-5">
      <Tabs
        className="[&>div]:bg-default/30"
        aria-label="Like tabs"
        items={tabs}
        color="secondary"
        onSelectionChange={(key) => handleTabChange(key)}
      >
        {(item) => (
          <Tab
            key={item.id}
            title={item.label}
            className="relative z-10 whitespace-nowrap text-default-500 transition-colors [&>div]:font-bold [&>div]:!text-foreground"
          >
            {isPending ? (
              <LoadingComponent />
            ) : (
              <>
                {members.length > 0 ? (
                  <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5">
                    {members.map((member) => (
                      <MemberCard
                        key={member.id}
                        member={member}
                        likeIds={likeIds}
                      />
                    ))}
                  </div>
                ) : (
                  <div>Nenhum membro encontrado</div>
                )}
              </>
            )}
          </Tab>
        )}
      </Tabs>
    </div>
  )
}
