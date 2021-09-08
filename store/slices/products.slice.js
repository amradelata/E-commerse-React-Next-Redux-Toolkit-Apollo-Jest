import { createSlice } from "@reduxjs/toolkit";

export const ProdcutsSlice = createSlice({
  name: "products",
  initialState: {
    productsArr: [],
  },
  reducers: {
    setProductsValue(state, { payload }) {
      state.productsArr = payload;
    },
  },
});

export const { setProductsValue } = ProdcutsSlice.actions;

export const getProdcutsData = () => async (dispatch) => {
  const data = await fetch(
    "http://localhost:3001/products?_page=1&_limit=12"
  ).then((res) => res.json());
  console.log(data);
  dispatch(setProductsValue(data));
  //   console.log(res.headers.get("Link"));
};

export const getSearchProdcutsData = (myValue) => async (dispatch) => {
  const data = await fetch(
    // http://localhost:3001/products?q=shoe
    `http://localhost:3001/products?q=${myValue}`
  ).then((res) => res.json());
  console.log(data);

  dispatch(setProductsValue(data));
};

export default ProdcutsSlice.reducer;
