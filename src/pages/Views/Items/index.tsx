import DefaultLayout from "../../../components/DefaultLayout/DefaultLayout";
import { useFormik } from "formik";
import { addItemSchema } from "../../../components/schema/Schema";
import { useEffect, useState } from "react";
import CustomButton from "../../../components/Button/CustomButton";
import InputFeild from "../../../components/InputFeild/InputFeild";
import ValidationError from "../../../components/ValidationError/ValidationError";
import InnerLayOut from "../../../components/InnerLayOut/InnerLayOut";
import ItemsTable from "./table";
import {
  addNewInventory,
  getAllProducts,
  getItemById,
} from "../../../store/home/HomeAction";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import ResidenceModal from "../../LayOutPages/Opportunities/Components/ResidenceModal";
import { useHomePageSelector } from "../../../hooks/selectors/useSelectorHook";
import Modal from "../../../components/Modals/Modal";
import SingleDataCard from "./table/card";


const defaultValues = {
  itemName: "",
};

const Investments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { products, productById } = useHomePageSelector();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  let productType = {
    productTypeId: 1,
  };
  let brand = {
    brandId: 1,
  };

  const toggleModal = (item: any) => {
    if (!item) return;
    setIsModalOpen(!isModalOpen);
    dispatch(getItemById(item));
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const formik = useFormik({
    initialValues: defaultValues,
    validationSchema: addItemSchema,
    onSubmit: (values) => {
      const { itemName } = values;
      const data = { itemName, productType, brand };
      dispatch(addNewInventory(data));
    },
  });

  const columns = [
    { Header: "Item Name", accessor: "itemName", align: "left" },
    { Header: "Brand", accessor: "brand", align: "left" },
    { Header: "Product Type", accessor: "productType", align: "center" },
    { Header: "Action", accessor: "action", align: "center" },
  ];

  const ShowColumns = [
    { Header: "Item Name", accessor: "itemName", align: "left" },
    { Header: "Brand", accessor: "brand", align: "left" },
    { Header: "Product Type", accessor: "productType", align: "center" },
  ];
  const data =
    products &&
    products.map((item: any) => ({
      itemName: item?.itemName || "",
      brand: item?.brand?.brandName || "",
      productType: item?.productType?.productType || "",
      action: item?.itemId ? (
        <>
          <div className="flex items-center justify-center gap-2">
            <CustomButton
              title="View"
              bgColor={true}
              handleChange={() => toggleModal(item?.itemId)}
            />
          </div>
        </>
      ) : null,
    }));

  const singledata = {
    inventoryId: 13,
    itemName: "Small",
    inStock: 50,
    avlQty: 100,
    inTransit: 40,
    minOrderQuantity: 20,
    quantityPerBox: 10,
    reorderPoint: 30,
    item: {
      itemId: 9,
      itemName: "NAXO",
      productType: {
        productTypeId: 1,
        productType: "shoes",
      },
      brand: {
        brandId: 1,
        brandName: "gucci",
      },
    },
    itemType: {
      itemTypeId: 1,
      itemType: "finished product",
    },
    warehouseId: 1,
  };

  return (
    <>
      <DefaultLayout>
        <div className="pb-6 h-max  bg-[#F0F0F1] rounded-[20px] w-full flex flex-col justify-center px-5 lg:pl-16 md:pl-8 pl-4 items-center ">
          <div className="w-full mt-6  lg:px-10 px-0 mr-0">
            <InnerLayOut>
              <div className="w-full flex  justify-center flex-col">
                <div className="px-6 pb-6">
                  <h2 className="text-textPrimary font-poppins font-bold text-xxl leading-10">
                    Add Item
                  </h2>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="flex mt-6 flex-row flex-wrap gap-4">
                      {/* Item Size */}
                      <div className="mb-4">
                        <InputFeild
                          label="Item Size"
                          placeholder="Enter item size"
                          name="itemName"
                          type="text"
                          value={formik.values.itemName}
                          onChange={formik.handleChange}
                        />
                        <ValidationError
                          touched={formik.touched.itemName}
                          error={formik.errors.itemName}
                        />
                      </div>
                      <div className="flex items-center mt-2">
                        <CustomButton title="Add New Item +" bgColor={true} />
                      </div>
                    </div>
                  </form>

                  <hr className="my-8" />
                  <div className="flex w-full justify-between md:flex-row flex-col">
                    <h2 className="text-textPrimary font-poppins font-medium text-xl leading-10">
                      Item List
                    </h2>
                  </div>
                </div>

                <>
                  {products && products.length > 0 ? (
                    <ItemsTable tableHeader={columns} tableBody={data} />
                  ) : (
                    <div>No products available</div>
                  )}
                </>
              </div>
            </InnerLayOut>
          </div>
        </div>
      </DefaultLayout>
      {/* ////////////////////////////////Modal to view Residences//////////////////////// */}
      <Modal
        isOpen={isModalOpen}
        onClose={toggleModal}
        header="Investor"
        supplier={true}
      >
        <div className="flex flex-col justify-center items-center">
          <SingleDataCard columns={ShowColumns} rows={singledata} />
        </div>
      </Modal>
    </>
  );
};

export default Investments;
