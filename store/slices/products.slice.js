import { createSlice } from "@reduxjs/toolkit";

export const ProdcutsSlice = createSlice({
  name: "products",
  initialState: {
    productsArr: null,
  },
  reducers: {
    setProductsValue(state, { payload }) {
      state.productsArr = payload;
      // console.log(state.productsArr);
    },
    set_in_my_cart(state, { payload }) {
      const newArray = state.productsArr.map((obj) => {
        if (obj.id === payload.item.id) {
          return { ...obj, in_my_cart: true };
        } else {
          return obj;
        }
      });
      state.productsArr = newArray;
      // console.log(state.productsArr);
    },
  },
});

export const { setProductsValue, set_in_my_cart } = ProdcutsSlice.actions;

export const getProdcutsData = () => async (dispatch) => {
  const data = await fetch("http://localhost:3001/products").then((res) =>
    res.json()
  );

  dispatch(setProductsValue(data));
};

export default ProdcutsSlice.reducer;
