'use client'

import { ListingService } from '@/service/listing/listing.service'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import ListingItem, {
  ListingItemSkeleton,
} from '@/components/listing/ListingItem'
import { IAllListings } from '@/libs/interfaces'

export default function ListingGrid() {
  const [isLoading, setIsLoading] = useState(true)
  const [listings, setListings] = useState<IAllListings>()

  useEffect(() => {
    const fetchListings = async () => {
      setIsLoading(true)

      try {
        const response = await ListingService.fetchListings()
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
    <div className="mt-3 grid space-y-25 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {Array.from({ length: 25 }).map((_, i) => (
        <ListingItemSkeleton key={i} />
      ))}
    </div>
  ) : (
    <div className="mt-3 grid space-y-25 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {listings?.listings.map(listing => (
        <ListingItem
          key={listing.id}
          listingInfo={listing}
        />
      ))}
    </div>
  )
}
