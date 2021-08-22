import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart_products: [],
    totalPrice: "0",
  },
  reducers: {
    set_cart_array_value(state, { payload }) {
      // state.totalPrice = 0;
      // state.cart_products = [];
      if (!state.cart_products.find((item) => item.id === payload.id)) {
        let myCart = JSON.parse(JSON.stringify(payload));
        myCart.quantity = +1;
        Object.preventExtensions(myCart);
        state.cart_products.push(myCart);
        const StorMyTotalPrice = +state.totalPrice + +payload.price;
        state.totalPrice = StorMyTotalPrice;
      }
    },
    remove_item_from_cart(state, { payload }) {
      state.cart_products = state.cart_products.filter(
        (item) => item.id !== payload.item.id
      );
      state.totalPrice =
        +state.totalPrice + -payload.item.price * payload.item.quantity;
    },
    addOne(state, { payload }) {
      const StorMyTotalPrice = +state.totalPrice + +payload.item.price;
      state.totalPrice = StorMyTotalPrice;
      state.cart_products[payload.index].quantity++;
    },
    removeOne(state, { payload }) {
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
  set_cart_array_value,
  remove_item_from_cart,
  addOne,
  removeOne,
  restMyCart,
} = CartSlice.actions;

export default CartSlice.reducer;
