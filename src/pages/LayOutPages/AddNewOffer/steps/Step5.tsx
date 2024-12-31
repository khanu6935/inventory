import React, { useState } from "react";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { setNextStep } from "../../../../store/portfolio/PortfolioSlice";
import { useFormik } from "formik";
import CustomButton from "../../../../components/Button/CustomButton";
import StepBar from "../../../../components/StepBar/StepBar";
import InputFeild from "../../../../components/InputFeild/InputFeild";
import DropDown from "../../../../components/Header/DropDown";
import RadioButton from "../../../../components/RadioButton/RadioButton";
import ValidationError from "../../../../components/ValidationError/ValidationError";
import { Step5Schema } from "../../../../components/schema/Schema";
import ResidenceModal from "../../Opportunities/Components/ResidenceModal";
import { Images } from "../../../../assets/Image";

const data = [
  "Develop a detail project plain",
  "Secure client requirment",
  "Define functional requiremnts",
  "Design application system",
];

const DefaultValues = {
  sampleDeal: "",
  lookUpDate: "",
  supplier: "",
  DEquity: "",
  health: "",
  duration: "",
  address: "",
  city: "",
};

const item = {
  image: Images.building1,
  title: "View Residences",
  location: "Miami, FL",
  target: "8%",
  Time: "2 Years",
  remaining: "$2,500,000",
};

const Step5 = () => {
  const [selectedValue, setSelectedValue] = useState<string>("yes");
  const [residenceDetail, setResidenceDetail] = useState<any>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { nextStep } = useSelector((state: any) => state.portfolio);

  const formik = useFormik({
    initialValues: DefaultValues,
    validationSchema: Step5Schema,
    onSubmit: (values) => {
      console.log("values", values);
      dispatch(setNextStep(6));
    },
  });

  const handlePreviousStep = () => {
    dispatch(setNextStep(5));
  };

  const toggleModal = (item: any) => {
    setIsModalOpen(!isModalOpen);
    setResidenceDetail(item);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleSupplierValue = (item: any) => {
    formik.setFieldValue("supplier", item.target.value);
    formik.setFieldValue("DEquity", item.target.value);
    formik.setFieldValue("health", item.target.value);
    formik.setFieldValue("duration", item.target.value);
  };

  return (
    <>
      <div className="w-full lg:max-h-[80vh] max-h-fit py-6  overflow-y-auto px-5">
        <div className="flex items-center gap-6 pl-5 mb-10">
          <p className="font-poppins font-light md:text-base text-sm text-textPrimary leading-10">
            Show:
          </p>
          <CustomButton title="Debit" bgColor={true} width="150px" />
        </div>
        <div className="fleex w-full px-5">
          <div className="flex w-full justify-between ">
            <h2 className="text-textPrimary font-poppins font-medium md:text-xl text-sm leading-10">
              Sample Deal
            </h2>
            <p className="font-poppins font-light md:text-sm text-[10px] text-textPrimary leading-10">
              Raise Info - Step 5
            </p>
          </div>
          <StepBar />
          <div className="flex justify-between flex-wrap gap-4 my-6">
            <div className="flex items-center md:justify-start justify-center pt-2 flex-wrap gap-4">
              <CustomButton
                title="Offering Info"
                bgColor={true}
                width="150px"
              />
            </div>
            <div className="flex md:justify-start justify-center md:items-start items-center md:w-auto w-full flex-col">
              <p className="font-poppins font-light pb-2 text-end w-full md:text-sm text-[10px] text-textPrimary leading-10">
                Sample Deal 01/07/2024
              </p>
              <CustomButton
                title="View Investor View"
                bgColor={false}
                width="200px"
                handleChange={() => toggleModal(item)}
              />
            </div>
          </div>
          <hr />
          <form onSubmit={formik.handleSubmit}>
            <h2 className="text-buttonPrimary font-poppins font-semibold md:text-xl text-sm  mt-4">
              Basic Information
            </h2>
            <div className="mb-4 mt-1 flex gap-6">
              <div className="w-2 bg-buttonPrimary  rounded-full"></div>
              <div className="w-full">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6 my-6">
                  <div>
                    <InputFeild
                      label="Deal Name"
                      placeholder="Sample Deal"
                      name="sampleDeal"
                      type="text"
                      value={formik.values.sampleDeal}
                      onChange={formik.handleChange}
                    />
                    <ValidationError
                      touched={formik.touched.sampleDeal}
                      error={formik.errors.sampleDeal}
                    />
                  </div>
                  <div>
                    <InputFeild
                      label="Lookup Code"
                      placeholder="sampledeal07072024"
                      name="lookUpDate"
                      type="text"
                      value={formik.values.lookUpDate}
                      onChange={formik.handleChange}
                    />
                    <ValidationError
                      touched={formik.touched.lookUpDate}
                      error={formik.errors.lookUpDate}
                    />
                  </div>
                  {/* ///////////DropDowns/////////////// */}
                  <div className="flex flex-col gap-2">
                    <label className="font-poppins font-normal text-base text-textPrimary">
                      Supplier
                    </label>
                    <DropDown
                      title="Supplier"
                      width="100%"
                      isOffer={true}
                      dropDownData={data}
                      name="supplier"
                      onSelect={handleSupplierValue}
                      value={formik.values.supplier}
                    />
                    <ValidationError
                      touched={formik.touched.supplier}
                      error={formik.errors.supplier}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-poppins font-normal text-base text-textPrimary">
                      Assest Class
                    </label>
                    <DropDown
                      title="D-Equity"
                      width="100%"
                      isOffer={true}
                      dropDownData={data}
                      name="DEquity"
                      onSelect={handleSupplierValue}
                      value={formik.values.DEquity}
                    />
                    <ValidationError
                      touched={formik.touched.DEquity}
                      error={formik.errors.DEquity}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-poppins font-normal text-base text-textPrimary">
                      Deal Health
                    </label>
                    <DropDown
                      title="A-Healthy"
                      width="100%"
                      isOffer={true}
                      dropDownData={data}
                      name="health"
                      onSelect={handleSupplierValue}
                      value={formik.values.health}
                    />
                    <ValidationError
                      touched={formik.touched.health}
                      error={formik.errors.health}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-poppins font-normal text-base text-textPrimary">
                      Investment Duration
                    </label>
                    <DropDown
                      title="37-60 Months"
                      width="100%"
                      isOffer={true}
                      dropDownData={data}
                      name="duration"
                      onSelect={handleSupplierValue}
                      value={formik.values.duration}
                    />
                    <ValidationError
                      touched={formik.touched.duration}
                      error={formik.errors.duration}
                    />
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-buttonPrimary font-poppins font-semibold md:text-xl text-sm  mt-12">
              Address
            </h2>
            <div className="mb-4 mt-1 flex gap-6">
              <div className="w-2 bg-buttonPrimary  rounded-full"></div>
              <div className="flex flex-col w-full">
                <div className="my-6">
                  <p className="font-poppins font-medium md:text-base text-sm text-textPrimary leading-10 ">
                    Does this investment has physical address?
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
                </div>
                <div className="w-full">
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-6 ">
                    <div>
                      <InputFeild
                        label="Address"
                        placeholder="Enter Address"
                        name="address"
                        type="text"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                      />
                      <ValidationError
                        touched={formik.touched.address}
                        error={formik.errors.address}
                      />
                    </div>
                    <div>
                      <InputFeild
                        label="City"
                        placeholder="San Antonio"
                        name="city"
                        type="text"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                      />
                      <ValidationError
                        touched={formik.touched.city}
                        error={formik.errors.city}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-12 md:ml-6 ml-0 md:px-0 px-4">
              <CustomButton
                title="Cancel"
                bgColor={false}
                width="200px"
                handleChange={handlePreviousStep}
                disable={nextStep === 1}
              />
              <CustomButton
                title="Next"
                bgColor={true}
                width="200px"
                disable={nextStep === 6}
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
      </div>
      {/* ////////////////////////////////Modal to view Residences//////////////////////// */}
      <ResidenceModal
        isModalOpen={isModalOpen}
        residenceDetail={residenceDetail}
        toggleModal={toggleModal}
      />
    </>
  );
};

export default Step5;
