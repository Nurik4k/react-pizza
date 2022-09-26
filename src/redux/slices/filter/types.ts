export type SortItem = {
  title: string;
  searchProp: 'price' | 'name' | 'rating' | '-price' | '-name' | '-rating';
};

export interface FilterSliceState {
  categoryId: number;
  page: number;
  open: boolean;
  sort: SortItem;
}

//sortProperty=rating&category=2&currPage=1
export interface SetFiltersParams {
  sortProperty: SortItem;
  category: string;
  currPage: string;
}
