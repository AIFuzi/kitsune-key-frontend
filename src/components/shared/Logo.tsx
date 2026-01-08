import { PageConfig } from '@/libs'
import { KeyRound } from 'lucide-react'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link
      href={PageConfig.MAIN_PAGE}
      className="group flex cursor-pointer items-center gap-x-3"
    >
      <KeyRound
        size={48}
        className="text-primary transition-all group-hover:-rotate-24"
      />
      <h1 className="text-primary text-2xl font-bold transition-all group-hover:-translate-y-0.25">
        KitsuneKey
      </h1>
    </Link>
  )
}
