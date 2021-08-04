import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
	name: "cart",
	initialState: {
		cart_products: [],
	},
	reducers: {
		set_cart_array_value(state, { payload }) {
			if (!state.cart_products.find((item) => item.id === payload.id)) {
				state.cart_products.push(payload);
			}
		},
		remove_item_from_cart(state, { payload }) {
			state.cart_products = state.cart_products.filter(
				(item) => item.id !== payload
			);
		},
	},
});

// export actions
export const { set_cart_array_value, remove_item_from_cart } =
	CartSlice.actions;


export default CartSlice.reducer;
