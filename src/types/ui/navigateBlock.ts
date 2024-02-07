import { StaticImageData } from 'next/image';

export interface NavigateBlockProps {
  index: number;
  href: string;
  src: string | StaticImageData;
  sub: string;
  title: string;
}
