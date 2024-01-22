import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import productReducer from './features/prodcut/prodcutSlice';
import { api } from './api/apiSlice';
import userReducer from './features/user/userSlice';

const store = configureStore({
    reducer:{
        cart: cartReducer,
        prodcut: productReducer,
        user: userReducer,
        // external api
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;