import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/app/_components/ui/carousel';
import Image from 'next/image';
import type { ImageCarouselProps } from '@/types/ui/common/ImageCarousel';
import { v4 as uuid } from 'uuid';

function ImageCarousel({ images }: ImageCarouselProps) {
  const width = window.outerWidth;
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map(image => (
          <CarouselItem key={uuid()}>
            <Image src={image} alt={image} width={width} height={width} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default ImageCarousel;
