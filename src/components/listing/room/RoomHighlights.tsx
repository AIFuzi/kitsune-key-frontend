import { CircleParking, Dumbbell, MapPin, Medal } from 'lucide-react'
import RoomHighlightItem from '@/components/listing/room/RoomHighlightItem'
import RoomHostHighlight from '@/components/listing/room/RoomHostHighlight'
import { Separator } from '@/components/ui/separator'
import { IProfile } from '@/libs/interfaces'

interface RoomHighlightsProps {
  host: IProfile
}

export default function RoomHighlights({ host }: RoomHighlightsProps) {
  return (
    <div className="space-y-4">
      <Separator />
      <RoomHostHighlight host={host} />
      <Separator />
      <div className="flex flex-col space-y-4">
        <RoomHighlightItem
          Icon={MapPin}
          title="Walkable area"
          description="This area is easy to get around."
        />
        <RoomHighlightItem
          Icon={CircleParking}
          title="Park for free"
          description="This is one of the few places in the area with free parking."
        />
        <RoomHighlightItem
          Icon={Dumbbell}
          title="Fitness room"
          description="he house includes a fitness room."
        />
      </div>
      <Separator />
    </div>
  )
}
