import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IProdcutFilter {
  status: boolean;
  priceRange: number;
}

const initialState: IProdcutFilter = {
  status: false,
  priceRange: 150,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    toggleState: (state) => {
        state.status = !state.status;
    },
    setPriceRange: (state, action: PayloadAction<number>) => {
        state.priceRange = action.payload;
    },
  },
});


export const {toggleState, setPriceRange} = productSlice.actions;
export default productSlice.reducer;
