import React, { useEffect, useState } from "react";
import StepBar from "../../../../components/StepBar/StepBar";
import DropDown from "../../../../components/Header/DropDown";
import RadioButton from "../../../../components/RadioButton/RadioButton";
import CustomButton from "../../../../components/Button/CustomButton";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { setNextStep } from "../../../../store/portfolio/PortfolioSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import ValidationError from "../../../../components/ValidationError/ValidationError";
import AddSupplierModal from "../../../../components/AddSupplier/AddSupplierModal";
import { Images } from "../../../../assets/Image";
import {
  useHomePageSelector,
  usePortfolioPageSelector,
} from "../../../../hooks/selectors/useSelectorHook";

const DefaultValues = {
  supplier: "",
};

const Step1 = () => {
  const [selectedValue, setSelectedValue] = useState<string>("deal");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectValue, setSelectValue] = useState("");
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { nextStep } = usePortfolioPageSelector();
  const { sponsers } = useHomePageSelector();
  const { data } = (sponsers && sponsers) || {};

  useEffect(() => {
    if (selectValue) {
      formik.setFieldValue("supplier", selectValue);
      formik.validateField("supplier");
    }
  }, [selectValue]);

  const formik = useFormik({
    initialValues: DefaultValues,
    validationSchema: "",
    onSubmit: (values) => {
      console.log("values", values);
      dispatch(setNextStep(2));
    },
  });

  const handleSelectValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectValue(e.target.value);
  };

  const handlePreviousStep = () => {
    dispatch(setNextStep(1));
  };

  const handleChnage = () => {
    setIsOpenModal((prev: boolean) => !prev);
  };
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <div className="w-full px-5">
        <div className="flex w-full justify-between ">
          <h2 className="text-textPrimary font-poppins font-medium md:text-xl text-sm leading-10">
            Create New Offering
          </h2>
          <p className="font-poppins font-light md:text-sm text-[10px] text-textPrimary leading-10">
            Offering Setup - Step 1
          </p>
        </div>
        <StepBar />
        <form onSubmit={formik.handleSubmit}>
          <div className="lg:w-[55%] md:w-[70%] w-full">
            <label className="font-poppins font-normal text-base text-textPrimary leading-10">
              Select Supplier
            </label>
            <DropDown
              isOffer={false}
              title="Select Supplier from Dropdown"
              width="100%"
              dropDownData={data}
              name="supplier"
              onSelect={handleSelectValue}
              value={selectValue}
            />
            <ValidationError
              touched={formik.touched.supplier}
              error={formik.errors.supplier}
            />
          </div>
          <p
            onClick={handleChnage}
            className="font-poppins cursor-pointer font-normal pb-5 md:text-sm text-xs text-textPrimary leading-10 mt-3 underline"
          >
            Don't see your supplier? Set it Up here.
          </p>
          <p className="font-poppins font-medium md:text-base text-sm text-textPrimary leading-10 ">
            Is this Offering a deal or an investment?
          </p>
          <div className="mt-4">
            <RadioButton
              id="radio-1"
              name="deal"
              value="deal"
              checked={selectedValue === "deal"}
              onChange={handleRadioChange}
              label="Deal (fund is looking to raise capital through soft commits)"
            />
            <RadioButton
              id="radio-2"
              name="investment"
              value="investment"
              checked={selectedValue === "investment"}
              onChange={handleRadioChange}
              label="Investment (fund has already invested capital in this opportunity)"
            />
          </div>
          <div className="flex items-center gap-4 mt-12 md:ml-6 ml-0 md:px-0 px-4">
            <CustomButton
              title="Back"
              bgColor={false}
              width="200px"
              handleChange={handlePreviousStep}
            />

            <CustomButton
              title="Next"
              bgColor={true}
              width="200px"
              handleChange={() => console.log()}
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
      <AddSupplierModal
        header="Add Supplier"
        isModalOpen={isOpenModal}
        toggleModal={handleChnage}
      />
    </>
  );
};

export default Step1;
