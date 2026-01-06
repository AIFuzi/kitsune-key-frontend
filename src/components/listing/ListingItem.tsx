'use client'

import { calculateCurrency } from '@/utils'
import { Heart, Star } from 'lucide-react'
import { useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { useCurrency } from '@/hooks/useCurrency'
import { IListingBase } from '@/libs/interfaces'

interface ListingItemProps {
  listingInfo: IListingBase
}

export default function ListingItem({ listingInfo }: ListingItemProps) {
  const { currency } = useCurrency()

  const [isFilled, setIsFilled] = useState(false)

  return (
    <div className="h-56 w-56">
      <div className="relative h-full w-full">
        <div
          className="h-full w-full rounded-xl bg-cover bg-center"
          style={{
            backgroundImage: `url(http://localhost:9000/kitsune-key/${listingInfo.imageUrl[0]}`,
          }}
        />
        <Heart
          size={28}
          onClick={() => setIsFilled(!isFilled)}
          className={`absolute top-2 right-4 cursor-pointer text-white ${isFilled ? 'fill-primary' : 'fill-black/60'}`}
        />
      </div>
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold">{`${listingInfo.city}: ${listingInfo.propertyType}`}</h4>
        <div className="flex items-center gap-x-1">
          <Star
            fill="black"
            size={14}
          />
          <h4 className="text-sm font-semibold">4.96 (24)</h4>
        </div>
      </div>
      <div className="text-muted-foreground flex flex-col">
        <span className="text-sm font-semibold">{listingInfo.title}</span>
        <span className="text-sm font-semibold">
          Bed {listingInfo.bedCount} · Bath {listingInfo.bathCount}
        </span>
      </div>
      <div className="flex items-center space-x-1">
        {listingInfo.discountPercent > 0 && (
          <h1 className="text-muted-foreground text-lg font-semibold line-through">
            $6000
          </h1>
        )}
        <h1 className="text-lg font-semibold underline">
          {calculateCurrency(currency, listingInfo.price)}
        </h1>
        <span className="text-muted-foreground font-semibold">day</span>
      </div>
    </div>
  )
}

export function ListingItemSkeleton() {
  return (
    <div className="flex flex-col space-y-2">
      <Skeleton className="h-56 w-56" />
      <Skeleton className="h-4 w-56" />
      <Skeleton className="h-4 w-32" />
    </div>
  )
}
