'use client';

import Image, { StaticImageData } from 'next/image';
import * as D from '@/app/_components/ui/dropdown-menu';
import defaultImage from '$/images/defaultUserProfile.jpg';
import ModifyInput from '@/app/_components/common/ModifyInput';

import { useSWRConfig } from 'swr';
import { COLOR } from '@/styles/color';
import { useRef, useState } from 'react';
import { Camera, Pencil } from 'lucide-react';
import type { ProfileProps } from '@/types/user';
import { getFormData } from '@/utils/getFormData';
import { useToast } from '@/app/_components/ui/use-toast';
import { editProfileImage } from '@/app/service/user/api/editProfileImage';

function Profile({ ...props }: ProfileProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { primary } = COLOR;
  const { profile_image, nickname, email, id } = props;
  const { toast } = useToast();
  const { mutate } = useSWRConfig();

  const [isToggled, setIsToggled] = useState(false);
  const [userNickname, setUserNickName] = useState(nickname);
  const [profileImage, setProfileImage] = useState<string | StaticImageData>(
    profile_image,
  );

  const clearCache = () => {
    mutate(() => true, undefined, { revalidate: false });
  };

  const handleClick = () => {
    setIsToggled(isToggled => !isToggled);
  };

  const handleChangeButtonClick = () => {
    fileInputRef.current?.click();
  };

  // 프로필 이미지를 특정 이미지로 변경 핸들러 함수 (기본 이미지 => 특정 이미지)
  const handleProfileImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { files } = event.target;

    if (files) {
      const targetImage = files[0];
      const formData = getFormData({ images: [targetImage] });

      setProfileImage(URL.createObjectURL(targetImage));
      const message = await editProfileImage(formData);

      clearCache();

      // 더미 값 설정
      event.target.value = '';

      toast({ variant: 'success', description: message, duration: 2000 });
    }
  };

  // 프로필 이미지를 기본 이미지로 변경 핸들러 함수 (특정 이미지 => 기본 이미지)
  const handleChangeDefaultImage = async () => {
    setProfileImage(defaultImage);
    const message = await editProfileImage();

    clearCache();

    toast({ variant: 'success', description: message });
  };

  return (
    <section className="flex flex-col items-center gap-4 bg-white p-4 shadow-xl">
      <div className="relative">
        <div className="w-[7.5rem] h-[7.5rem]">
          <Image
            src={profileImage}
            alt="프로필 이미지"
            quality={100}
            fill
            priority
            className="rounded-full"
          />
        </div>

        <label
          htmlFor="photo"
          className="flex justify-center items-center w-8 h-8 absolute right-0 bottom-0 bg-purple-200 rounded-full cursor-pointer"
        >
          <D.DropdownMenu>
            <D.DropdownMenuTrigger>
              <Camera
                size={24}
                stroke={COLOR.grey200}
                strokeWidth={1.5}
                fill={COLOR.primary}
              />
            </D.DropdownMenuTrigger>
            <D.DropdownMenuContent className="bg-white">
              <D.DropdownMenuLabel className="text-grey-600 text-xs boder-b border-b-2">
                프로필 이미지 변경
              </D.DropdownMenuLabel>
              <D.DropdownMenuSeparator />
              <D.DropdownMenuItem onClick={handleChangeButtonClick}>
                프로필 이미지 변경하기
              </D.DropdownMenuItem>
              <D.DropdownMenuItem onClick={handleChangeDefaultImage}>
                기본 이미지로 변경
              </D.DropdownMenuItem>
            </D.DropdownMenuContent>
          </D.DropdownMenu>
        </label>
      </div>

      <input
        type="file"
        id="photo"
        accept="image/*"
        onChange={handleProfileImageChange}
        className="hidden"
        ref={fileInputRef}
      />

      <button
        className="flex flex-col items-center"
        type="button"
        onClick={handleClick}
      >
        <div className={`${isToggled ? 'hidden' : 'block'}`}>
          <div className="flex gap-2 justify-center">
            <span className="font-bold ml-6">{userNickname}</span>
            <span className="text-grey-500">{`#${id}`}</span>
            <Pencil
              size={16}
              color={primary}
              strokeWidth={2.5}
              className="mt-1"
            />
          </div>
          <span className="font-light text-grey-500">{email}</span>
        </div>
      </button>

      <ModifyInput
        inputTitle="닉네임"
        value={userNickname}
        setValue={setUserNickName}
        isToggled={isToggled}
        setIsToggled={setIsToggled}
        originNickname={nickname}
      />
    </section>
  );
}

export default Profile;
