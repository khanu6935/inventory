import { endPoints } from "../../endPoints";
import { API, SECURE_API } from "../api";

export const SignInUser = (values: any) => API.post("/auth/login", values);
export const addInventory = (data: any) =>
  SECURE_API.post(endPoints.addInventory, data);
export const addWarehouse = (data: any) =>
  SECURE_API.post(endPoints.newWareHouse, data);
export const getAllInventory = () => SECURE_API.get(endPoints.getAllInventory);
export const getInventoryById = (id: any) =>
  SECURE_API.get(`${endPoints.getAllInventory}/${id}`);
export const deleteInventory = (id: any) =>
  SECURE_API.delete(`${endPoints.deleteInventory}/${id}`);
export const addProducts = (data: any) =>
  SECURE_API.post(endPoints.addProducts, data);
export const getAllProducts = () => SECURE_API.get(endPoints.getListOfProducts);
export const getWareHouses = () => SECURE_API.get(endPoints.newWareHouse);
export const itemsInWarehouse = () => SECURE_API.get(endPoints.getWareHouseItems);
export const getProductById = (id: any) =>
  SECURE_API.get(`${endPoints.getProductById}/${id}`);
