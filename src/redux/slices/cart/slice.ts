import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCartStateFromLS } from '../../../utils/getCartStateFromLS';
import { CartSliceState, Product } from './types';


const cartInitialState = getCartStateFromLS()

const initialState: CartSliceState = {
  totalPrice: cartInitialState.totalPrice,
  products: cartInitialState.products,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const finded = state.products.find((product) => product.id === action.payload.id);

      if (finded) {
        finded.count++;
      } else {
        state.products.push(action.payload);
      }

      state.totalPrice = state.products.reduce(
        (total, curr) => (total += curr.price * curr.count),
        0,
      );
    },
    decrProduct: (state, action: PayloadAction<string>) => {
      const finded = state.products.find((product) => product.id === action.payload);

      if (finded && finded.count > 1) {
        finded.count--;
        state.totalPrice -= finded.price;
      }
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
      state.totalPrice = state.products.reduce(
        (total, curr) => (total += curr.price * curr.count),
        0,
      );
    },
    clearProducts: (state) => {
      state.products = [];
      state.totalPrice = 0;
    },
  },
});



export const { addProduct, decrProduct, removeProduct, clearProducts } = cartSlice.actions;

export default cartSlice.reducer;
