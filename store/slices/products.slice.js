import { createSlice } from "@reduxjs/toolkit";

export const ProdcutsSlice = createSlice({
	name: "products",
	initialState: {
		products_arr: [],
	},
	reducers: {
		// reducers are ONLY allowed to edit state, no HTTP requests allowed
		set_products_array_value(state, { payload }) {
			state.products_arr = payload;
		},
	},
});

// export actions
export const { set_products_array_value } = ProdcutsSlice.actions;

// Thunk functions are where we always do https requests
export const LoadProdcutsDataFromBackend = () => async (dispatch) => {
	const data = await fetch(
		"https://vue-e-commerce-databse.herokuapp.com/products"
	).then((res) => res.json());

	dispatch(set_products_array_value(data));
};

export default ProdcutsSlice.reducer;
