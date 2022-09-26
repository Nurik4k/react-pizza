import { RootState } from '../../store';

export const searchSelector = (state: RootState) => state.search;
export const searchValueSelector = (state: RootState) => state.search.searchValue;
