interface ModalProps {
  title: string;
  content: string;
  okContent: string;
  cancelHandler: () => void;
  okHandler: () => void;
}

function Modal({
  title,
  content,
  cancelHandler,
  okHandler,
  okContent,
}: ModalProps) {
  return (
    <div
      className="relative z-20"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-grey-500 bg-opacity-80 transition-opacity" />
      <div className="fixed inset-0 z-20 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg min-w-[320px]">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-4 w-12 flex-shrink-0 justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                  <svg
                    className="h-6 w-6 text-warning"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    className="text-base font-semibold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    {title}
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 whitespace-pre-wrap">
                      {content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 pr-4 py-3 flex flex-row-reverse">
              <button
                type="button"
                onClick={okHandler}
                className="inline-flex w-auto justify-center rounded-md bg-warning px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
              >
                {okContent}
              </button>
              <button
                type="button"
                onClick={cancelHandler}
                className="inline-flex w-auto justify-center rounded-md bg-white px-5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mr-3"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
