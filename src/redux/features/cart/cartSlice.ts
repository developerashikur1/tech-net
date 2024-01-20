import { IProduct } from '@/types/globalTypes';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface ICart {
  products: IProduct[];
  total: number;
}

const initialState: ICart = {
  products: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
        const existing = state.products.find((product) => product._id === action.payload._id);
        if(existing){
            existing.quantity= existing.quantity! + 1;
        }else{
            state.products.push({...action.payload, quantity: 1});
        }

        state.total += action.payload.price;
    },
    removeOneFromCart: (state, action: PayloadAction<IProduct>) => {
        const isAvailable = state.products.find((product) => product._id === action.payload._id);
        if(isAvailable && isAvailable.quantity! > 1){
            isAvailable.quantity = isAvailable.quantity! - 1;
        }else{
            state.products = state.products.filter((item) => item._id !== action.payload._id);
        }
        
        state.total -= action.payload.price;
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
        const isAvailable = state.products.filter((item) => item._id !== action.payload._id);
        state.products = isAvailable;
        state.total -= action.payload.price * action.payload.quantity!;
    }
  },
});

export const { addToCart, removeFromCart, removeOneFromCart } = cartSlice.actions;
export default cartSlice.reducer;
