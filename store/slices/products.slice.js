import { createSlice } from "@reduxjs/toolkit";

export const ProdcutsSlice = createSlice({
  name: "products",
  initialState: {
    productsArr: null,
  },
  reducers: {
    setProductsValue(state, { payload }) {
      state.productsArr = payload;
      console.log(state.productsArr);
    },
  },
});

export const { setProductsValue } = ProdcutsSlice.actions;

export const getProdcutsData = () => async (dispatch) => {
  const data = await fetch("http://localhost:3001/products").then((res) =>
    res.json()
  );

  dispatch(setProductsValue(data));
};

export default ProdcutsSlice.reducer;
