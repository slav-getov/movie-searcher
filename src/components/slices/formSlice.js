const formSlice = createSlice({
  name: "formData",
  initialState: "",
  reducers: {
    updateSearchParams: (state, action) => state + action.payload,
    nullSearchParams: (state) => (state = initialState),
  },
});
