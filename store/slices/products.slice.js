import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const ProdcutsSlice = createSlice({
  name: "products",
  initialState: {
    productsArr: [],
    // pagenation: [],
    CurrentPage: 5, //pagenation
    nextPageNumber: 0,
    previousPageNumber: 0,
    pagesCount: 0,
    firstPage: 0,
    lastPage: 0,
  },
  reducers: {
    setProductsValue(state, { payload }) {
      state.productsArr = payload;
    },
    setPagenation(state, { payload }) {
      const convertToArray = payload.split("_page=", 5);
      state.nextPageNumber = convertToArray[3][0];
      state.previousPageNumber = convertToArray[2][0];
      console.log(
        convertToArray[1][0],
        convertToArray[2][0],
        convertToArray[3][0],
        convertToArray[4][0]
      );
    },
  },
});

export const { setProductsValue, setPagenation } = ProdcutsSlice.actions;

export const getProdcutsData = (pagenumper) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/products?_page=${pagenumper}&_limit=12`
    );
    // handle success

    dispatch(setProductsValue(response.data));
    dispatch(setPagenation(response.headers.link));
    console.log(response);
  } catch (error) {
    // handle error
    // alert(error);
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
