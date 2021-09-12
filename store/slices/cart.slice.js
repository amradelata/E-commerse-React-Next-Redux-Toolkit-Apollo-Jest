import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart_products: [],
    totalPrice: 0,
  },
  reducers: {
    set_first_item_in_cart(state, { payload }) {
      if (!state.cart_products.find((item) => item.id === payload.id)) {
        let myCart = JSON.parse(JSON.stringify(payload));
        myCart.quantity = +1;
        Object.preventExtensions(myCart);

        state.cart_products.push(myCart);
      }
    },
    set_second_item_in_cart(state, { payload }) {
      state.cart_products.forEach((element, index) => {
        if (element.id === payload.id) {
          state.cart_products[index].quantity++;
        }
      });
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
  set_first_item_in_cart,
  set_second_item_in_cart,
  remove_item_from_cart,
  set_add_to_total_price,
  addOne,
  removeOne,
  restMyCart,
} = CartSlice.actions;

export default CartSlice.reducer;
