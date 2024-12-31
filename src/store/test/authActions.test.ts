import * as api from "../api/routes/AuthRoutes"; // Import your API methods
import {
  deleteInventoryById,
  addProducts,
  getAllProducts,
  getItemById,
  addNewWarehouse,
  getWarehouseList,
  getItemsInWarehouse
} from "../home/HomeAction"; // Import your async thunks
import { configureStore } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { AxiosResponse } from 'axios';
import  store  from '../store'; // Replace with actual store import


// Mock the API functions
jest.mock('../api/routes/AuthRoutes', () => ({

  deleteInventory: jest.fn().mockResolvedValueOnce({} as AxiosResponse),
  addProducts: jest.fn().mockResolvedValueOnce({} as AxiosResponse),
  getAllProducts: jest.fn().mockResolvedValueOnce({} as AxiosResponse),
  getProductById: jest.fn().mockResolvedValueOnce({} as AxiosResponse),
  addWarehouse: jest.fn().mockResolvedValueOnce({} as AxiosResponse),
  getWareHouses: jest.fn().mockResolvedValueOnce({} as AxiosResponse),
  itemsInWarehouse: jest.fn().mockResolvedValueOnce({} as AxiosResponse),
}));

// Mock the toast notifications
jest.mock('react-toastify', () => ({
    toast: {
      success: jest.fn(),
      error: jest.fn(),
    },
  }));

  const mockResponse = {
    data: [
      { id: 1, name: 'Test Product' }, // or whatever mock data you need
    ],
  };




describe('Thunk Actions', () => {
  let store: any;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        inventory: (state = [], action) => {
          switch (action.type) {
            case 'inventory/add':
              return [...state, action.payload];
            case 'inventory/set':
              return action.payload;
            default:
              return state;
          }
        },
      },
    });
  });

  // Test for deleteInventoryById - success scenario
  it('should dispatch deleteInventoryById and show success toast on success', async () => {
    const mockResponse = {data: [{ id: 1, name: 'Test Product' }],};
    (api.deleteInventory as jest.Mock).mockResolvedValueOnce(mockResponse);

    const result = await store.dispatch(deleteInventoryById(1));

    expect(toast.success).toHaveBeenCalledWith('Delete Inventory Successfully!');
    expect(result.payload).toEqual(mockResponse.data);
  });

  // Test for deleteInventoryById - failure scenario
  it('should dispatch deleteInventoryById and show error toast on failure', async () => {
    const mockError = { response: { data: { message: 'Error deleting inventory' } } };
    (api.deleteInventory as jest.Mock).mockRejectedValueOnce(mockError);

    const result = await store.dispatch(deleteInventoryById(1));

    expect(toast.error).toHaveBeenCalledWith('something went wrong');
  });

  // Test for addProducts - success scenario
  it('should dispatch addProducts and show success toast on success', async () => {
    const mockResponse = { data: { id: 1, name: 'Test Product' } };
    (api.addProducts as jest.Mock).mockResolvedValueOnce(mockResponse);

    const result = await store.dispatch(addProducts());

    expect(toast.success).toHaveBeenCalledWith('Added Successfully!');
    expect(result.payload).toEqual(mockResponse.data);
  });

  it('should dispatch addProducts and show error toast on failure', async () => {
    const mockError = new Error('Failed to add product');
    (api.addProducts as jest.Mock).mockRejectedValueOnce(mockError);

    const result = await store.dispatch(addProducts());

    expect(toast.error).toHaveBeenCalledWith('something went wrong');
  });

  // Test for getAllProducts - success scenario
  it('should dispatch getAllProducts and return data on success', async () => {
    const mockResponse = { data: [{ id: 1, name: 'Test Product' }] };
    (api.getAllProducts as jest.Mock).mockResolvedValueOnce(mockResponse);

    const result = await store.dispatch(getAllProducts());

    expect(result.payload).toEqual(mockResponse.data);
  });

  // Test for getAllProducts - failure scenario
  it('should dispatch getAllProducts and handle error', async () => {
    const mockError = new Error('Failed to fetch products');
    (api.getAllProducts as jest.Mock).mockRejectedValueOnce(mockError);

    const result = await store.dispatch(getAllProducts());

    expect(result.type).toBe('getAllItems/fulfilled');
  });

  // Test for getItemById - success scenario
  it('should dispatch getItemById and return data on success', async () => {
    const mockResponse = { data: { id: 1, name: 'Test Product' } };
    (api.getProductById as jest.Mock).mockResolvedValueOnce(mockResponse);

    const result = await store.dispatch(getItemById(1));

    expect(result.payload).toEqual(mockResponse.data);
  });

  // Test for getItemById - failure scenario
  it('should dispatch getItemById and handle error', async () => {
    const mockError = new Error('Failed to fetch product');
    (api.getProductById as jest.Mock).mockRejectedValueOnce(mockError);

    const result = await store.dispatch(getItemById(1));

    expect(result.type).toBe('getItemById/rejected');
  });

  // Test for addNewWarehouse - success scenario
  it('should dispatch addNewWarehouse and show success toast on success', async () => {
    const mockResponse = { data: { id: 1, name: 'Test Warehouse' } };
    (api.addWarehouse as jest.Mock).mockResolvedValueOnce(mockResponse);

    const result = await store.dispatch(addNewWarehouse({ data: { name: 'Test Warehouse' }, extra: { action: jest.fn() }}));

    expect(toast.success).toHaveBeenCalledWith('Added Successfully!');
    expect(result.payload).toEqual(mockResponse.data);
  });

  // Test for addNewWarehouse - failure scenario
  it('should dispatch addNewWarehouse and show error toast on failure', async () => {
    const mockError = { response: { data: { message: 'Error adding warehouse' } } };
    (api.addWarehouse as jest.Mock).mockRejectedValueOnce(mockError);

    const result = await store.dispatch(addNewWarehouse({ data: { name: 'Test Warehouse' }, extra: { action: jest.fn() }}));

    expect(toast.error).toHaveBeenCalledWith('Error adding warehouse');
  });

  // Test for getWarehouseList - success scenario
  it('should dispatch getWarehouseList and return data on success', async () => {
    const mockResponse = { data: [{ id: 1, name: 'Test Warehouse' }] };
    (api.getWareHouses as jest.Mock).mockResolvedValueOnce(mockResponse);

    const result = await store.dispatch(getWarehouseList());

    expect(result.payload).toEqual(mockResponse.data);
  });

  // Test for getWarehouseList - failure scenario
  it('should dispatch getWarehouseList and handle error', async () => {
    const mockError = new Error('Failed to fetch warehouse list');
    (api.getWareHouses as jest.Mock).mockRejectedValueOnce(mockError);

    const result = await store.dispatch(getWarehouseList());

    expect(result.type).toBe('getWareHouse/rejected');
  });

  // Test for getItemsInWarehouse - success scenario
  it('should dispatch getItemsInWarehouse and return data on success', async () => {
    const mockResponse = { data: [{ id: 1, name: 'Test Item', quantity: 10 }] };
    (api.itemsInWarehouse as jest.Mock).mockResolvedValueOnce(mockResponse);

    const result = await store.dispatch(getItemsInWarehouse());

    expect(result.payload).toEqual(mockResponse.data);
  });

  // Test for getItemsInWarehouse - failure scenario
  it('should dispatch getItemsInWarehouse and handle error', async () => {
    const mockError = new Error('Failed to fetch items in warehouse');
    (api.itemsInWarehouse as jest.Mock).mockRejectedValueOnce(mockError);

    const result = await store.dispatch(getItemsInWarehouse());

    expect(result.type).toBe('item-quantity/rejected');
  });
});
