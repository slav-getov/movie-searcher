import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: "",
};
export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateFormSearchParams: (state, action) => {
      //console.log(action.payload);
      state.value = action.payload;
    },
    nullFormSearchParams: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { updateFormSearchParams, nullFormSearchParams } =
  formSlice.actions;

export default formSlice.reducer;
