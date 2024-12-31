import React, { useEffect, useState } from "react";
import StepBar from "../../../../components/StepBar/StepBar";
import InputFeild from "../../../../components/InputFeild/InputFeild";
import RadioButton from "../../../../components/RadioButton/RadioButton";
import DropDown from "../../../../components/Header/DropDown";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { setNextStep } from "../../../../store/portfolio/PortfolioSlice";
import { useFormik } from "formik";
import CustomButton from "../../../../components/Button/CustomButton";
import ValidationError from "../../../../components/ValidationError/ValidationError";
import { Step3Schema } from "../../../../components/schema/Schema";
import { Images } from "../../../../assets/Image";
import {
  AssetClass,
  earningPayOut,
  InvestmentDuration,
} from "../../../../utils/DropDownData";

const DefaultValues = {
  interest: "",
  dequity: "",
  estimatedTime: "",
  earningToBePaid: "",
  date: "",
};

const Step3 = () => {
  const [selectedValue, setSelectedValue] = useState<string>("equity");
  const [dequity, setDequity] = useState("");
  const [estimateTime, setEstimateTime] = useState("");
  const [earningPaid, setEarningPaid] = useState("");
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { nextStep } = useSelector((state: any) => state.portfolio);

  const handleDateChange = (e: any) => {
    const inputDate = e.target.value;
    const isValidDateFormat = /^\d{4}-\d{2}-\d{2}$/.test(inputDate);
    if (isValidDateFormat) {
      const yearPart = inputDate.split("-")[0];
      if (yearPart.length > 4) {
        e.target.value = inputDate.substring(0, 4);
      }
    }
    formik.handleChange(e);
  };

  useEffect(() => {
    if (dequity) {
      formik.setFieldValue("dequity", dequity);
    }
    if (estimateTime) {
      formik.setFieldValue("estimatedTime", estimateTime);
    }
    if (earningPaid) {
      formik.setFieldValue("earningToBePaid", earningPaid);
    }
  }, [dequity, estimateTime, earningPaid]);

  const formik = useFormik({
    initialValues: DefaultValues,
    validationSchema: Step3Schema,
    onSubmit: (values) => {
      console.log("values", values);
      dispatch(setNextStep(4));
    },
  });

  const handlePreviousStep = () => {
    dispatch(setNextStep(2));
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  const handleDequity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDequity(event.target.value);
  };
  const handleEstimateTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEstimateTime(event.target.value);
  };
  const handlePaidEarnings = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEarningPaid(event.target.value);
  };

  const filterPaidOutEarning = earningPayOut.filter(
    (item) => item.type === selectedValue
  );

  return (
    <>
      <div className="w-full lg:max-h-[80vh] max-h-fit py-6  overflow-y-auto px-5">
        <div className="flex w-full justify-between ">
          <h2 className="text-textPrimary font-poppins font-medium md:text-xl text-sm leading-10">
            Create New Deal
          </h2>
          <p className="font-poppins font-light md:text-sm text-[10px] text-textPrimary leading-10">
            Earnings Info - Step 3
          </p>
        </div>
        <StepBar />
        <form onSubmit={formik.handleSubmit} className="my-10">
          <div className="my-6">
            <p className="font-poppins font-medium md:text-base text-sm text-textPrimary leading-10 ">
              Investment Type
            </p>
            <div className="mt-4 flex flex-col gap-5">
              <RadioButton
                id="radio-1"
                name="equity"
                value="equity"
                checked={selectedValue === "equity"}
                onChange={handleRadioChange}
                label="Equity (Fund recives capitals gains at sale)"
              />
              <RadioButton
                id="radio-2"
                name="debt"
                value="debt"
                checked={selectedValue === "debt"}
                onChange={handleRadioChange}
                label="Debt (Fund recives Fixed income)"
              />
            </div>
          </div>
          <div>
            <InputFeild
              label="IIR/Interest Rate"
              placeholder="15%-17%"
              name="interest"
              type="text"
              value={formik.values.interest}
              onChange={formik.handleChange}
            />
            <ValidationError
              touched={formik.touched.interest}
              error={formik.errors.interest}
            />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 my-6">
            <div className="flex flex-col gap-2">
              <label className="font-poppins font-normal text-base text-textPrimary">
                Assest Class
              </label>
              <DropDown
                title="D-Equity"
                width="100%"
                isOffer={true}
                dropDownData={AssetClass}
                name="dequity"
                onSelect={handleDequity}
                value={dequity}
              />
              <ValidationError
                touched={formik.touched.dequity}
                error={formik.errors.dequity}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-poppins font-normal  text-base text-textPrimary">
                How long is the investment?
              </label>
              <DropDown
                title="60+ Months"
                width="100%"
                isOffer={true}
                dropDownData={InvestmentDuration}
                name="estimatedTime"
                onSelect={handleEstimateTime}
                value={estimateTime}
              />
              <ValidationError
                touched={formik.touched.estimatedTime}
                error={formik.errors.estimatedTime}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-poppins font-normal  text-base text-textPrimary">
                When will earnings will paid out?
              </label>
              <DropDown
                title="Select"
                width="100%"
                isOffer={true}
                dropDownData={filterPaidOutEarning}
                name="earningToBePaid"
                onSelect={handlePaidEarnings}
                value={earningPaid}
              />
              <ValidationError
                touched={formik.touched.earningToBePaid}
                error={formik.errors.earningToBePaid}
              />
            </div>
            <div>
              <InputFeild
                label="Estimated Date"
                placeholder="YYYY-MM-DD"
                name="date"
                type="date"
                value={formik.values.date}
                onChange={handleDateChange}
                min={new Date().toISOString().split("T")[0]}
                max="2123-12-31"
              />
              <ValidationError
                touched={formik.touched.date}
                error={formik.errors.date}
              />
            </div>
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

export default Step3;
