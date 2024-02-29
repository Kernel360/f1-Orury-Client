/* eslint-disable react/no-danger */

'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { TERM_OF_SERVICE } from '@/constants/sign-up/index';
import type { TosProps } from '@/types/sign-up';

function TosModal({ handleOpenModal }: TosProps) {
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
                <div className="mt-3 sm:ml-4 sm:mt-0 text-left h-[60vh] overflow-scroll">
                  <div className="mt-2">
                    <ReactMarkdown
                      className="whitespace-pre-wrap"
                      remarkPlugins={[remarkGfm]}
                    >
                      {TERM_OF_SERVICE.content
                        .replace(/\n/gi, '\n\n')
                        .replace(/\*\*/gi, '@$_%!^')
                        .replace(/@\$_%!\^/gi, '**')
                        .replace(/<\/?u>/gi, '*')}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 pr-4 py-3 flex flex-row-reverse">
              <button
                type="button"
                onClick={handleOpenModal}
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

export default TosModal;
