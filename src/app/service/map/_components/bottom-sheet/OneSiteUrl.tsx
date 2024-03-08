import type { URLType } from '@/types/map/map';
import { Home, Instagram, Map } from 'lucide-react';

/**
 * @description 사이트마다 다른 아이콘을 보여주기 위한 컴포넌트입니다.
 * @param item 해당 url의 정보를 받아옵니다.
 */
function OneSiteUrl({ url, label }: URLType) {
  if (label === null) return null;

  const getSvg = () => {
    switch (label) {
      case 'instagram':
        return <Instagram size={20} strokeWidth={1.25} />;
      case 'kakaomap':
        return <Map size={20} strokeWidth={1.25} />;
      default:
        return <Home size={20} strokeWidth={1.25} />;
    }
  };

  const handleDeepLink = () => {
    window.location.replace(url);
  };

  return (
    <div className="flex gap-2 items-center">
      <div>{getSvg()}</div>
      <button onClick={handleDeepLink} type="button" rel="noreferrer">
        {label}
      </button>
    </div>
  );
}

export default OneSiteUrl;
