import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { FetchPizzasParams, Pizza, PizzaSliceState, Status } from './types';




export const fetchPizzas = createAsyncThunk<Pizza[], FetchPizzasParams>(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { title, order, cat, search, currPage } = params;
    const { data } = await axios.get<Pizza[]>(
      `https://63272eadba4a9c4753328ada.mockapi.io/pizzas?${currPage}&limit=4&sortBy=${title}&order=${order}${cat}${search}`,
    );

    return data;
  },
);

const initialState: PizzaSliceState = {
   products: [],
   status: Status.LOADING,
 };

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.products = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = Status.LOADING;
        state.products = [];
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
       state.status = Status.SUCCESS;
        state.products = action.payload;
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = Status.ERROR;
        state.products = [];
      });
  },
});


export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
