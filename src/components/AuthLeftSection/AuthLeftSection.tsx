import { Images } from "../../assets/Image";

const AuthLeftSection = () => {
  return (
    <>
      <div className="w-1/2 p-4 md:block hidden py-6 h-full">
        <div className=" flex  justify-center  overflow-hidden w-full h-full items-center">
          <img
            src={Images.building}
            alt=""
            className="object-cover rounded-[24px] w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default AuthLeftSection;
