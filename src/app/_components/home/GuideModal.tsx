import { COLOR } from '@/styles/color';
import { Info } from 'lucide-react';
import guide_ios_1 from '$/images/guide/guide-ios-1.png';
import guide_web_1 from '$/images/guide/guide-web-1.png';
import guide_and_1 from '$/images/guide/guide-and-1.png';

import * as A from '@/app/_components/ui/accordion';
import Image from 'next/image';
import Link from 'next/link';

function GuideModal({ cancelHandler }: { cancelHandler: () => void }) {
  return (
    <div
      className="relative z-[5000]"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-grey-500 bg-opacity-80 transition-opacity" />
      <div className="fixed inset-0 z-20 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg min-w-[320px]">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-4 w-12 flex-shrink-0 justify-center rounded-xlll sm:mx-0 sm:h-10 sm:w-10">
                  <Info color={COLOR.primary} />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                  <h3
                    className="text-base font-semibold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    앱 설치 가이드
                  </h3>
                  <div className="mt-2">
                    <A.Accordion type="single" collapsible className="w-full">
                      <A.AccordionItem value="item-1">
                        <A.AccordionTrigger>크롬 브라우저</A.AccordionTrigger>
                        <A.AccordionContent>
                          <span>1. 크롬(Chrome)에서 </span>
                          <Link
                            href="https://orury.com"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="text-blue-800 underline-offset-3 underline"
                          >
                            오루리 사이트
                          </Link>
                          <span>에 접속합니다.</span>
                          <br />
                          <span>
                            2. 주소창 우측에 위치한 앱 다운로드 아이콘을
                            클릭해줍니다.
                          </span>
                          <Image
                            src={guide_web_1}
                            alt="guide_web_1"
                            width={400}
                          />
                          3.
                          <b>설치 </b>
                          버튼을 클릭하여 추가합니다.
                        </A.AccordionContent>
                      </A.AccordionItem>
                      <A.AccordionItem value="item-2">
                        <A.AccordionTrigger>IOS</A.AccordionTrigger>
                        <A.AccordionContent>
                          <span>1. 사파리에서 </span>
                          <Link
                            href="https://orury.com"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="text-blue-800 underline-offset-3 underline"
                          >
                            오루리 사이트
                          </Link>
                          <span>에 접속합니다.</span>
                          <br />
                          <span>
                            2. 하단의 버튼을 클릭하여 메뉴를 열어줍니다.
                          </span>
                          <Image
                            src={guide_ios_1}
                            alt="guide_ios_1"
                            width={400}
                          />
                          3.
                          <b>홈 화면에 추가 (Add to Home Screen) </b>
                          버튼을 클릭하여 추가합니다.
                        </A.AccordionContent>
                      </A.AccordionItem>
                      <A.AccordionItem value="item-3">
                        <A.AccordionTrigger>안드로이드</A.AccordionTrigger>
                        <A.AccordionContent>
                          <span>1. 크롬 앱에서 </span>
                          <Link
                            href="https://orury.com"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="text-blue-800 underline-offset-3 underline"
                          >
                            오루리 사이트
                          </Link>
                          <span>에 접속합니다.</span>
                          <br />
                          <span>2. 상단의 메뉴 버튼을 클릭해줍니다.</span>
                          <Image
                            src={guide_and_1}
                            alt="guide_and_1"
                            width={400}
                          />
                          3. 메뉴 항목 중 앱 설치 메뉴를 클릭해줍니다.
                          <b>앱 설치 </b>
                          버튼을 클릭하여 설치합니다.
                        </A.AccordionContent>
                      </A.AccordionItem>
                    </A.Accordion>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 pr-4 py-3 flex flex-row-reverse">
              <button
                type="button"
                onClick={cancelHandler}
                className="inline-flex w-auto justify-center rounded-xl bg-white px-5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900 hover:bg-gray-50 mr-3"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuideModal;
