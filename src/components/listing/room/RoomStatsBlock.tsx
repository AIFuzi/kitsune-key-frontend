import {
  BrushCleaning,
  CheckCircle2,
  KeySquare,
  MapPinned,
  MessageSquare,
  Star,
  Tag,
} from 'lucide-react'
import RoomStatsItem from '@/components/listing/room/RoomStatsItem'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'

interface RoomStateBlockProps {}

const ratingBars = [99, 0, 0, 0, 0]

export default function RoomStatsBlock({}: RoomStateBlockProps) {
  return (
    <div className="flex flex-col justify-center space-y-4">
      <div className="flex items-center gap-x-2">
        <Star className="fill-black" />
        <h1 className="text-2xl font-semibold">5.0 · 4 reviews</h1>
      </div>
      <div className="flex h-32 justify-between">
        <div className="flex flex-col">
          <h4 className="text-sm font-semibold">Overall rating</h4>
          {ratingBars.map((bar, i) => (
            <div
              key={i}
              className="flex items-center gap-x-1"
            >
              <p>{i + 1}</p>
              <Progress value={bar} />
            </div>
          ))}
        </div>
        <Separator orientation="vertical" />
        <RoomStatsItem
          value="5.0"
          type="Cleanliness"
          Icon={BrushCleaning}
        />
        <Separator orientation="vertical" />
        <RoomStatsItem
          value="5.0"
          type="Accuracy"
          Icon={CheckCircle2}
        />
        <Separator orientation="vertical" />
        <RoomStatsItem
          value="5.0"
          type="Check-in"
          Icon={KeySquare}
        />
        <Separator orientation="vertical" />
        <RoomStatsItem
          value="5.0"
          type="Communication"
          Icon={MessageSquare}
        />
        <Separator orientation="vertical" />
        <RoomStatsItem
          value="5.0"
          type="Location"
          Icon={MapPinned}
        />
        <Separator orientation="vertical" />
        <RoomStatsItem
          value="5.0"
          type="Value"
          Icon={Tag}
        />
      </div>
    </div>
  )
}
