import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const ProdcutsSlice = createSlice({
  name: "products",
  initialState: {
    productsArr: [],
  },
  reducers: {
    setProductsValue(state, { payload }) {
      state.productsArr = payload;
    },
    set_in_my_cart(state, { payload }) {
      const newArray = state.productsArr.map((obj) => {
        if (obj.id === payload.id) {
          return { ...obj, in_my_cart: true };
        } else {
          return obj;
        }
      });
      state.productsArr = newArray;
      console.log(payload);
    },
  },
});

export const { setProductsValue, set_in_my_cart } = ProdcutsSlice.actions;

export const getProdcutsData = (pagenumper) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/products?_page=${pagenumper}&_limit=12`
    );
    // handle success

    dispatch(setProductsValue(response.data));
  } catch (error) {
    console.warn(error);
  }
};

export const getSearchProdcutsData = (myValue) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/products?q=${myValue}`
    );
    // handle success
    dispatch(setProductsValue(response.data));
  } catch (error) {
    // handle error
    alert(error);
  }
};

export default ProdcutsSlice.reducer;
