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
  },
});

export const { setProductsValue } = ProdcutsSlice.actions;

export const getProdcutsData = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/products?_page=${1}&_limit=12`
    );
    // handle success

    dispatch(setProductsValue(response.data));
  } catch (error) {
    // handle error
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
