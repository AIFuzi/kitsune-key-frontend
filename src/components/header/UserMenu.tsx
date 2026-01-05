import { CircleQuestionMark, Menu } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function UserMenu() {
  const t = useTranslations('layout.menu')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="cursor-pointer rounded-full bg-neutral-200 p-3 transition-colors hover:bg-neutral-300">
          <Menu size={16} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-3">
        <div className="flex items-center gap-x-3">
          <CircleQuestionMark size={14} />
          <span>{t('help')}</span>
        </div>
        <DropdownMenuSeparator />
        <div className="w-full p-1 transition-colors hover:bg-neutral-300">
          <Link href="login">{t('auth')}</Link>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
