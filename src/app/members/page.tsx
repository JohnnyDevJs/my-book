import { getMembers } from '@/app/actions/memberActions'
import { MemberCard } from '@/app/members/_components/MemberCard'

import { fetchCurrentUserLikeIds } from '../actions/likeActions'

export default async function MembersPage() {
  const members = await getMembers()
  const likeIds = await fetchCurrentUserLikeIds()
  return (
    <section className="container grid grid-cols-2 gap-8 pt-10 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5">
      {members &&
        members.map((member) => (
          <MemberCard key={member.id} member={member} likeIds={likeIds} />
        ))}
    </section>
  )
}
