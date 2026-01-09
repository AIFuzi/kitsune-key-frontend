import { Heart, Share } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'

interface RoomTitleProps {
  title: string
}

export default function RoomTitle({ title }: RoomTitleProps) {
  const t = useTranslations('listing.rooms.title')

  return (
    <div className="flex items-center justify-between gap-x-2">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <div className="flex items-center gap-x-1">
        <Button variant="ghost">
          <Share />
          <h2 className="underline">{t('share')}</h2>
        </Button>
        <Button variant="ghost">
          <Heart />
          <h2 className="underline">{t('save')}</h2>
        </Button>
      </div>
    </div>
  )
}
