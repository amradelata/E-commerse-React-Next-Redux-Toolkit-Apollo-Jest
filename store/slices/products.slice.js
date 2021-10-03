import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    productsArr: null,
    allPaginationData: "",
  },
  reducers: {
    setSearchProductsData(state, { payload }) {
      state.productsArr = payload;
    },
    setPaginationData(state, { payload }) {
      state.allPaginationData = payload;
    },
    setHomeProducts(state, { payload }) {
      state.productsArr = payload;
    },
  },
});

export const {
  setSearchProductsData: setSearchProductsData,
  setHomeProducts,
  setPaginationData,
} = ProductsSlice.actions;

export const getSearchProductsData = (myValue) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/products?q=${myValue}`
    );
    // handle success
    dispatch(setSearchProductsData(response.data));
  } catch (error) {
    // handle error
    alert(error);
  }
};
export const getHomeProducts = (pageNumber) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/products?_page=${
        pageNumber ? pageNumber : 1 //if pageNumber = undefined this mean user in home page so get first page else get the page = pageNumber
      }&_limit=12`
    );
    // handle success
    dispatch(setHomeProducts(response.data));
    dispatch(setPaginationData(response.headers.link));
  } catch (error) {
    // handle error
    alert(error);
  }
};

export default ProductsSlice.reducer;
