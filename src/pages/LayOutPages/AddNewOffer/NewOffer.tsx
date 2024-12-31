import { useEffect } from "react";
import Header from "../../../components/Header";
import InnerLayOut from "../../../components/InnerLayOut/InnerLayOut";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import { useDispatch, useSelector } from "react-redux";
import Step6 from "./steps/Step6";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { getAllSponsers } from "../../../store/home/HomeAction";

const NewOffer = () => {
  const { nextStep } = useSelector((state: any) => state.portfolio);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  useEffect(() => {
    dispatch(getAllSponsers());
  }, []);

  return (
    <>
      <Header sideBarOpen={false} setSidebarOpen={() => console.log("")} />
      <div className=" h-max  justify-center  bg-[#F0F0F1] rounded-[20px] flex  px-2 lg:pr-12 pr-2 pb-12 ">
        <div className="flex flex-col  lg:w-3/4 md:w-[90%] w-full mt-12">
          <InnerLayOut>
            <div className="w-full">
              {nextStep === 1 && <Step1 />}
              {nextStep === 2 && <Step2 />}
              {nextStep === 3 && <Step3 />}
              {nextStep === 4 && <Step4 />}
              {nextStep === 5 && <Step5 />}
              {nextStep === 6 && <Step6 />}
            </div>
          </InnerLayOut>
        </div>
      </div>
    </>
  );
};

export default NewOffer;
