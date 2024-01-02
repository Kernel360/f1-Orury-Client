'use client';

import SearchBar from '@/app/service/map/_components/map/SearchBar';
import BottomSheetContainer from '@/app/service/map/_components/map/BottomSheetContainer';
import SearchResultModal from '@/app/service/map/_components/map/SearchResultModal';
import KakaoBackGroundMap from '@/app/service/map/_components/map/KakaoBackGroundMap';
import ImageSliderModal from '@/app/_components/modal/ImageSliderModal';
import ImageModal from '@/app/_components/modal/ImageModal';
import useMap from '@/hooks/map/useMap';
import ReviewModal from '@/app/service/map/_components/Review/ReviewModal';

function Page() {
  const M = useMap();
  return (
    <div className="h-full relative">
      <ReviewModal
        position="right"
        isOpen={M.isReviewModalOpen}
        onCloseModal={M.onReviewModalClose}
        handleImageOpen={M.handleImageOpen}
      />
      {M.isImageModalOpen && (
        <ImageModal
          image={M.imageModalUrl}
          onCloseModal={M.handleImageClosed}
        />
      )}
      {M.carouselModalIsOpen && (
        <ImageSliderModal
          images={M.carouselImages}
          onCloseModal={M.handleCarouselClosed}
        />
      )}
      <KakaoBackGroundMap
        mapInfo={M.mapInfo}
        positionList={M.searchResult.item}
        handleMovePosition={M.handleMovePosition}
      />
      <SearchBar
        isSearching={M.isSearching}
        onSearchingFocus={M.onSearchingFocus}
      />
      <SearchResultModal
        searchResult={M.searchResult}
        isSearching={M.isSearching}
        onSearchingBlur={M.onSearchingBlur}
        handleMovePosition={M.handleMovePosition}
        handleCarouselOpen={M.handleCarouselOpen}
      />
      <BottomSheetContainer
        isSheetOpen={M.isBottomSheetOpen}
        selectMarkerId={M.selectMarkerId}
        onDisMiss={M.onDisMiss}
        handleImageOpen={M.handleImageOpen}
        handleReviewOpen={M.handleReviewModalOpen}
      />
    </div>
  );
}

export default Page;
