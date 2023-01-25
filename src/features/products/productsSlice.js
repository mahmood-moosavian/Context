import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./action";

const initialState = {
  error: false,
  loading: false,
  value: [],
  selectedItemId: 0,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    }).addCase(getProducts.rejected,(state)=>{
      state.loading = false;
      state.error = true;
    }).addCase(getProducts.fulfilled,(state, action) => {
      state.loading = false;
      state.error = false;
      state.value = action.payload;
    })
  },
  reducers:{
    selectItem(state, action){
      state.selectedItemId = action.payload
    }
  }
});

export const { selectItem } = productsSlice.actions;
export default productsSlice.reducer;
