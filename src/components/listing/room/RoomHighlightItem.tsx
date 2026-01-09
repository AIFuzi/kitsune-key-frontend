import { LucideIcon } from 'lucide-react'

interface RoomHighlightItemProps {
  Icon: LucideIcon
  title: string
  description: string
}

export default function RoomHighlightItem({
  Icon,
  description,
  title,
}: RoomHighlightItemProps) {
  return (
    <div className="flex items-center gap-x-5">
      <Icon />
      <div className="flex flex-col">
        <h1 className="text-sm font-semibold">{title}</h1>
        <h2 className="text-muted-foreground text-sm">{description}</h2>
      </div>
    </div>
  )
}
