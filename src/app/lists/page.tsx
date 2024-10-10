import {
  fetchCurrentUserLikeIds,
  fetchLikedMembers,
} from '@/app/actions/likeActions'

import { ListsTab } from './_components/ListsTab'

export default async function ListsPage({
  searchParams,
}: {
  searchParams: { type: string }
}) {
  const likeIds = await fetchCurrentUserLikeIds()
  const members = await fetchLikedMembers(searchParams.type)

  return (
    <section className="container pt-10">
      <ListsTab members={members} likeIds={likeIds} />
    </section>
  )
}
