import { createSlice } from "@reduxjs/toolkit";
import { UserSignIn } from "../Auth/AuthAction";
import {
  addNewInventory,
  addProducts,
  deleteInventoryById,
  getAllInventoryItems,
  getAllProducts,
  getItemById,
  getSingleInventory,
  getWarehouseList,
  getItemsInWarehouse
} from "./HomeAction";

const initialState: {
  user: {} | null;
  inventory: {} | null;
  products: {} | null;
  warehouse:{} | null;
  inventoryById: {} | null;
  productById: {} | null;
  loading: boolean | false;
  error: string | null;
  itemsInWareHouse:{} | null;
} = {
  user: null,
  inventory: null,
  products: null,
  inventoryById: null,
  productById: null,
  loading: false,
  error: null,
  warehouse:null,
  itemsInWareHouse:null
};

const HomePageSlice = createSlice({
  name: "HomePageSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // User Sign In
      .addCase(UserSignIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(UserSignIn.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(UserSignIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      })

      // Add Inventory
      .addCase(addNewInventory.pending, (state) => {
        state.loading = true;
      })
      .addCase(addNewInventory.fulfilled, (state, action) => {
        state.loading = false;
        const inventory: any = state.inventory ?? [];
        if (Array.isArray(action.payload)) {
          state.inventory = [...inventory, ...action.payload];
        } else {
          inventory.push(action.payload);
          state.inventory = inventory;
        }
      })
      .addCase(addNewInventory.rejected, (state, action) => {
        state.loading = false;
        action.error.message ?? null;
      })

      // Get All Inventory
      .addCase(getAllInventoryItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllInventoryItems.fulfilled, (state, action) => {
        state.loading = false;
        state.inventory = action.payload;
      })
      .addCase(getAllInventoryItems.rejected, (state, action) => {
        state.loading = false;
        action.error.message ?? null;
      })

      // Get Inventory by Id
      .addCase(getSingleInventory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleInventory.fulfilled, (state, action) => {
        state.loading = false;
        state.inventoryById = action.payload;
      })
      .addCase(getSingleInventory.rejected, (state, action) => {
        state.loading = false;
        action.error.message ?? null;
      })

      // Delete Inventory by Id
      .addCase(deleteInventoryById.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteInventoryById.fulfilled, (state, action) => {
        state.loading = false;
        const inventory:any = state.inventory ?? [];
        state.inventory = inventory.filter((item:any) => item.id !== action.payload.id);
      })
      .addCase(deleteInventoryById.rejected, (state, action) => {
        state.loading = false;
        action.error.message ?? null;
      })

      // Add Products
      .addCase(addProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(addProducts.rejected, (state, action) => {
        state.loading = false;
        action.error.message ?? null;
      })

      // Get All Products
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false;
        action.error.message ?? null;
      })

      // Get Product by Id
      .addCase(getItemById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getItemById.fulfilled, (state, action) => {
        state.loading = false;
        state.productById = action.payload;
      })
      .addCase(getItemById.rejected, (state, action) => {
        state.loading = false;
        action.error.message ?? null;
      })
         // Get warehouse by Id
         .addCase(getWarehouseList.pending, (state) => {
          state.loading = true;
        })
        .addCase(getWarehouseList.fulfilled, (state, action) => {
          state.loading = false;
          state.warehouse = action.payload;
        })
        .addCase(getWarehouseList.rejected, (state, action) => {
          state.loading = false;
          action.error.message ?? null;
        })
          // Get warehouse by Id
          .addCase(getItemsInWarehouse.pending, (state) => {
            state.loading = true;
          })
          .addCase(getItemsInWarehouse.fulfilled, (state, action) => {
            state.loading = false;
            state.itemsInWareHouse = action.payload;
          })
          .addCase(getItemsInWarehouse.rejected, (state, action) => {
            state.loading = false;
            action.error.message ?? null;
          });
  },
});

export default HomePageSlice.reducer;
