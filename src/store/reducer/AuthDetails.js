import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  authData: {
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: 0,
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
    },
  });
  
  export const {setAuthDataStore} = authDataStore.actions;
  export default authDataStore.reducer