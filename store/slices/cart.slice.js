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
        const StorMyTotalPrice = +state.totalPrice + +payload.price;
        state.totalPrice = StorMyTotalPrice;
      }
    },
    remove_item_from_cart(state, { payload }) {
      state.cart_products = state.cart_products.filter(
        (item) => item.id !== payload.item.id
      );
      state.totalPrice = state.totalPrice - payload.item.price;
    },
    addOne(state, { payload }) {
      const StorMyTotalPrice = +state.totalPrice + +payload.item.price;
      state.totalPrice = StorMyTotalPrice;
    },
    removeOne(state, { payload }) {
      state.totalPrice = state.totalPrice - payload.item.price;
      console.log(payload.item, payload.index);
    },
  },
});

// export actions
export const {
  set_cart_array_value,
  remove_item_from_cart,

  addOne,
  removeOne,
} = CartSlice.actions;

export default CartSlice.reducer;
