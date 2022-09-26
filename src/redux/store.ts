import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import cartReducer from './slices/cart/slice';
import filterReducer from './slices/filter/slice';
import pizzaReducer from './slices/pizza/slice';
import searchReducer from './slices/search/slice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    search: searchReducer,
    cart: cartReducer,
    pizza: pizzaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
