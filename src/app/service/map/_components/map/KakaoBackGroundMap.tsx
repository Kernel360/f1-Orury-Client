'use client';

import React from 'react';
import {
  Map,
  MapMarker,
  MarkerClusterer,
  useKakaoLoader,
} from 'react-kakao-maps-sdk';
import type { KakaoBackGroundMapProps } from '@/types/map/BottomSheetProps';
import type { OneSearchKeywordType } from '@/types/map/map';

/**
 * @description 맵으로서 해당 도메인에서는 뒷배경에 위치하고 있습니다.
 * @param positionList 기존에 작성된 marker 값들을 가져와서 보여줍니다. 해당 좌표에 마커를 등록하기 위해 가져옵니다.
 * @param handleMovePosition 마커를 눌렀을 시에 해당 마커로 이동시키기 위해서 사용합니다.
 * @param mapInfo 현재 맵의 중심 좌표 값을 간직하고 있습니다.
 */
function KakaoBackGroundMap({
  positionList,
  handleMovePosition,
  mapInfo,
}: KakaoBackGroundMapProps) {
  useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_KAKAO_APP_KEY,
    libraries: ['clusterer', 'services'],
  });

  const onMovePosition = (item: OneSearchKeywordType) => {
    handleMovePosition(item);
  };

  return (
    <div className="h-full-size-omit-nav relative z-10">
      <Map
        draggable
        center={mapInfo.center}
        isPanto={mapInfo.isPanto}
        style={{
          width: '100%',
          height: '100%',
        }}
        level={3}
      >
        <MarkerClusterer averageCenter minLevel={10}>
          {positionList.length !== 0
            ? positionList.map(marker => (
              <MapMarker
                onClick={() => onMovePosition(marker)}
                key={`${marker.position.lat}-${marker.position.lng}`}
                position={marker.position}
              />
            ))
            : null}
        </MarkerClusterer>
      </Map>
    </div>
  );
}

export default KakaoBackGroundMap;
