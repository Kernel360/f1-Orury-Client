import type { URLType } from '@/types/map/map';
import Image from 'next/image';
import { facebookSvg, homepageSvg, instagramSvg } from '$/map';

/**
 * @description 사이트마다 다른 아이콘을 보여주기 위한 컴포넌트입니다.
 * @param item 해당 url의 정보를 받아옵니다.
 */
function OneSiteUrl({ item }: { item: URLType }) {
  const { url, label } = item;
  const getSvg = () => {
    switch (label) {
      case 'facebook':
        return <Image src={facebookSvg} alt={label} width={20} height={20} />;
      case 'homepage':
        return <Image src={homepageSvg} alt={label} width={20} height={20} />;
      default:
        return <Image src={instagramSvg} alt={label} width={20} height={20} />;
    }
  };
  return (
    <div className="flex gap-2 items-center">
      <div>{getSvg()}</div>
      <a href={url} target="_blank" rel="noreferrer">
        {label}
      </a>
    </div>
  );
}

export default OneSiteUrl;
