import { Star } from 'lucide-react'

interface RoomInfoBlockProps {
  propertyType: string
  city: string
  country: string
  bedCount: number
  bathCount: number
}

export default function RoomInfoBlock({
  country,
  bedCount,
  bathCount,
  city,
  propertyType,
}: RoomInfoBlockProps) {
  const infoBlock = `${propertyType}, ${city}, ${country}`
  const roomsInfoBlock = `${bedCount} bed · ${bathCount} bath`

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-semibold">{infoBlock}</h2>
      <h2 className="text-lg">{roomsInfoBlock}</h2>
      <div className="flex items-center gap-x-1">
        <Star className="size-3 fill-black" />
        <h4>4.96</h4>
        <h4>·</h4>
        <h4 className="hover:text-muted-foreground cursor-pointer font-semibold underline transition-colors">
          14 reviews
        </h4>
      </div>
    </div>
  )
}
