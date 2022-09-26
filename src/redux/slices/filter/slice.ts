import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSliceState, SetFiltersParams, SortItem } from './types';



const initialState: FilterSliceState = {
  categoryId: 0,
  sort: {
    title: 'популярности (ASC)',
    searchProp: 'rating' 
  },
  open: false,
  page: 1,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeCategory: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    changeSort: (state, action: PayloadAction<SortItem>) => {
      state.sort = action.payload;
      state.open = false
    },
    closeSortLabel: (state) => {
      state.open = false
    },
    toggleSortLabel: (state) => {
      state.open = !state.open;
    },
    changePage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setFilters: (state, action: PayloadAction<SetFiltersParams>) => {
      state.categoryId = +action.payload.category
      state.page = +action.payload.currPage
      state.sort = action.payload.sortProperty;
    }
  },
});

export const { changeCategory, changeSort, toggleSortLabel, changePage, setFilters, closeSortLabel } = filterSlice.actions;

export default filterSlice.reducer;
