import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart_products: [],
    totalPrice: "0",
  },
  reducers: {
    set_cart_array_value(state, { payload }) {
      if (!state.cart_products.find((item) => item.id === payload.id)) {
        state.cart_products.push(payload);
        const localStorageTotalPrice = +state.totalPrice + +payload.price;
        state.totalPrice = localStorageTotalPrice;

        localStorage.setItem("totalPrice", localStorageTotalPrice);
        //save my change to local localStorage
        const myStringCart = JSON.stringify(state.cart_products);
        localStorage.setItem("cart", myStringCart);
      }
    },
    remove_item_from_cart(state, { payload }) {
      state.cart_products = state.cart_products.filter(
        (item) => item.id !== payload.item.id
      );
      state.totalPrice = state.totalPrice - payload.item.price;
      localStorage.setItem("totalPrice", state.totalPrice);
      //save my change to local localStorage
      const myStringCart = JSON.stringify(state.cart_products);
      localStorage.setItem("cart", myStringCart);
      // console.log(payload.item, payload.index);
    },
    addOne(state, { payload }) {
      const localStorageTotalPrice = +state.totalPrice + +payload.item.price;
      state.totalPrice = localStorageTotalPrice;

      localStorage.setItem("totalPrice", localStorageTotalPrice);
    },
    removeOne(state, { payload }) {
      state.totalPrice = state.totalPrice - payload.item.price;
      localStorage.setItem("totalPrice", state.totalPrice);
      console.log(payload.item, payload.index);
    },
    Get_cart_array_localStorage(state) {
      const myCartdata = JSON.parse(localStorage.getItem("cart"));
      const myLocaltotalPrice = localStorage.getItem("totalPrice");
      state.totalPrice = myLocaltotalPrice;
      state.cart_products = myCartdata;
    },
  },
});

// export actions
export const {
  set_cart_array_value,
  remove_item_from_cart,
  Get_cart_array_localStorage,
  addOne,
  removeOne,
} = CartSlice.actions;

export default CartSlice.reducer;
