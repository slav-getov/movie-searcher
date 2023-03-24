import { createSlice } from "redux-starter-kit";

const formSlice = createSlice({
  slice: "formData",
  initialState: "",
  reducers: {
    updateFormSearchParams: (state, action) => state + action.payload,
    nullFormSearchParams: (state) => (state = initialState),
  },
});

const { actions, reducer } = formSlice;

export const { updateFormSearchParams, nullFormSearchParams } = actions;

export default reducer;
