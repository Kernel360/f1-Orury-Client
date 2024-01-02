import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/app/_components/ui/carousel';
import { v4 as uuid } from 'uuid';
import Image from 'next/image';
import { MapCarouselProps } from '@/types/map/BottomSheetProps';

function MapCarousel({
  handleImageOpen,
  img_urls,
  width = 'w-[95%]',
}: MapCarouselProps) {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className={`${width} mx-auto my-0`}
    >
      <CarouselContent className="h-[6.5rem]">
        {img_urls.map(url => (
          <CarouselItem key={uuid()} className="relative basis-1/3">
            <div className="p-[0.5rem] rounded-xl overflow-hidden h-full relative">
              <Image
                onClick={() => handleImageOpen(url)}
                src={url}
                alt={url}
                fill
                objectPosition="center"
                objectFit="cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default MapCarousel;
