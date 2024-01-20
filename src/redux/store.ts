import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import productReducer from './features/prodcut/prodcutSlice';

const store = configureStore({
    reducer:{
        cart: cartReducer,
        prodcut: productReducer,
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;