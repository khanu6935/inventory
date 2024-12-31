import React, { useEffect, useState } from "react";
import StepBar from "../../../../components/StepBar/StepBar";
import RadioButton from "../../../../components/RadioButton/RadioButton";
import InputFeild from "../../../../components/InputFeild/InputFeild";
import DropDown from "../../../../components/Header/DropDown";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { setNextStep } from "../../../../store/portfolio/PortfolioSlice";
import CustomButton from "../../../../components/Button/CustomButton";
import { useFormik } from "formik";
import ValidationError from "../../../../components/ValidationError/ValidationError";
import { getValidationSchema } from "../../../../components/schema/Schema";
import { Images } from "../../../../assets/Image";
import Gallry from "../../../../components/GalleryAddIcon/Gallry";
import FileUploadModal from "../../../../components/AddFileModal/AddFileModal";
import { MdOutlineDelete } from "react-icons/md";
import { getCountries } from "../../../../store/home/HomeAction";
import { StatesNames } from "../../../../utils/CountriesData/states";

const DefaultValues = {
  dealName: "",
  lookupCode: "",
  address1: "",
  address2: "",
  city: "",
  zipCode: "",
  country: "",
  state: "",
};

const Step2 = () => {
  const [selectedValue, setSelectedValue] = useState<string>("Yes");
  const [SelectCountry, setSelectCountry] = useState("");
  const [selectState, setSelectState] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const { nextStep } = useSelector((state: any) => state.portfolio);
  const { countries } = useSelector((state: any) => state.HomePage);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  let getCountryList =
    countries && countries?.data.map((country: any) => country.country);

  const getStatesNames = StatesNames.filter(
    (country) => country.country_name === SelectCountry
  );

  let findState = StatesNames.find(
    (item) => item.id === Number(selectState)
  )?.name;

  const data = new FormData();
  images.forEach(({ file }: any) => {
    data.append("file", file);
  });

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  useEffect(() => {
    if (SelectCountry) {
      formik.setFieldValue("country", SelectCountry);
    }
    if (selectState) {
      formik.setFieldValue("state", selectState);
    }
  }, [SelectCountry, selectState]);

  const formik = useFormik({
    initialValues: DefaultValues,
    validationSchema: getValidationSchema(selectedValue),
    onSubmit: (values) => {
      const {
        dealName,
        lookupCode,
        address1,
        address2,
        city,
        country,
        zipCode,
      } = values;
      let withoutAddress = { dealName, lookupCode };
      let withAddress = {
        dealName,
        lookupCode,
        address1,
        address2,
        city,
        country,
        findState,
        zipCode,
      };
      if (selectedValue === "Yes") {
        console.log("restValues", withAddress);
        dispatch(setNextStep(3));
      } else {
        console.log("else part", withoutAddress);
        dispatch(setNextStep(3));
      }
    },
  });

  const handleSelectCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectCountry(e.target.value);
    setSelectState("");
  };

  const handleSelectState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectState(e.target.value);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handlePreviousStep = () => {
    dispatch(setNextStep(1));
  };

  const handleCloseodal = () => {
    setOpenModal((prev) => !prev);
  };

  const hamdleRemoveImages = (indexToRemove: number) => {
    let removedData = images.filter(
      (_, index: number) => index !== indexToRemove
    );
    setImages(removedData);
  };

  return (
    <>
      <div className="w-full lg:max-h-[80vh] max-h-fit py-6  overflow-y-auto px-5">
        <div className="flex w-full justify-between ">
          <h2 className="text-textPrimary font-poppins font-medium md:text-xl text-sm leading-10">
            Create New Deal
          </h2>
          <p className="font-poppins font-light md:text-sm text-[10px] text-textPrimary leading-10">
            Basic Info - Step 2
          </p>
        </div>
        <StepBar />
        <form onSubmit={formik.handleSubmit} className="my-10">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            <div>
              <InputFeild
                label="Deal Name"
                placeholder="Enter Name"
                name="dealName"
                type="text"
                value={formik.values.dealName}
                onChange={formik.handleChange}
              />
              <ValidationError
                touched={formik.touched.dealName}
                error={formik.errors.dealName}
              />
            </div>
            <div>
              <InputFeild
                label="Lookup Code"
                placeholder="Enter Lookup code"
                name="lookupCode"
                type="text"
                value={formik.values.lookupCode}
                onChange={formik.handleChange}
              />
              <ValidationError
                touched={formik.touched.lookupCode}
                error={formik.errors.lookupCode}
              />
            </div>
          </div>
          <div className="my-6 flex  items-center">
            <div className="w-full">
              <p className="font-poppins font-medium md:text-base text-sm text-textPrimary leading-10 ">
                Does this investment has a physical address?
              </p>
              <div className="mt-4 flex gap-5">
                <RadioButton
                  id="radio-1"
                  name="Yes"
                  value="Yes"
                  checked={selectedValue === "Yes"}
                  onChange={handleRadioChange}
                  label="Yes"
                />
                <RadioButton
                  id="radio-2"
                  name="No"
                  value="No"
                  checked={selectedValue === "No"}
                  onChange={handleRadioChange}
                  label="No"
                />
              </div>
            </div>
          </div>

          <div
            className={`grid md:grid-cols-2 grid-cols-1 gap-6 transition-all duration-500 ${
              selectedValue === "Yes"
                ? "opacity-100 max-h-[1000px]"
                : "opacity-0 max-h-0 overflow-hidden"
            }`}
          >
            <div>
              <InputFeild
                label="Address"
                placeholder="Enter Address line 1"
                name="address1"
                type="text"
                value={formik.values.address1}
                onChange={formik.handleChange}
              />
              <ValidationError
                touched={formik.touched.address1}
                error={formik.errors.address1}
              />
            </div>
            <div>
              <InputFeild
                label="Apartment,Suite,etc"
                placeholder="Enter Address line 2"
                name="address2"
                type="text"
                value={formik.values.address2}
                onChange={formik.handleChange}
              />
              <ValidationError
                touched={formik.touched.address2}
                error={formik.errors.address2}
              />
            </div>
            <div>
              <InputFeild
                label="City"
                placeholder="City"
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
            <div className="flex flex-col gap-2">
              <label className="font-poppins font-normal text-base text-textPrimary">
                Country
              </label>
              <DropDown
                title="Country"
                width="100%"
                isOffer={true}
                dropDownData={getCountryList}
                name="country"
                onSelect={handleSelectCountry}
                value={SelectCountry}
              />
              <ValidationError
                touched={formik.touched.country}
                error={formik.errors.country}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-poppins font-normal  text-base text-textPrimary">
                State
              </label>
              <DropDown
                title="State"
                width="100%"
                isOffer={true}
                dropDownData={getStatesNames}
                name="state"
                onSelect={handleSelectState}
                value={selectState}
              />
              <ValidationError
                touched={formik.touched.state}
                error={formik.errors.state}
              />
            </div>

            <div>
              <InputFeild
                label="ZIP Code"
                placeholder="Enter zip code"
                name="zipCode"
                type="text"
                value={formik.values.zipCode}
                onChange={formik.handleChange}
              />
              <ValidationError
                touched={formik.touched.zipCode}
                error={formik.errors.zipCode}
              />
            </div>
          </div>
          <div className="flex w-full lg:flex-row flex-col  items-center gap-8">
            <div className="flex">
              <label
                onClick={handleCloseodal}
                htmlFor="file-upload"
                className="custom-file-upload3"
              >
                <span>
                  <Gallry />
                </span>
                <i className="fas fa-cloud-upload-alt"></i> Upload Images
              </label>
            </div>
            <div className="flex flex-wrap  justify-center items-center gap-4">
              {images &&
                images.map((image: string, index: number) => {
                  return (
                    <div
                      key={index}
                      className="relative w-[134px] h-[134px] mt-3 rounded-lg overflow-hidden"
                    >
                      <img
                        src={image}
                        alt=""
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <span
                        onClick={() => hamdleRemoveImages(index)}
                        className="absolute cursor-pointer inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity rounded-lg"
                      >
                        <MdOutlineDelete size={30} />
                      </span>
                    </div>
                  );
                })}
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
      <FileUploadModal
        closeModal={handleCloseodal}
        isOpen={openModal}
        header={""}
        setImages={setImages}
        images={images}
        maxFile={4}
      />
    </>
  );
};

export default Step2;
