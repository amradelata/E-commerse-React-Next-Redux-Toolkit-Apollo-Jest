import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart_products: [],
    totalPrice: 0,
  },
  reducers: {
    add_to_cart(state, { payload }) {
      if (!state.cart_products.find((item) => item.id === payload.id)) {
        state.cart_products.push({
          ...payload,
          quantity: 1,
        });
      }
    },
    set_add_to_total_price(state, { payload }) {
      const StorMyTotalPrice = +state.totalPrice + +payload.price;
      state.totalPrice = StorMyTotalPrice;
    },
    remove_item_from_cart(state, { payload }) {
      state.cart_products = state.cart_products.filter(
        (item) => item.id !== payload.item.id
      );
      state.totalPrice =
        +state.totalPrice + -payload.item.price * payload.item.quantity;
    },
    addToQty(state, { payload }) {
      const StorMyTotalPrice = +state.totalPrice + +payload.item.price;
      state.totalPrice = StorMyTotalPrice;
      state.cart_products[payload.index].quantity++;
    },
    removeFromQty(state, { payload }) {
      const StorMyTotalPrice = +state.totalPrice + -payload.item.price;
      state.totalPrice = StorMyTotalPrice;
      state.cart_products[payload.index].quantity--;

      if (state.cart_products[payload.index].quantity === 0) {
        state.cart_products.splice(payload.index, 1);
      }
    },
    restMyCart(state) {
      state.cart_products = [];
      state.totalPrice = 0;
    },
  },
});

// export actions
export const {
  add_to_cart,
  remove_item_from_cart,
  set_add_to_total_price,
  addToQty,
  removeFromQty,
  restMyCart,
} = CartSlice.actions;

export default CartSlice.reducer;
