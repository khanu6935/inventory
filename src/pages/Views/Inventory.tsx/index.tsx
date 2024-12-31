import DefaultLayout from "../../../components/DefaultLayout/DefaultLayout";
import InnerLayOut from "../../../components/InnerLayOut/InnerLayOut";
import CustomButton from "../../../components/Button/CustomButton";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { addInventorySchema } from "../../../components/schema/Schema";
import ValidationError from "../../../components/ValidationError/ValidationError";
import InputFeild from "../../../components/InputFeild/InputFeild";
import InvestorTable from "../../../components/Tables/PortfolioTable/InvestorTable";
import ResidenceModal from "../../LayOutPages/Opportunities/Components/ResidenceModal";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { addNewInventory, deleteInventoryById, getAllInventoryItems, getWarehouseList } from "../../../store/home/HomeAction";
import { useHomePageSelector } from "../../../hooks/selectors/useSelectorHook";
import DropDown from "../../../components/Header/DropDown";
import Modal from "../../../components/Modals/Modal";
import SingleDataCard from "../Items/table/card";

const defaultValues = {
  itemSize: "",
  inStock: 0,
  avlQty: 0,
  inTransit: 0,
  minOrderQuantity: 0,
  quantityPerBox: 0,
  reorderPoint: 0,
};

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectItem, setSelectItem] = useState<any>();
  const [itemTypeId, setItemTypeId] = useState<any>(1);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { inventory, products } = useHomePageSelector();

  const toggleModal = (item: any) => {
    setIsModalOpen(!isModalOpen);
  };

  const action = () => {
    dispatch(getAllInventoryItems());
  };

  const handleDelete = (id:any)=>{
    dispatch(deleteInventoryById({
      id:id,
      extra:{action:action}
    }))
  }

  const itemTypeData = [
    {
      id: 1,
      title: "finished product",
    },
    {
      id: 2,
      title: "Raw Material",
    },
  ];

  useEffect(() => {
    dispatch(getAllInventoryItems());
  }, []);

  const formik = useFormik({
    initialValues: defaultValues,
    validationSchema: addInventorySchema,

    onSubmit: (values) => {
      const {
        avlQty,
        inStock,
        inTransit,
        itemSize,
        minOrderQuantity,
        quantityPerBox,
        reorderPoint,
      } = values;
      const data = {
        avlQty,
        inStock,
        inTransit,
        itemSize,
        minOrderQuantity,
        quantityPerBox,
        reorderPoint,
        item: { itemId: parseInt(selectItem,10) },
        itemType: { itemTypeId: parseInt(itemTypeId , 10) },
        warehouseId:10,
      };
      console.log("values", data);
      dispatch(addNewInventory(data));
    },
  });

  const InvestmentHeader = [
    { Header: "Item Id", accessor: "inventoryId", align: "left" },
    { Header: "Item Name", accessor: "itemName", align: "left" },
    { Header: "Brand", accessor: "brand", align: "left" },
    { Header: "Size", accessor: "itemSize", align: "center" },
    { Header: "In Stock", accessor: "inStock", align: "center" },
    { Header: "Available Qty", accessor: "avlQty", align: "center" },
    { Header: "In Transit", accessor: "inTransit", align: "center" },
    { Header: "Min Order Qty", accessor: "minOrderQuantity", align: "center" },
    { Header: "Quantity Per Box", accessor: "quantityPerBox", align: "center" },
    { Header: "Reorder Point", accessor: "reorderPoint", align: "center" },
    { Header: "Item Type", accessor: "itemType", align: "center" },
    { Header: "Action", accessor: "action", align: "center" },
  ];

  const SingleHeader = [
    { Header: "Item Name", accessor: "itemName", align: "left" },
    { Header: "Brand", accessor: "brand", align: "left" },
    { Header: "Size", accessor: "itemSize", align: "center" },
    { Header: "In Stock", accessor: "inStock", align: "center" },
    { Header: "Available Qty", accessor: "avlQty", align: "center" },
    { Header: "In Transit", accessor: "inTransit", align: "center" },
    { Header: "Min Order Qty", accessor: "minOrderQuantity", align: "center" },
    { Header: "Quantity Per Box", accessor: "quantityPerBox", align: "center" },
    { Header: "Reorder Point", accessor: "reorderPoint", align: "center" },
    { Header: "Item Type", accessor: "itemType", align: "center" },
  ];

  const data =
    inventory &&
    inventory.map((item: any) => ({
      inventoryId: item?.inventoryId || "",
      itemName: item?.item?.itemName || "",
      brand: item?.item?.brand?.brandName || "",
      itemSize: item?.itemSize || "",
      inStock: item?.inStock || "",
      avlQty: item?.avlQty || "",
      inTransit: item?.inTransit || "",
      minOrderQuantity: item?.minOrderQuantity || "",
      quantityPerBox: item?.quantityPerBox || "",
      reorderPoint: item?.reorderPoint || "",
      itemType: item?.itemType?.itemType || "",
      action: item?.inventoryId ? (
        <>
          <div className="flex items-center gap-2">
            <CustomButton
              title="View"
              bgColor={true}
              handleChange={() => toggleModal(item?.inventoryId)}
            />
            <CustomButton
              title="Delete"
              bgColor={true}
              handleChange={() => handleDelete(item?.inventoryId)}
            />
          </div>
        </>
      ) : null,
    }));

    const singledata = {
      inventoryId: 13,
      itemSize: "Small",
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

    const mappedData = {
      itemName: singledata.item.itemName,
      brand: singledata.item.brand.brandName,
      itemSize: singledata.itemSize,
      inStock: singledata.inStock,
      avlQty: singledata.avlQty,
      inTransit: singledata.inTransit,
      minOrderQuantity: singledata.minOrderQuantity,
      quantityPerBox: singledata.quantityPerBox,
      reorderPoint: singledata.reorderPoint,
      itemType: singledata.itemType.itemType,
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
                    Add Inventory
                  </h2>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="flex mt-6 flex-row flex-wrap gap-4">
                      {/* Item Size */}
                      <div className="mb-4">
                        <InputFeild
                          label="Item Size"
                          placeholder="Enter item size"
                          name="itemSize"
                          type="text"
                          value={formik.values.itemSize}
                          onChange={formik.handleChange}
                        />
                        <ValidationError
                          touched={formik.touched.itemSize}
                          error={formik.errors.itemSize}
                        />
                      </div>

                      {/* In Stock */}
                      <div className="mb-4">
                        <InputFeild
                          label="In Stock"
                          placeholder="Enter stock quantity"
                          name="inStock"
                          type="number"
                          value={formik.values.inStock}
                          onChange={formik.handleChange}
                        />
                        <ValidationError
                          touched={formik.touched.inStock}
                          error={formik.errors.inStock}
                        />
                      </div>

                      {/* Available Quantity */}
                      <div className="mb-4">
                        <InputFeild
                          label="Available Quantity"
                          placeholder="Enter available quantity"
                          name="avlQty"
                          type="number"
                          value={formik.values.avlQty}
                          onChange={formik.handleChange}
                        />
                        <ValidationError
                          touched={formik.touched.avlQty}
                          error={formik.errors.avlQty}
                        />
                      </div>

                      {/* In Transit */}
                      <div className="mb-4">
                        <InputFeild
                          label="In Transit"
                          placeholder="Enter in transit quantity"
                          name="inTransit"
                          type="number"
                          value={formik.values.inTransit}
                          onChange={formik.handleChange}
                        />
                        <ValidationError
                          touched={formik.touched.inTransit}
                          error={formik.errors.inTransit}
                        />
                      </div>

                      {/* Minimum Order Quantity */}
                      <div className="mb-4">
                        <InputFeild
                          label="Minimum Order Quantity"
                          placeholder="Enter minimum order quantity"
                          name="minOrderQuantity"
                          type="number"
                          value={formik.values.minOrderQuantity}
                          onChange={formik.handleChange}
                        />
                        <ValidationError
                          touched={formik.touched.minOrderQuantity}
                          error={formik.errors.minOrderQuantity}
                        />
                      </div>

                      {/* Quantity Per Box */}
                      <div className="mb-4">
                        <InputFeild
                          label="Quantity Per Box"
                          placeholder="Enter quantity per box"
                          name="quantityPerBox"
                          type="number"
                          value={formik.values.quantityPerBox}
                          onChange={formik.handleChange}
                        />
                        <ValidationError
                          touched={formik.touched.quantityPerBox}
                          error={formik.errors.quantityPerBox}
                        />
                      </div>

                      {/* Reorder Point */}
                      <div className="mb-4">
                        <InputFeild
                          label="Reorder Point"
                          placeholder="Enter reorder point"
                          name="reorderPoint"
                          type="number"
                          value={formik.values.reorderPoint}
                          onChange={formik.handleChange}
                        />
                        <ValidationError
                          touched={formik.touched.reorderPoint}
                          error={formik.errors.reorderPoint}
                        />
                      </div>

                      {/* Item */}
                      <div className="mt-[2rem]">
                        <DropDown
                          title="Select Item"
                          dropDownData={products}
                          height="52px"
                          width="100%"
                          value={selectItem}
                          onSelect={(e: any) => setSelectItem(e.target.value)}
                        />
                      </div>

                      {/* Item Type */}
                      <div className="mt-[2rem]">
                        <DropDown
                          title="Select Item Type"
                          dropDownData={itemTypeData}
                          height="52px"
                          width="100%"
                          value={itemTypeId}
                          onSelect={(e: any) => setItemTypeId(e.target.value)}
                        />
                      </div>
                      <div className="flex items-center mt-2">
                        <CustomButton
                          title="Add New Inventory +"
                          bgColor={true}
                        />
                      </div>
                    </div>
                  </form>

                  <hr className="my-8" />
                  <div className="flex w-full justify-between md:flex-row flex-col">
                    <h2 className="text-textPrimary font-poppins font-medium text-xl leading-10">
                      Inventory List
                    </h2>
                  </div>
                </div>

                <>
                 {products && products.length > 0 ? <InvestorTable
                    tableHeader={InvestmentHeader}
                    tableBody={data}
                  /> : <div>No Data Found</div>}
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
          <SingleDataCard columns={SingleHeader} rows={mappedData}/>

        </div>
      </Modal>
    </>
  );
};

export default Home;
