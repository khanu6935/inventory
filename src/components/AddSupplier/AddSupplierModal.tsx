import { useFormik } from "formik";
import InputFeild from "../InputFeild/InputFeild";
import Modal from "../Modals/Modal";
import CustomButton from "../Button/CustomButton";
import { SupplierSchema } from "../schema/Schema";
import ValidationError from "../ValidationError/ValidationError";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { CreateSponser, getAllSponsers } from "../../store/home/HomeAction";

interface Props {
  isModalOpen: boolean;
  toggleModal: () => void;
  header: string;
}

const defaultValues = {
  name: "",
  email: "",
  contactNumber: "",
  description: "",
};

const AddSupplierModal = ({ isModalOpen, header, toggleModal }: Props) => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const formik = useFormik({
    initialValues: defaultValues,
    validationSchema: SupplierSchema,
    onSubmit: (values) => {
      dispatch(CreateSponser(values));
      dispatch(getAllSponsers());
      toggleModal();
    },
  });
  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={toggleModal}
        header={header}
        supplier={false}
      >
        <form onSubmit={formik.handleSubmit}>
          <div className="my-6">
            <InputFeild
              label="Name"
              name="name"
              onChange={formik.handleChange}
              placeholder="Enter Supplier name"
              type="text"
              value={formik.values.name}
            />
            <ValidationError
              touched={formik.touched.name}
              error={formik.errors.name}
            />
          </div>
          <div className="my-6">
            <InputFeild
              label="Email"
              name="email"
              onChange={formik.handleChange}
              placeholder="Enter Supplier email"
              type="text"
              value={formik.values.email}
            />
            <ValidationError
              touched={formik.touched.email}
              error={formik.errors.email}
            />
          </div>
          <div className="my-6">
            <InputFeild
              label="Phone number"
              name="contactNumber"
              onChange={formik.handleChange}
              placeholder="Enter Supplier phone"
              type="text"
              value={formik.values.contactNumber}
            />
            <ValidationError
              touched={formik.touched.contactNumber}
              error={formik.errors.contactNumber}
            />
          </div>
          <div className="my-6">
            <label className="font-poppins font-normal text-base text-textPrimary">
              Discription
            </label>
            <textarea
              className="border-[1px] pt-3 mt-3  border-[#EEEEEE]  w-full p-2  placeholder:text-textSecondry2 placeholder:text-base placeholder:font-poppins pl-3 focus:border-2px focus:border-[#EEEEEE] outline-none"
              name="description"
              placeholder="Add discription"
              value={formik.values.description}
              onChange={formik.handleChange}
            />
            <ValidationError
              touched={formik.touched.description}
              error={formik.errors.description}
            />
          </div>
          <div className="flex items-center  justify-end gap-4 p-4 md:p-5  rounded-b dark:border-gray-600">
            <CustomButton
              title="Cancel"
              bgColor={false}
              handleChange={toggleModal}
              width="150px"
            />
            <CustomButton title="Save" bgColor={true} width="150px" />
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddSupplierModal;
