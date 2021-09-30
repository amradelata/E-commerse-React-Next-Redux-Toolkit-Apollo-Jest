import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const ProdcutsSlice = createSlice({
  name: "products",
  initialState: {
    productsArr: [],
    allpaginatData: "",
  },
  reducers: {
    setSearchProdcutsData(state, { payload }) {
      state.productsArr = payload;
    },
    paginatData(state, { payload }) {
      state.allpaginatData = payload;
    },
    setHomeProducts(state, { payload }) {
      state.productsArr = payload;
    },
  },
});

export const { setSearchProdcutsData, paginatData, setHomeProducts } =
  ProdcutsSlice.actions;

export const getSearchProdcutsData = (myValue) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/products?q=${myValue}`
    );
    // handle success
    dispatch(setSearchProdcutsData(response.data));
  } catch (error) {
    // handle error
    alert(error);
  }
};
export const getHomeProducts = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "http://localhost:3001/products?_page=1&_limit=12"
    );
    // handle success
    dispatch(setHomeProducts(response.data));
  } catch (error) {
    // handle error
    alert(error);
  }
};

export default ProdcutsSlice.reducer;
