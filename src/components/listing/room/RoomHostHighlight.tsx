import { PageConfig } from '@/libs'
import { Medal } from 'lucide-react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { IProfile } from '@/libs/interfaces'

interface RoomHostHighlightProps {
  host: IProfile
}

export default function RoomHostHighlight({ host }: RoomHostHighlightProps) {
  return (
    <div className="flex items-start space-x-4">
      <Avatar className="h-12 w-12">
        <AvatarImage
          src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${host.avatarUrl}`}
          alt="Avatar"
        />
        <AvatarFallback>{host.name[0]}</AvatarFallback>
      </Avatar>
      <Link href={`${PageConfig.USER_PAGE}/${host.userId}`}>
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold">Host: {host.name}</h1>
          <div className="text-muted-foreground flex items-center gap-x-2">
            <Medal size={14} />
            <h2 className="">Superhost</h2>
          </div>
        </div>
      </Link>
    </div>
  )
}
