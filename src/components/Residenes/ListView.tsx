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

const ListView = ({
  image,
  location,
  remaining,
  target,
  title,
  onClick,
}: Props) => {
  return (
    <>
      <div className="flex gap-4 items-center md:w-[30%] w-full">
        <img src={image} alt="image" className="h-16 w-16 rounded-xl" />
        <div>
          <h2 className="font-poppins font-medium text-textSecondry text-lg">
            {title}
          </h2>
          <p className="flex items-center gap-2 text-sm font-poppins font-normal text-textSecondry pt-2">
            <span>
              <IoLocationOutline />
            </span>
            {location}
          </p>
        </div>
      </div>
      <div className="flex md:flex-row justify-between md:px-6 px-0 md:w-[50%] w-full flex-col mt-4">
        <div className="flex md:flex-col flex-row md:justify-start justify-between  w-full">
          <h2 className="font-poppins font-medium text-textSecondry text-lg">
            Target Return
          </h2>
          <p className="flex items-center gap-2 text-sm font-poppins font-normal text-textSecondry pt-2">
            {target}
          </p>
        </div>
        <div className="flex md:flex-col flex-row md:justify-start justify-between  w-full">
          <h2 className="font-poppins font-medium text-textSecondry text-lg">
            Remaining Allocation
          </h2>
          <p className="flex items-center gap-2 text-sm font-poppins font-normal text-textSecondry pt-2">
            {remaining}
          </p>
        </div>
      </div>
      <div className="md:w-[20%] w-full flex py-3  gap-3 md:justify-end justify-center md:mt-0 mt-3 ">
        <CustomButton
          title=" View Detail"
          bgColor={true}
          handleChange={onClick}
          width="150px"
        />
      </div>
    </>
  );
};

export default ListView;
