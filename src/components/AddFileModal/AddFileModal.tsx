import Modal from "../Modals/Modal";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  header: string;
  type?: string;
  setImages: any;
  images: string[] | string;
  maxFile: number;
}
const FileUploadModal = ({
  isOpen,
  closeModal,
  header,
  setImages,
  images,
  maxFile,
}: Props) => {
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const filesPreview = files.map((file) => URL.createObjectURL(file));
    if (maxFile === 1) {
      setImages(filesPreview);
    } else {
      setImages((prevImages: string[]) => [...prevImages, ...filesPreview]);
    }
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} header={header}>
      <div className="bg-transparent bg-opacity-60 z-10">
        <div className="p-4 bg-white m-auto rounded-lg">
          <div className="p-5 relative border-4 border-dotted border-gray-300 rounded-lg">
            <svg
              className="text-indigo-500 w-24 mx-auto mb-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            {images.length >= maxFile ? (
              <div className="flex flex-col items-center text-center">
                <label>
                  <div className="bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">
                    You can't upload more than {maxFile}{" "}
                    {maxFile > 1 ? "images" : "image"}
                  </div>
                </label>
                {/* <p className="bg-gray w-full mt-2 flex pl-4">{images.name}</p> */}
              </div>
            ) : (
              <div className="flex flex-col items-center text-center">
                <label>
                  <input
                    className="text-sm cursor-pointer w-36 hidden"
                    type="file"
                    onChange={handleFile}
                    multiple={maxFile > 1}
                  />
                  <div className="bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">
                    Select
                  </div>
                </label>
                <div className="text-indigo-500 uppercase mt-2">
                  or drop files here
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default FileUploadModal;
