import * as api from "../api/routes/AuthRoutes";
import toast from "react-hot-toast";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addNewInventory = createAsyncThunk(
  "addNewInventory",
  async (data: any) => {
    try {
      const response = await api.addInventory(data);
      const result = response.data;
      toast.success("Added Successfully!");
      return result;
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  }
);

export const getAllInventoryItems = createAsyncThunk(
  "getAllInventory",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getAllInventory();
      const result = response.data;
      console.log('result',result);

      return result;
    } catch (error) {
      console.log("error", error);
      return rejectWithValue(error ? error : "Failed to fetch inventory");
    }
  }
);

export const getSingleInventory = createAsyncThunk(
  "getInventoryById",
  async (id) => {
    try {
      const response = await api.getInventoryById(id);
      const result = response.data;
      return result;
    } catch (error: any) {
      if (error instanceof Error && error.message) {
      }
    }
  }
);

export const deleteInventoryById = createAsyncThunk(
  "deleteInventory",
  async (id:any) => {
    try {
      const response = await api.deleteInventory(id);
      const result = response.data;
      toast.success("Delete Inventory Successfully!");
      return result;
    } catch (error) {
      toast.error("something went wrong");
    }
  }
);

export const addProducts = createAsyncThunk("addNewItem", async (data) => {
  try {
    const response = await api.addProducts(data);
    const result = response.data;
    toast.success("Added Successfully!");
    return result;
  } catch (error) {
    if (error instanceof Error && error.message) {
      toast.error("something went wrong");
    }
  }
});

export const getAllProducts = createAsyncThunk("getAllItems", async () => {
  try {
    const response = await api.getAllProducts();
    const result = response.data;
    return result;
  } catch (error) {
    console.log("error", error);
  }
});

export const getItemById = createAsyncThunk("getItemById", async (id:any) => {
  try {
    const response = await api.getProductById(id);
    const result = response.data;
    return result;
  } catch (error) {
    if (error instanceof Error && error.message) {
    }
  }
});

export const addNewWarehouse = createAsyncThunk(
  "addNewWareHose",
  async ({data,extra}:{data:any;extra:{action: ()=>void}}) => {
    const {action} = extra
    try {
      const response = await api.addWarehouse(data);
      const result = response.data;
      toast.success("Added Successfully!");
      action()
      return result;
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  }
);

export const getWarehouseList = createAsyncThunk("getWareHouse", async () => {
  try {
    const response = await api.getWareHouses();
    const result = response.data;
    return result;
  } catch (error) {
    console.log("error", error);
  }
});

export const getItemsInWarehouse = createAsyncThunk("item-quantity", async () => {
  try {
    const response = await api.itemsInWarehouse();
    const result = response.data;
    return result;
  } catch (error) {
    console.log("error", error);
  }
});
