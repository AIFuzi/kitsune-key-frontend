import { KeyRound } from 'lucide-react'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex cursor-pointer items-center gap-x-3"
    >
      <KeyRound
        size={48}
        className="text-primary"
      />
      <h1 className="text-primary text-2xl font-bold">KitsuneKey</h1>
    </Link>
  )
}
