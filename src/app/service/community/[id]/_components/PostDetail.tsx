import { PostDetailProps } from '@/types/community/post';
import * as C from '@/app/_components/ui/carousel';
import User from '@/app/service/community/_components/User';
import Counts from '@/app/service/community/_components/Counts';
import Image from 'next/image';
import { v4 } from 'uuid';
import { useImagesStore } from '@/store/modal/imageModalStore';

function PostDetail({ ...props }: PostDetailProps) {
  const {
    user_profile_image,
    user_nickname,
    created_at,
    is_like,
    title,
    content,
    like_count,
    comment_count,
    view_count,
    id,
    images,
    category,
  } = props;

  const handleCarouselOpen = useImagesStore(state => state.setModalOpen);

  const onCarouselOpen = () => {
    handleCarouselOpen(images);
  };

  return (
    <div className="flex flex-col gap-4 border-b-4 border-b-grey-200 p-4">
      <User
        user_profile_image={user_profile_image}
        user_nickname={user_nickname}
        created_at={created_at}
        is_like={is_like}
        post_id={id}
      />
      <div className="flex flex-col gap-4">
        <span className="font-bold text-xl">{title}</span>
        <span>{content}</span>
      </div>

      {images.length ? (
        <C.Carousel
          opts={{
            align: 'start',
          }}
          className="mr-[-1rem]"
        >
          <C.CarouselContent className="sm:h-64 sm:w-64 h-32 w-32">
            {images.map((image, index) => (
              <C.CarouselItem key={v4()} className="relative ml-4">
                <Image
                  src={image}
                  alt={`selected-image-${index}`}
                  className="rounded-lg"
                  onClick={onCarouselOpen}
                  fill
                />
              </C.CarouselItem>
            ))}
          </C.CarouselContent>
        </C.Carousel>
      ) : null}

      <div className="flex justify-evenly">
        <Counts
          postId={id}
          likes={like_count}
          comments={comment_count}
          views={view_count}
          size={16}
          isLike={is_like}
          category={category}
        />
      </div>
    </div>
  );
}

export default PostDetail;
