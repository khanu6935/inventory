// import React from "react";
// import { Images } from "../../assets/Image";
import { IoLocationOutline } from "react-icons/io5";
import CustomButton from "../Button/CustomButton";

interface Props {
  image: string;
  title: string;
  location: string;
  target: string;
  time: string;
  remaining: string;
  onClick: any;
}

const Residences = ({
  image,
  location,
  remaining,
  target,
  time,
  title,
  onClick,
}: Props) => {
  return (
    <>
      <div className="bg-[#F0F0F1] md:h-[463px] h-max pb-5 md:w-[250px] w-full rounded-2xl">
        <div className="p-1.5 flex justify-center">
          <img src={image} alt="" className="object-contain " />
        </div>
        <div className="px-3 mt-4 ">
          <h2 className="font-poppins font-medium text-textSecondry text-lg">
            {title}
          </h2>
          <p className="flex items-center gap-2 text-sm font-poppins font-normal text-textSecondry pt-2">
            <span>
              <IoLocationOutline />
            </span>
            {location}
          </p>
          <div className="flex justify-between items-center mt-4">
            <p className="font-poppins font-normal text-[13px] text-textSecondry">
              Target Return
            </p>
            <p className="font-poppins font-normal text-[13px] text-textSecondry">
              {target}
            </p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="font-poppins font-normal text-[13px] text-textSecondry">
              Estimated Hold Time{" "}
            </p>
            <p className="font-poppins font-normal text-[13px] text-textSecondry">
              {time}
            </p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="font-poppins font-normal text-[13px] text-textSecondry">
              Remaining Allocation
            </p>
            <p className="font-poppins font-normal text-[13px] text-textSecondry">
              {remaining}
            </p>
          </div>
        </div>
        <div className="flex w-full items-center gap-3 justify-center mt-4">
          <CustomButton
            title=" View Detail"
            bgColor={true}
            handleChange={onClick}
            width="200px"
          />
        </div>
      </div>
    </>
  );
};

export default Residences;
