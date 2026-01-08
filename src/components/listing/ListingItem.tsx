'use client'

import { calculateCurrency } from '@/utils'
import { Heart, Star } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { useCurrency } from '@/hooks/useCurrency'
import { IListingBase } from '@/libs/interfaces'

interface ListingItemProps {
  listingInfo: IListingBase
}

export default function ListingItem({ listingInfo }: ListingItemProps) {
  const t = useTranslations('listing')

  const { currency } = useCurrency()

  const [isFilled, setIsFilled] = useState(false)

  return (
    <Link
      href="/listing"
      className="transition-all hover:-translate-y-1"
    >
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
            onClick={e => {
              e.preventDefault()
              e.stopPropagation()
              setIsFilled(!isFilled)
            }}
            className={`hover:text-primary absolute top-2 right-4 cursor-pointer text-white transition-all ${isFilled ? 'fill-primary' : 'fill-black/60'}`}
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
            {`${t('bed')} ${listingInfo.bedCount}`} ·{' '}
            {`${t('bath')} ${listingInfo.bathCount}`}
          </span>
        </div>
        <div className="flex items-center space-x-1">
          {listingInfo.discountPercent > 0 && (
            <h1 className="text-muted-foreground text-lg font-semibold line-through">
              {calculateCurrency(currency, 6000)}
            </h1>
          )}
          <h1 className="text-lg font-semibold underline">
            {calculateCurrency(currency, listingInfo.price)}
          </h1>
          <span className="text-muted-foreground font-semibold">
            {t('period')}
          </span>
        </div>
      </div>
    </Link>
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
