import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

interface RoomCarouselProps {
  alt: string
  images: string[]
}

export default function RoomCarousel({ alt, images }: RoomCarouselProps) {
  return (
    <Carousel className="h-[650px] w-full rounded-lg bg-black">
      <CarouselContent>
        {images.map((url, index) => (
          <CarouselItem key={index}>
            <Image
              src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${url}`}
              alt={alt}
              width={1280}
              height={720}
              className="h-[650px] w-full rounded-lg object-contain"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
