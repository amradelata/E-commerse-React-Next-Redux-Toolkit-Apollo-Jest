import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const ProdcutsSlice = createSlice({
  name: "products",
  initialState: {
    productsArr: [],
    previousptn: false,
    nextptn: false,
    nextNumber: 0,
    previousNumber: 0,
  },
  reducers: {
    setSearchProdcutsData(state, { payload }) {
      state.productsArr = payload;
    },
    paginatData(state, { payload }) {
      //useing parse-link-header package to Parses a link header to array
      const parse = require("parse-link-header");
      const parsed = parse(payload);
      //if there is no next include hide next btn and add the nextNumber dynamic
      if (parsed?.next) {
        state.nextptn = true;
        state.nextNumber = parsed?.next?._page;
      } else {
        state.nextptn = false;
      }
      //if there is no prev include hide prev btn and add the prevNumber dynamic
      if (parsed?.prev) {
        state.previousptn = true;
        state.previousNumber = parsed?.prev?._page;
      } else {
        state.previousptn = false;
      }
    },
  },
});

export const { setSearchProdcutsData, paginatData } = ProdcutsSlice.actions;

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

export default ProdcutsSlice.reducer;
