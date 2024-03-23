import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authData: {
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: 0,
    address: [],
    billingAddress: [],
    gender: "",
    zipCode: "",
  },
};

const authDataStore = createSlice({
  name: 'authStore',
  initialState,
  reducers: {
    setAuthDataStore: (state, action) => {
      state.authData = action.payload;
    },
    addAddress: (state, action) => {
      state.authData.address.push(action.payload);
    },
    removeAddress: (state, action) => {
      state.authData.address.splice(action.payload, 1);
    },
    addBillingAddress: (state, action) => {
      state.authData.billingAddress.push(action.payload);
    },
    removeBillingAddress: (state, action) => {
      state.authData.billingAddress = state.authData.billingAddress.filter((item) => item !== action.payload);
    },
  },
});

export const { setAuthDataStore, addAddress, removeAddress, addBillingAddress, removeBillingAddress } = authDataStore.actions;
export default authDataStore.reducer;
