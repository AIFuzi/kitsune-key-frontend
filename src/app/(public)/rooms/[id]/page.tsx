import { ListingService } from '@/service/listing/listing.service'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import RoomAmenities from '@/components/listing/room/RoomAmenities'
import RoomCalendar from '@/components/listing/room/RoomCalendar'
import RoomCarousel from '@/components/listing/room/RoomCarousel'
import RoomDescription from '@/components/listing/room/RoomDescription'
import RoomHighlights from '@/components/listing/room/RoomHighlights'
import RoomInfoBlock from '@/components/listing/room/RoomInfoBlock'
import RoomSelectDateCard from '@/components/listing/room/RoomSelectDateCard'
import RoomStatsBlock from '@/components/listing/room/RoomStatsBlock'
import RoomTitle from '@/components/listing/room/RoomTitle'
import Container from '@/components/shared/Container'
import { Separator } from '@/components/ui/separator'

interface PageProps {
  params: { id: string } | Promise<{ id: string }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params

  const t = await getTranslations('listing.rooms')

  const response = await ListingService.getListingInfoById(id)
  if (response.data.title === undefined) {
    return {
      title: t('notFound'),
    }
  }

  return {
    title: `${response.data.title} ${t('heading')}`,
  }
}

export default async function Page({ params }: PageProps) {
  const { id } = await params

  const response = await ListingService.getListingInfoById(id)
  const roomData = response.data
  if (roomData.title === undefined) {
    return <h1>Not found</h1>
  }

  return (
    <Container className="mt-10 mb-44">
      <div className="flex flex-col space-y-4">
        <RoomTitle title={roomData.title} />
        <RoomCarousel
          alt={roomData.title}
          images={roomData.imageUrl}
        />
        <div className="flex items-start justify-between">
          <div className="flex w-[60%] flex-col space-y-6">
            <RoomInfoBlock
              country={roomData.country}
              bedCount={roomData.bedCount}
              bathCount={roomData.bathCount}
              city={roomData.city}
              propertyType={roomData.propertyType}
            />
            <RoomHighlights host={roomData.host.profileInfo} />
            <RoomDescription description={roomData.description} />
            <Separator />
            <RoomAmenities amenities={roomData.amenities} />
            <Separator />
            <RoomCalendar />
          </div>
          <RoomSelectDateCard />
        </div>
        <Separator />
        <RoomStatsBlock />
        <Separator />
      </div>
    </Container>
  )
}
