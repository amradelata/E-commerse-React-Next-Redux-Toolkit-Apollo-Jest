import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const ProdcutsSlice = createSlice({
  name: "products",
  initialState: {
    productsArr: [],
    // pagenation: [],
    CurrentPage: 0, //pagenation
    nextPageNumber: 0,
    previousPageNumber: 0,
    pagesCount: 10,
    firstPage: 0,
    lastPage: 0,
    palodString: "",
  },
  reducers: {
    setProductsValue(state, { payload }) {
      state.productsArr = payload;
    },
    setPagenation(state, { payload }) {
      state.palodString = payload;
      const convertToArray = payload.split("_page=", 5);
      state.nextPageNumber = convertToArray[3][0];
      state.previousPageNumber = convertToArray[2][0];
      state.pagesCount = convertToArray[4][0];

      console.log(state.pagesCount + "000000000000000");
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
  } catch (error) {
    // handle error
    // console.warn(error);
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
