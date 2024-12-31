import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/routes/AuthRoutes";
import toast from "react-hot-toast";

interface SignInData {
  email?: string;
  password: string;
}


// /////////////////////////login User///////////////////////////
export const UserSignIn = createAsyncThunk(
  "auth/login",
  async ({
    values,
    extra,
  }: {
    values: SignInData;
    extra: { fundManagerAction: () => void;};
  }) => {
    const { fundManagerAction} = extra;
    try {
      const response = await api.SignInUser(values);
      const result = response.data;
      localStorage.setItem("access_token", result.token);
      if (result.token) {
        toast.success("User login Successfully");
        fundManagerAction();
      } else {
        toast.error("Something went wrong");
      }
      return result;
    } catch (error) {
      toast.error("Something went wrong");
    }
  }
);


