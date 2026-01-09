import { getIconByAmenitiesType } from '@/utils'

interface RoomAmenitiesProps {
  amenities: string[]
}

export default function RoomAmenities({ amenities }: RoomAmenitiesProps) {
  return (
    <div>
      <h1 className="text-2xl font-semibold">What this place offers</h1>
      <div className="mt-4 grid grid-cols-2 grid-rows-3 gap-x-5 gap-y-3">
        {amenities.map((amenities, index) => {
          const Icon = getIconByAmenitiesType(amenities.split('.')[0])

          return (
            <div
              key={index}
              className="hover:border-muted flex cursor-pointer items-center space-x-2 rounded-lg border border-white p-2 transition-all hover:shadow-lg"
            >
              <Icon />
              <h2>{amenities.split('.')[1]}</h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}
