'use client'

import { useRouter } from 'next/navigation'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import { toggleLikeMember } from '@/app/actions/likeActions'
import { cn } from '@/lib/utils'

type LikeButtonProps = {
  targetId: string
  hasLiked: boolean
}

export function LikeButton({ targetId, hasLiked }: LikeButtonProps) {
  const router = useRouter()

  async function toggleLike() {
    await toggleLikeMember(targetId, hasLiked)
    router.refresh()
  }

  return (
    <div
      onClick={toggleLike}
      className="relative cursor-pointer transition hover:opacity-80"
    >
      <AiOutlineHeart
        size={28}
        className="absolute -right-[2px] -top-[2px] fill-white"
      />

      <AiFillHeart
        size={24}
        className={cn(hasLiked ? 'fill-rose-500' : 'fill-default/40')}
      />
    </div>
  )
}
