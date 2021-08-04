import { configureStore } from '@reduxjs/toolkit';

import CartSlice from './slices/cart.slice';
import ProdcutsSlice from './slices/products.slice';

export default configureStore({
    reducer: {
        CartSlice,
        ProdcutsSlice
    },
    devTools: true,
});