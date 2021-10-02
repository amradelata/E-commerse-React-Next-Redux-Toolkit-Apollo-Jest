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
    setpaginatData(state, { payload }) {
      state.allpaginatData = payload;
    },
    setHomeProducts(state, { payload }) {
      state.productsArr = payload;
    },
  },
});

export const { setSearchProdcutsData, setHomeProducts, setpaginatData } =
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
export const getHomeProducts = (pagenumper) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/products?_page=${
        pagenumper ? pagenumper : 1 //if pagenumper = undefuend this mean user in home page so get first page else get the page = pagenumper
      }&_limit=12`
    );
    // handle success
    dispatch(setHomeProducts(response.data));
    dispatch(setpaginatData(response.headers.link));
  } catch (error) {
    // handle error
    alert(error);
  }
};

export default ProdcutsSlice.reducer;
