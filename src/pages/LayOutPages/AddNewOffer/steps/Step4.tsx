import React, { useState } from "react";
import StepBar from "../../../../components/StepBar/StepBar";
import RadioButton from "../../../../components/RadioButton/RadioButton";
import InputFeild from "../../../../components/InputFeild/InputFeild";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { setNextStep } from "../../../../store/portfolio/PortfolioSlice";
import { useFormik } from "formik";
import CustomButton from "../../../../components/Button/CustomButton";
import ValidationError from "../../../../components/ValidationError/ValidationError";
import { Step4Schema } from "../../../../components/schema/Schema";
import { BsCurrencyDollar } from "react-icons/bs";
import {
  handleDateInputChange,
  handleNumericInputChange,
} from "../../../../utils/sideBarMenuItems/helper";
import { Images } from "../../../../assets/Image";

const DefaultValues = {
  raise: "",
  closeDate: "",
};

const Step4 = () => {
  const [selectedValue, setSelectedValue] = useState<string>("yes");
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { nextStep } = useSelector((state: any) => state.portfolio);

  const handlePreviousStep = () => {
    dispatch(setNextStep(3));
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleDateInputChange(e, formik.handleChange);
  };

  const handleNumaricValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleNumericInputChange(e, formik.handleChange);
  };

  const formik = useFormik({
    initialValues: DefaultValues,
    validationSchema: Step4Schema,
    onSubmit: (values) => {
      const { closeDate, raise } = values;
      let newData = {
        closeDate,
        raise,
        selectedValue,
      };
      console.log("values", newData);
      dispatch(setNextStep(5));
    },
  });

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <div className="fleex w-full px-5">
        <div className="flex w-full justify-between ">
          <h2 className="text-textPrimary font-poppins font-medium md:text-xl text-sm leading-10">
            Create New Deal
          </h2>
          <p className="font-poppins font-light md:text-sm text-[10px] text-textPrimary leading-10">
            Raise Info - Step 4
          </p>
        </div>
        <StepBar />
        <form onSubmit={formik.handleSubmit} className="my-10">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 my-6">
            <div>
              <InputFeild
                label="How much are you trying to raise?"
                placeholder="1,000,000.00"
                name="raise"
                type="text"
                value={formik.values.raise}
                onChange={handleNumaricValues}
                searchIcon={<BsCurrencyDollar color="#66686e" />}
              />
              <ValidationError
                touched={formik.touched.raise}
                error={formik.errors.raise}
              />
            </div>
            <div>
              <InputFeild
                label="Estimated Date"
                placeholder="YYYY-MM-DD"
                name="closeDate"
                type="date"
                value={formik.values.closeDate}
                onChange={handleDateChange}
                min={new Date().toISOString().split("T")[0]}
                max="2123-12-31"
              />
              <ValidationError
                touched={formik.touched.closeDate}
                error={formik.errors.closeDate}
              />
            </div>
          </div>
          <div className="my-6">
            <p className="font-poppins font-medium md:text-base text-sm text-textPrimary leading-10 ">
              Make offering visible on opportunities page?
            </p>
            <div className="mt-4 flex gap-5">
              <RadioButton
                id="radio-1"
                name="yes"
                value="yes"
                checked={selectedValue === "yes"}
                onChange={handleRadioChange}
                label="Yes"
              />
              <RadioButton
                id="radio-2"
                name="no"
                value="no"
                checked={selectedValue === "no"}
                onChange={handleRadioChange}
                label="No"
              />
            </div>
            <div className="flex items-center gap-4 mt-12 md:ml-6 ml-0 md:px-0 px-4">
              <CustomButton
                title="Back"
                bgColor={false}
                width="200px"
                handleChange={handlePreviousStep}
                disable={nextStep === 1}
              />
              <CustomButton
                title="Next"
                bgColor={true}
                width="200px"
                disable={nextStep === 5}
              />
            </div>
          </div>
        </form>
        <div className="flex w-full justify-end items-center mt-5 h-full">
          <img
            src={Images.authLogo}
            alt="logo"
            className="object-contain h-20 "
          />
        </div>
      </div>
    </>
  );
};

export default Step4;
