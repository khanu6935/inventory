import StepBar from "../../../../components/StepBar/StepBar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { setNextStep } from "../../../../store/portfolio/PortfolioSlice";
import { Images } from "../../../../assets/Image";

const Step6 = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const handlePage = () => {
    dispatch(setNextStep(1));
    navigation("/home");
  };

  return (
    <>
      <div className="fleex w-full px-5">
        <div className="flex w-full justify-between ">
          <h2 className="text-buttonPrimary font-poppins font-medium md:text-xl text-sm leading-10">
            Congratulations
          </h2>
          <p className="font-poppins font-light md:text-sm text-[10px] text-buttonPrimary leading-10">
            Completed
          </p>
        </div>
        <StepBar />
        <div className="flex flex-col gap-4 items-center justify-center">
          <h2 className="text-textPrimary font-poppins font-medium md:text-xl text-sm leading-10">
            You have Successfully added the New Offer
          </h2>
          <p
            onClick={handlePage}
            className="font-poppins cursor-pointer font-light underline md:text-sm text-[10px] text-buttonPrimary leading-10"
          >
            See Offer
          </p>
          <div className="flex w-full justify-center items-center mt-5 h-full">
            <img
              src={Images.authLogo}
              alt="logo"
              className="object-contain h-28 w-52"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Step6;
