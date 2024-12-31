import CustomButton from "../../../components/Button/CustomButton";
import DefaultLayout from "../../../components/DefaultLayout/DefaultLayout";
import InnerLayOut from "../../../components/InnerLayOut/InnerLayOut";
import InputFeild from "../../../components/InputFeild/InputFeild";
import { useEffect, useState } from "react";
import ValidationError from "../../../components/ValidationError/ValidationError";
import { useFormik } from "formik";
import { AddInvestorSchema } from "../../../components/schema/Schema";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import {
  addNewWarehouse,
  getItemsInWarehouse,
  getWarehouseList,
} from "../../../store/home/HomeAction";
import { useHomePageSelector } from "../../../hooks/selectors/useSelectorHook";
import WarehouseTable from "./table";

const Investor = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { warehouse ,itemsInWareHouse} = useHomePageSelector();
  let address = {
    addressId: 1,
    postalCode: 75600,
    areaName: "clifton",
    street: "10",
    city: {
      cityId: 1,
      cityCode: "KHI",
      cityName: "karachi",
      country: {
        countryId: 1,
        countryCode: "PK",
        countryName: "Pakistan",
      },
    },
  };

  const WarehouseHeader = [
    { Header: "Warehouse Name", accessor: "warehouseName", align: "left" },
    { Header: "Area Name", accessor: "areaName", align: "left" },
    { Header: "City Name", accessor: "cityName", align: "left" },
    { Header: "Country Name", accessor: "countryName", align: "left" },
    { Header: "Postal Code", accessor: "postalCode", align: "center" },
    { Header: "Inventory Count", accessor: "inventory", align: "center" },
  ];

  const headers = [
    { Header: "Warehouse Name", accessor: "warehouseName", align: "left" },
    { Header: "Area Name", accessor: "areaName", align: "left" },
    { Header: "City Name", accessor: "cityName", align: "left" },
    { Header: "Country Name", accessor: "countryName", align: "left" },
    { Header: "In Stock", accessor: "inStock", align: "center" },
    { Header: "Available Quantity", accessor: "avlQty", align: "center" },
    { Header: "Item Name", accessor: "itemName", align: "left" },
    { Header: "Item Type", accessor: "itemType", align: "left" },
    { Header: "Product Type", accessor: "productType", align: "left" },
    { Header: "Brand Name", accessor: "brandName", align: "left" },
  ];


  const rows =
    warehouse &&
    warehouse.map((item: any) => ({
      warehouseName: item?.warehouseName || "",
      areaName: item?.address?.areaName || "",
      cityName: item?.address?.city?.cityName || "",
      countryName: item?.address?.city?.country?.countryName || "",
      postalCode: item?.address?.postalCode || "",
      inventory: item?.inventory?.length > 0 ? item?.inventory?.length : 0,
    }));

    const itemsInWarehouse = itemsInWareHouse && itemsInWareHouse.map((item:any) => ({
      warehouseName: item.warehouseName,
      areaName: item.areaName,
      cityName: item.cityName,
      countryName: item.countryName,
      inStock: item.inStock,
      avlQty: item.avlQty,
      itemName: item.itemName,
      itemType: item.itemType,
      productType: item.productType,
      brandName: item.brandName,
    }));


  useEffect(() => {
    dispatch(getWarehouseList());
    dispatch(getItemsInWarehouse())
  }, []);

  const action = () => {
    dispatch(getWarehouseList());
  };

  const formik = useFormik({
    initialValues: {
      warehouseName: "",
    },
    validationSchema: AddInvestorSchema,
    onSubmit: (values, { resetForm }) => {
      let { warehouseName } = values;
      const data = { warehouseName, address };
      console.log("values", data);
      dispatch(
        addNewWarehouse({
          data: data,
          extra: { action: action },
        })
      );
      // resetForm({});
    },
  });

  return (
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
                        placeholder="Enter warehouse"
                        name="warehouseName"
                        type="text"
                        value={formik.values.warehouseName}
                        onChange={formik.handleChange}
                      />
                      <ValidationError
                        touched={formik.touched.warehouseName}
                        error={formik.errors.warehouseName}
                      />
                    </div>
                    <div className="flex items-center mt-2">
                      <CustomButton title="Add Warehouse +" bgColor={true} />
                    </div>
                  </div>
                </form>

                <hr className="my-8" />
                <div className="flex w-full justify-between md:flex-row flex-col">
                  <h2 className="text-textPrimary font-poppins font-medium text-xl leading-10">
                    Warehouses
                  </h2>
                </div>
                <WarehouseTable
                  tableBody={rows}
                  tableHeader={WarehouseHeader}
                />

                <hr className="my-8" />
                <div className="flex w-full justify-between md:flex-row flex-col">
                  <h2 className="text-textPrimary font-poppins font-medium text-xl leading-10">
                    Items Quantity in Warehouse
                  </h2>
                </div>
                <WarehouseTable
                  tableBody={itemsInWarehouse}
                  tableHeader={headers}
                />
              </div>
            </div>
          </InnerLayOut>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Investor;
