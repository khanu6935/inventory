// import React from "react";
import { RxCross1 } from "react-icons/rx";


interface Props {
  isOpen: boolean;
  onClose: any;
  header: string;
  children: any;
  supplier?: boolean;
}

const Modal = ({ isOpen, onClose, header, children }: Props) => {
  if (!isOpen) return null;
  return (
    <div
      id="default-modal"
      aria-hidden="true"
      className="fixed modal-background  inset-0 z-50 flex items-center justify-center overflow-y-auto"
    >
      <div className="relative p-4 w-full  max-w-max max-h-full">
        <div className="relative bg-white border-y-[6px] border-buttonPrimary rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5  rounded-b-xl rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-textPrimary dark:text-white">
              {header}
            </h3>
            <button
              type="button"
              className="text-gray-400  bg-transparent hover:bg-buttonPrimary hover:text-slate-100 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={onClose}
            >
              <span className="rotate-180">
                <RxCross1 />
              </span>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4">{children}</div>

        </div>
      </div>
    </div>
  );
};

export default Modal;
