import { LucideIcon } from 'lucide-react'

interface RoomStateItemProps {
  value: string
  type:
    | 'Cleanliness'
    | 'Accuracy'
    | 'Check-in'
    | 'Communication'
    | 'Location'
    | 'Value'
  Icon: LucideIcon
}

export default function RoomStateItem({
  Icon,
  value,
  type,
}: RoomStateItemProps) {
  return (
    <div className="flex flex-col space-y-6">
      <div>
        <p className="font-semibold">{type}</p>
        <p className="font-semibold">{value}</p>
      </div>
      <Icon size={26} />
    </div>
  )
}
