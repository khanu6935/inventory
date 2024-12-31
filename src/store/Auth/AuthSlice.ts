import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserSignIn } from "./AuthAction";

const initialState: {
  authLoading: boolean;
  user: {} | null;
  error: string | null;
  registerUser: {} | null;
} = {
  authLoading: false,
  user: null,
  error: null,
  registerUser: null,
};

const AuthSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // /////////////////////////Signin User/////////////////////////
    builder
      .addCase(UserSignIn.pending, (state) => {
        state.authLoading = true;
        state.error = null;
      })
      .addCase(UserSignIn.fulfilled, (state, action: PayloadAction<any>) => {
        state.authLoading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(UserSignIn.rejected, (state, action) => {
        state.authLoading = false;
        state.error = action.error.message ?? null;
      })

  },
});

export default AuthSlice.reducer;
