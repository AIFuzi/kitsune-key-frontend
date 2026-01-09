import { ListingService } from '@/service/listing/listing.service'
import { getIconByAmenitiesType } from '@/utils'
import {
  BrushCleaning,
  CircleCheck,
  CircleParking,
  Dumbbell,
  Flag,
  Heart,
  Key,
  Map,
  MapPin,
  Medal,
  MessageCircle,
  Share,
  Star,
  Tag,
  Wifi,
} from 'lucide-react'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import RoomAmenities from '@/components/listing/room/RoomAmenities'
import RoomCalendar from '@/components/listing/room/RoomCalendar'
import RoomCarousel from '@/components/listing/room/RoomCarousel'
import RoomDescription from '@/components/listing/room/RoomDescription'
import RoomHighlights from '@/components/listing/room/RoomHighlights'
import RoomInfoBlock from '@/components/listing/room/RoomInfoBlock'
import RoomSelectDateCard from '@/components/listing/room/RoomSelectDateCard'
import RoomStats from '@/components/listing/room/RoomStats'
import RoomTitle from '@/components/listing/room/RoomTitle'
import Container from '@/components/shared/Container'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Progress } from '@/components/ui/progress'
import { ScrollArea } from '@/components/ui/scroll-area'
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
        __ROOM STATS__
        <Separator />
      </div>
    </Container>
  )
}
