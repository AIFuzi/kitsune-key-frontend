import { PageConfig } from '@/libs'
import { KeyRound } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link
      href={PageConfig.MAIN_PAGE}
      className="group flex cursor-pointer items-center gap-x-3"
    >
      {/*<KeyRound*/}
      {/*  size={48}*/}
      {/*  className="text-primary transition-all group-hover:-rotate-24"*/}
      {/*/>*/}
      <Image
        src="/logo.png"
        alt="Logo"
        width={36}
        height={36}
      />
      <h1 className="text-primary text-2xl font-semibold transition-all group-hover:-translate-y-px">
        KitsuneKey
      </h1>
    </Link>
  )
}
