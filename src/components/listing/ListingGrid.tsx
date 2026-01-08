'use client'

import { ListingService } from '@/service/listing/listing.service'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import ListingItem, {
  ListingItemSkeleton,
} from '@/components/listing/ListingItem'
import { IAllListings } from '@/libs/interfaces'

interface ListingGridProps {
  country: string
  page?: number
  limit?: number
}

export default function ListingGrid({
  country,
  page,
  limit,
}: ListingGridProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [listings, setListings] = useState<IAllListings>()

  useEffect(() => {
    const fetchListings = async () => {
      setIsLoading(true)

      try {
        const response = await ListingService.fetchListings(
          country,
          page,
          limit,
        )
        setListings(response.data)
      } catch (e) {
        if (e instanceof Error) {
          toast.error('Error', { description: e.message })
        }
      } finally {
        setIsLoading(false)
      }
    }

    void fetchListings()
  }, [])

  return isLoading ? (
    <div className="mt-3 grid space-y-6 space-x-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {Array.from({ length: 25 }).map((_, i) => (
        <ListingItemSkeleton key={i} />
      ))}
    </div>
  ) : (
    <div className="mt-3 grid space-y-6 space-x-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {listings?.listings.map(listing => (
        <ListingItem
          key={listing.id}
          listingInfo={listing}
        />
      ))}
    </div>
  )
}
