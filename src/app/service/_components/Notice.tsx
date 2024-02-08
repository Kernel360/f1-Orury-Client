'use client';

import Autoplay from 'embla-carousel-autoplay';
import * as C from '@/app/_components/ui/carousel';
import useEmblaCarousel from 'embla-carousel-react';

// import { v4 } from 'uuid';
import { COLOR } from '@/styles/color';
import { Megaphone, Tally1 } from 'lucide-react';
import { EmblaOptionsType } from 'embla-carousel';
import { useEffect } from 'react';
import Link from 'next/link';

function Notice() {
  const OPTIONS: EmblaOptionsType = { align: 'start', loop: true, axis: 'y' };
  const NOTICE = [
    '커뮤니티 제한 정책 업데이트',
    '3월 신규 암장 오픈 정보 업데이트',
    '이 달의 오루리 클라이머 선정',
  ];
  const [emblaRef, embla] = useEmblaCarousel(OPTIONS, [
    Autoplay({ delay: 3000 }),
  ]);
  const { primary, grey400 } = COLOR;

  useEffect(() => {
    if (embla && NOTICE.length > 0) {
      embla.reInit();
    }
  }, [embla, NOTICE]);

  return (
    <div className="flex items-center h-8 gap-3 px-2 mx-4 mb-4 text-xs rounded-lg shadow-main overflow-hidden">
      <Megaphone color={primary} />
      <Tally1 color={grey400} strokeWidth={0.5} />

      <C.Carousel opts={OPTIONS} orientation="vertical">
        <C.CarouselContent ref={emblaRef}>
          {/* {NOTICE.map(value => (
            <C.CarouselItem key={v4()}>
              <span className="ellipsis">{value}</span>
            </C.CarouselItem>
          ))} */}
          <C.CarouselItem>
            <Link href="https://forms.gle/eLejpGHoE1PTyn79A" target="_blank">
              Orury 고객의 소리함 바로가기
            </Link>
          </C.CarouselItem>
        </C.CarouselContent>
      </C.Carousel>
    </div>
  );
}

export default Notice;
